// Layout JavaScript for Google Nano Banana AI 圖像創作技巧指南

// Global state
let currentLayout = 'mobile';
let zoomLevel = 1.0;
let tocVisible = false;
let teleprompterActive = false;
let autoScrollPaused = false;
let scrollRequest = null;
let lastScrollTime = 0;
let scrollSpeed = 6; // Default speed index (1-10), near 3/5 of slider
let scrollAccumulator = 0;
// 10 levels of speed multipliers, focused on the slower range
const SCROLL_SPEED_ARRAY = [0.05, 0.1, 0.15, 0.2, 0.25, 0.3, 0.35, 0.4, 0.5, 0.6];

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
    initializeLayout();
    setupEventListeners();
    updateLayoutIndicator();
    setupScrollAnimations();
    addScrollToTopButton();
    setupTechniqueCardAnimations();
    setupKeywordHighlighting();
    setupCollapsibleElements();
    setupLightbox();

    // Initialize TOC and Collapsible Sections if needed
    if (typeof generateTOC === 'function') generateTOC();
    if (typeof setupCollapsibleSections === 'function') {
        const defaultExpanded = window.COLLAPSIBLE_DEFAULT_EXPANDED !== undefined ? window.COLLAPSIBLE_DEFAULT_EXPANDED : true;
        setupCollapsibleSections(defaultExpanded);
    }
});

// Initialize layout
function initializeLayout() {
    // Set initial layout
    document.body.classList.add('mobile-layout');

    // Initialize PDF containers
    const pdfContainers = document.querySelectorAll('.pdf-iframe-container');
    pdfContainers.forEach(container => {
        container.style.display = 'none';
    });
}

// Setup event listeners
function setupEventListeners() {
    // Smooth scrolling for TOC links
    const tocLinks = document.querySelectorAll('.toc a');
    tocLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Setup collapsible elements
function setupCollapsibleElements() {
    // For collapsible lists in the outline
    const listToggles = document.querySelectorAll('.collapsible-list .toggle-indicator');
    listToggles.forEach(toggle => {
        const parentLi = toggle.parentElement;
        const sublist = parentLi.querySelector('ul');
        if (sublist) {
            // Initially collapse the sublist
            sublist.style.display = 'none';
            toggle.textContent = '(+)';

            parentLi.addEventListener('click', (e) => {
                // Stop propagation to prevent parent handlers from firing
                e.stopPropagation();

                const isHidden = sublist.style.display === 'none';
                sublist.style.display = isHidden ? 'block' : 'none';
                toggle.textContent = isHidden ? '(-)' : '(+)';
            });
            // Make the parent list item clickable
            parentLi.style.cursor = 'pointer';
        }
    });

    // For collapsible argument cards
    const cardToggles = document.querySelectorAll('.collapsible-card > h3');
    cardToggles.forEach(header => {
        const content = header.nextElementSibling;
        const indicator = header.querySelector('.toggle-indicator');

        if (content && indicator) {
            // The line that set display to 'block' has been removed to respect the initial state from HTML.
            // In babylon.html, the cards are set to 'display: none', so they will be collapsed.
            // content.style.display = 'block';

            header.addEventListener('click', () => {
                const isHidden = content.style.display === 'none';
                content.style.display = isHidden ? 'block' : 'none';
                indicator.textContent = isHidden ? '(-)' : '(+)';
            });
            // Make the header clickable
            header.style.cursor = 'pointer';
        }
    });
}

// Setup scroll animations
function setupScrollAnimations() {
    const sections = document.querySelectorAll('.section');

    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });
}

// Toggle layout between mobile and PC
function toggleLayout() {
    const body = document.body;
    const layoutBtn = document.getElementById('layout-btn');

    if (currentLayout === 'mobile') {
        body.classList.remove('mobile-layout');
        body.classList.add('pc-layout');
        currentLayout = 'pc';
        layoutBtn.textContent = '💻';
        layoutBtn.title = '切換佈局 (PC/Mobile)';
    } else {
        body.classList.remove('pc-layout');
        body.classList.add('mobile-layout');
        currentLayout = 'mobile';
        layoutBtn.textContent = '📱';
        layoutBtn.title = '切換佈局 (Mobile/PC)';
    }

    updateLayoutIndicator();
}

// Update layout indicator
function updateLayoutIndicator() {
    const indicator = document.getElementById('layout-indicator');
    if (indicator) {
        if (currentLayout === 'mobile') {
            indicator.innerHTML = '📱 Mobile Layout (預設)';
        } else {
            indicator.innerHTML = '💻 PC Layout';
        }
    }
}

// Cycle readable text size without compounding font sizes on nested elements.
function toggleZoom() {
    if (zoomLevel >= 1.5) {
        zoomLevel = 1.0; // Reset to normal
    } else {
        zoomLevel = Math.round((zoomLevel + 0.1) * 10) / 10;
    }

    const content = document.getElementById('main-content');
    if (content) {
        content.style.setProperty('--reader-zoom', zoomLevel);
    }

    // Update zoom button indicator
    const zoomBtn = document.querySelector('[onclick="toggleZoom()"]');
    if (zoomBtn) {
        if (zoomLevel > 1.0) {
            zoomBtn.title = `縮放 (${Math.round(zoomLevel * 100)}%)`;
        } else {
            zoomBtn.title = '縮放';
        }
    }
}

// Enhanced effects repurposed as Teleprompter
function toggleEffects() {
    const teleLine = document.getElementById('tele-line');
    const speedControl = document.getElementById('speed-control');
    const teleBtn = document.getElementById('tele-btn');
    const speedInput = document.getElementById('scroll-speed');

    if (!teleprompterActive) {
        teleprompterActive = true;
        autoScrollPaused = false;
        scrollAccumulator = 0;

        if (teleLine) teleLine.style.display = 'block';
        if (speedControl) speedControl.style.display = 'flex';
        if (teleBtn) {
            teleBtn.classList.add('active');
            teleBtn.title = '提詞器 (已啟用)';
        }

        // Initialize speed
        if (speedInput) {
            scrollSpeed = parseInt(speedInput.value);
            speedInput.oninput = function () {
                scrollSpeed = parseInt(this.value);
            };
        }

        // Start auto-scroll
        startAutoScroll();

        // Add pause/resume on click
        document.addEventListener('mousedown', togglePauseResume);
    } else {
        stopTeleprompter();
    }
}

function startAutoScroll() {
    if (!teleprompterActive || autoScrollPaused) return;
    if (scrollRequest) cancelAnimationFrame(scrollRequest);

    const scrollStep = () => {
        if (!teleprompterActive || autoScrollPaused) {
            scrollRequest = null;
            return;
        }

        // Use the value from our speed array for finer control
        const multiplier = SCROLL_SPEED_ARRAY[scrollSpeed - 1] || 0.2;
        scrollAccumulator += multiplier;

        if (scrollAccumulator >= 1) {
            const pixelsToScroll = Math.floor(scrollAccumulator);
            window.scrollBy(0, pixelsToScroll);
            scrollAccumulator -= pixelsToScroll;
        }

        scrollRequest = requestAnimationFrame(scrollStep);
    };

    scrollRequest = requestAnimationFrame(scrollStep);
}

function stopTeleprompter() {
    teleprompterActive = false;
    autoScrollPaused = false;
    scrollAccumulator = 0;
    if (scrollRequest) cancelAnimationFrame(scrollRequest);
    scrollRequest = null;

    const teleLine = document.getElementById('tele-line');
    const speedControl = document.getElementById('speed-control');
    const teleBtn = document.getElementById('tele-btn');

    if (teleLine) teleLine.style.display = 'none';
    if (speedControl) speedControl.style.display = 'none';
    if (teleBtn) {
        teleBtn.classList.remove('active');
        teleBtn.title = '提詞器';
    }

    document.removeEventListener('mousedown', togglePauseResume);
}

function togglePauseResume(e) {
    // Don't pause if clicking the button or slider
    if (e.target.closest('.controls')) return;

    autoScrollPaused = !autoScrollPaused;
    if (!autoScrollPaused) {
        startAutoScroll();
    }
}

// Toggle Table of Contents
function toggleTOC() {
    const toc = document.getElementById('toc');

    if (!tocVisible) {
        toc.classList.add('show');
        tocVisible = true;
    } else {
        toc.classList.remove('show');
        tocVisible = false;
    }
}

// Toggle PDF view
function togglePdfView(pdfId) {
    const pdfContainer = document.getElementById(pdfId);

    if (pdfContainer) {
        if (pdfContainer.style.display === 'none' || pdfContainer.style.display === '') {
            pdfContainer.style.display = 'block';
        } else {
            pdfContainer.style.display = 'none';
        }
    }
}

// Smooth scroll to top
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Add scroll to top button functionality
function addScrollToTopButton() {
    const scrollBtn = document.createElement('button');
    scrollBtn.innerHTML = '⬆️';
    scrollBtn.className = 'control-btn scroll-to-top';
    scrollBtn.title = '回到頂部';
    scrollBtn.onclick = scrollToTop;

    // Style the button
    scrollBtn.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 50px;
        height: 50px;
        border: none;
        border-radius: 50%;
        background: rgba(102, 126, 234, 0.9);
        color: white;
        font-size: 1.2em;
        cursor: pointer;
        transition: all 0.3s ease;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
        backdrop-filter: blur(10px);
        z-index: 1000;
        opacity: 0;
        visibility: hidden;
    `;

    document.body.appendChild(scrollBtn);

    // Show/hide button based on scroll position
    window.addEventListener('scroll', function () {
        if (window.pageYOffset > 300) {
            scrollBtn.style.opacity = '0.3';
            scrollBtn.style.visibility = 'visible';
        } else {
            scrollBtn.style.opacity = '0';
            scrollBtn.style.visibility = 'hidden';
        }
    });

    // Hover effect
    scrollBtn.addEventListener('mouseenter', function () {
        this.style.transform = 'translateY(-2px)';
        this.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.3)';
        this.style.opacity = '1';
    });

    scrollBtn.addEventListener('mouseleave', function () {
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.2)';
        this.style.opacity = '0.3';
    });
}

// Initialize scroll to top button
document.addEventListener('DOMContentLoaded', function () {
    addScrollToTopButton();
});

// Add keyboard shortcuts
document.addEventListener('keydown', function (e) {
    // Alt + L: Toggle layout
    if (e.altKey && e.key === 'l') {
        e.preventDefault();
        toggleLayout();
    }

    // Alt + Z: Toggle zoom
    if (e.altKey && e.key === 'z') {
        e.preventDefault();
        toggleZoom();
    }

    // Alt + E: Toggle effects
    if (e.altKey && e.key === 'e') {
        e.preventDefault();
        toggleEffects();
    }

    // Alt + T: Toggle TOC
    if (e.altKey && e.key === 't') {
        e.preventDefault();
        toggleTOC();
    }

    // Escape: Close TOC
    if (e.key === 'Escape' && tocVisible) {
        toggleTOC();
    }
});

// Add loading animation
function showLoadingAnimation() {
    const loader = document.createElement('div');
    loader.id = 'page-loader';
    loader.innerHTML = `
        <div class="loader-content">
            <div class="loader-spinner"></div>
            <p>載入中...</p>
        </div>
    `;

    loader.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(26, 26, 46, 0.9);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 9999;
        backdrop-filter: blur(10px);
    `;

    const loaderContent = loader.querySelector('.loader-content');
    loaderContent.style.cssText = `
        text-align: center;
        color: white;
    `;

    const spinner = loader.querySelector('.loader-spinner');
    spinner.style.cssText = `
        width: 50px;
        height: 50px;
        border: 3px solid rgba(255, 255, 255, 0.3);
        border-top: 3px solid #667eea;
        border-radius: 50%;
        animation: spin 1s linear infinite;
        margin: 0 auto 20px;
    `;

    // Add spinner animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
    `;
    document.head.appendChild(style);

    document.body.appendChild(loader);

    // Remove loader after page loads
    window.addEventListener('load', function () {
        setTimeout(() => {
            loader.style.opacity = '0';
            setTimeout(() => {
                if (loader.parentNode) {
                    loader.parentNode.removeChild(loader);
                }
            }, 300);
        }, 500);
    });
}

// Initialize loading animation
showLoadingAnimation();

// Text fade in effect by character
function fadeInTextByChar(elementId, delay = 100) {
    const element = document.getElementById(elementId);
    if (!element) return;

    // Recursive function to process text nodes while preserving structure
    function processNode(node, globalDelay = 0) {
        if (node.nodeType === Node.TEXT_NODE && node.textContent.trim().length > 0) {
            const text = node.textContent;
            const parent = node.parentNode;
            let currentDelay = globalDelay;

            // Split text into spans
            const fragment = document.createDocumentFragment();
            for (let i = 0; i < text.length; i++) {
                const span = document.createElement('span');
                span.textContent = text[i];
                span.style.opacity = '0';
                span.style.transition = 'opacity 0.5s ease-in';
                span.style.display = 'inline-block';
                fragment.appendChild(span);
                currentDelay += delay;

                setTimeout(() => {
                    span.style.opacity = '1';
                }, currentDelay);
            }

            // Replace text node with fragment
            parent.replaceChild(fragment, node);
            return currentDelay;
        } else if (node.nodeType === Node.ELEMENT_NODE) {
            let totalDelay = globalDelay;
            // Process child nodes, skipping <br> tags
            for (let child of Array.from(node.childNodes)) {
                if (child.tagName !== 'BR') {
                    totalDelay = processNode(child, totalDelay);
                }
            }
            return totalDelay;
        }
        return globalDelay;
    }

    // Start processing
    processNode(element);
}

// Initialize text fade effect
document.addEventListener('DOMContentLoaded', function () {
    // Apply fade in effect to prayer text
    setTimeout(() => {
        fadeInTextByChar('prayer-text', 17);
    }, 1000); // Start after 1 second, accelerated 3x (17ms delay)

    // Apply fade in effect to prayer closing text if exists
    setTimeout(() => {
        fadeInTextByChar('prayer-closing-text', 150);
    }, 2000); // Start after 2 seconds
});

// Simple Audio Player - iframe handles everything
class AudioPlayer {
    constructor(audioElementId, controlsContainerId) {
        this.audio = document.getElementById(audioElementId);
        this.iframe = document.querySelector('iframe[src*=".mp3"]');
        this.container = document.getElementById(controlsContainerId) || document.querySelector('.custom-audio-controls');
        this.isPlaying = false;

        this.init();
    }

    init() {
        if (!this.container) return;

        // Get control elements
        this.playPauseBtn = this.container.querySelector('#play-pause-btn');

        // For simple iframe, just handle play/pause button
        if (this.playPauseBtn) {
            this.playPauseBtn.addEventListener('click', () => this.togglePlayPause());
        }

        // Hide complex controls since iframe handles everything
        const progressBar = this.container.querySelector('#progress-bar');
        const volumeBtn = this.container.querySelector('#volume-btn');
        const volumeSlider = this.container.querySelector('#volume-slider');
        const currentTimeEl = this.container.querySelector('#current-time');
        const totalTimeEl = this.container.querySelector('#total-time');

        if (progressBar) progressBar.style.display = 'none';
        if (volumeBtn) volumeBtn.style.display = 'none';
        if (volumeSlider) volumeSlider.style.display = 'none';
        if (currentTimeEl) currentTimeEl.style.display = 'none';
        if (totalTimeEl) totalTimeEl.style.display = 'none';
    }

    togglePlayPause() {
        // Since iframe handles its own controls, just toggle visual state
        this.isPlaying = !this.isPlaying;
        if (this.playPauseBtn) {
            this.playPauseBtn.textContent = this.isPlaying ? '⏸️' : '▶️';
        }
    }
}

// Initialize enhanced audio player
document.addEventListener('DOMContentLoaded', function () {
    // Initialize the enhanced audio player
    const audioPlayer = new AudioPlayer('prayer-audio', 'custom-audio-controls');

    // Apply fade in effect to prayer closing text
    setTimeout(() => {
        fadeInTextByChar('prayer-closing-text', 150);
    }, 2000); // Start after 2 seconds
});

// Export functions for global access
window.toggleLayout = toggleLayout;
window.toggleZoom = toggleZoom;
window.toggleEffects = toggleEffects;
window.toggleTOC = toggleTOC;
window.togglePdfView = togglePdfView;
window.fadeInTextByChar = fadeInTextByChar;
window.AudioPlayer = AudioPlayer;

// Setup technique card animations
function setupTechniqueCardAnimations() {
    const techniqueCards = document.querySelectorAll('.technique-card');

    techniqueCards.forEach((card, index) => {
        // Add hover effects
        card.addEventListener('mouseenter', function () {
            this.style.transform = 'translateY(-5px) scale(1.02)';
            this.style.transition = 'all 0.3s ease';
        });

        card.addEventListener('mouseleave', function () {
            this.style.transform = 'translateY(0) scale(1)';
        });

        // Add click animation
        card.addEventListener('click', function () {
            this.style.transform = 'scale(0.98)';
            setTimeout(() => {
                this.style.transform = 'translateY(-5px) scale(1.02)';
            }, 150);
        });
    });
}

// Setup keyword highlighting functionality
function setupKeywordHighlighting() {
    // 從 HTML 中的 script tag 讀取關鍵字配置
    let keywords = ['Nano Banana', 'AI', '圖像生成', '提示詞', '迭代', '一致性', 'OpenArt', 'Gemini']; // 預設關鍵字

    const keywordsConfig = document.getElementById('keywords-config');
    if (keywordsConfig) {
        try {
            const config = JSON.parse(keywordsConfig.textContent);
            if (Array.isArray(config.keywords)) {
                keywords = config.keywords;
            }
        } catch (e) {
            console.warn('關鍵字配置解析失敗，使用預設關鍵字:', e);
        }
    }

    // 定義漸層背景給每個關鍵字 (同原邏輯)
    const gradients = [
        'linear-gradient(135deg, #ff6b6b, #000000)',
        'linear-gradient(135deg, #4ecdc4, #000000)',
        'linear-gradient(135deg, #45b7d1, #ffff00)',
        'linear-gradient(135deg, #96ceb4, #ff0000)',
        'linear-gradient(135deg, #feca57, #800080)',
        'linear-gradient(135deg, #ff9ff3, #00ff00)',
        'linear-gradient(135deg, #54a0ff, #ff00ff)',
        'linear-gradient(135deg, #5f27cd, #ffd700)',
        'linear-gradient(135deg, #00d2d3, #ff4500)',
        'linear-gradient(135deg, #ff9f43, #4b0082)',
        'linear-gradient(135deg, #01a3a4, #ffc0cb)',
        'linear-gradient(135deg, #f8b500, #00ffff)',
        'linear-gradient(135deg, #c44569, #00ff7f)',
        'linear-gradient(135deg, #786fa6, #ff1493)',
        'linear-gradient(135deg, #2ed573, #8b0000)'
    ];

    const punctuationGradients = [
        'linear-gradient(135deg, #ff6b6b, #ff0000)',
        'linear-gradient(135deg, #4ecdc4, #00ffff)',
        'linear-gradient(135deg, #45b7d1, #0000ff)',
        'linear-gradient(135deg, #96ceb4, #00ff00)',
        'linear-gradient(135deg, #feca57, #ffff00)',
        'linear-gradient(135deg, #ff9ff3, #ff00ff)',
        'linear-gradient(135deg, #54a0ff, #8a2be2)',
        'linear-gradient(135deg, #ff9f43, #ff8c00)'
    ];

    // 添加 CSS 規則
    let cssRules = '';
    keywords.forEach((keyword, index) => {
        const gradient = gradients[index % gradients.length];
        cssRules += `.keyword-${index} { background: ${gradient}; color: white; padding: 2px 4px; border-radius: 3px; font-weight: bold; } `;
    });
    punctuationGradients.forEach((gradient, index) => {
        cssRules += `.punctuation-${index} { background: ${gradient}; -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; font-weight: bold; } `;
    });

    const style = document.createElement('style');
    style.textContent = cssRules;
    document.head.appendChild(style);

    // 使用 TreeWalker 遍歷所有本文節點，確保連 li 內部的文字都能精準匹配
    const contentArea = document.querySelector('.markdown-preview') || document.body;
    const walker = document.createTreeWalker(contentArea, NodeFilter.SHOW_TEXT, null, false);

    let textNode;
    const nodesToProcess = [];
    while (textNode = walker.nextNode()) {
        // 過濾掉腳本和樣式標籤內的文字
        const parentTag = textNode.parentElement.tagName;
        if (parentTag !== 'SCRIPT' && parentTag !== 'STYLE' && parentTag !== 'NOSCRIPT') {
            nodesToProcess.push(textNode);
        }
    }

    let punctuationCounter = 0;
    const fullWidthPunctuations = /([。，、；：？！「」『』（）【】《》〈〉…—～·＊＆％＄＃＠＋－＝＜＞｛｝［］｜＼／])/g;

    nodesToProcess.forEach(node => {
        let text = node.nodeValue;
        let hasMatch = false;

        // 暫時將匹配到的內容標記，避免重複處理
        let htmlContent = text;

        // 處理關鍵字
        keywords.forEach((keyword, index) => {
            if (text.includes(keyword)) {
                const regex = new RegExp(keyword, 'gi');
                htmlContent = htmlContent.replace(regex, `__KWD_${index}__`);
                hasMatch = true;
            }
        });

        // 處理標點符號
        if (fullWidthPunctuations.test(text)) {
            htmlContent = htmlContent.replace(fullWidthPunctuations, (match) => {
                const colorIndex = punctuationCounter % punctuationGradients.length;
                punctuationCounter++;
                return `__PNC_${colorIndex}__${match}__ENDPNC__`;
            });
            hasMatch = true;
        }

        if (hasMatch) {
            // 將標記轉回 HTML
            keywords.forEach((keyword, index) => {
                const marker = `__KWD_${index}__`;
                const className = `keyword-${index}`;
                // 使用 split/join 替換以避免與 RegExp 衝突
                htmlContent = htmlContent.split(marker).join(`<span class="${className}">${keyword}</span>`);
            });

            // 轉回標點符號
            htmlContent = htmlContent.replace(/__PNC_(\d+)__(.*?)__ENDPNC__/g, (match, p1, p2) => {
                return `<span class="punctuation-${p1}">${p2}</span>`;
            });

            const span = document.createElement('span');
            span.innerHTML = htmlContent;
            node.parentNode.replaceChild(span, node);
        }
    });
}


// Enhanced scroll to section with smooth animation
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        // Add highlight effect
        section.style.background = 'rgba(102, 126, 234, 0.1)';
        section.style.transition = 'background 0.5s ease';

        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });

        // Remove highlight after animation
        setTimeout(() => {
            section.style.background = '';
        }, 2000);
    }
}

// Dynamic gradient color cycling
function startGradientCycling() {
    if (!gradientAnimationEnabled) return;

    const gradientBg = document.querySelector('.gradient-bg');
    if (!gradientBg) return;

    const colors = [
        'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
        'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
        'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
        'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
        'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)'
    ];

    let currentIndex = 0;

    setInterval(() => {
        if (gradientAnimationEnabled) {
            currentIndex = (currentIndex + 1) % colors.length;
            gradientBg.style.background = colors[currentIndex];
        }
    }, 3000);
}

// Initialize gradient cycling
setTimeout(startGradientCycling, 1000);

// Add technique card interaction tracking
function trackTechniqueInteraction(techniqueNumber) {
    console.log(`Technique ${techniqueNumber} viewed`);

    // Add visual feedback
    const techniqueCard = document.querySelector(`[data-id="technique-${techniqueNumber}"]`);
    if (techniqueCard) {
        techniqueCard.style.borderColor = '#667eea';
        techniqueCard.style.borderWidth = '2px';

        setTimeout(() => {
            techniqueCard.style.borderColor = '';
            techniqueCard.style.borderWidth = '';
        }, 3000);
    }
}

// Enhanced mobile responsiveness
function handleMobileInteractions() {
    if (window.innerWidth <= 768) {
        // Adjust touch interactions for mobile
        const cards = document.querySelectorAll('.technique-card, .card');

        cards.forEach(card => {
            card.addEventListener('touchstart', function () {
                this.style.transform = 'scale(0.98)';
            });

            card.addEventListener('touchend', function () {
                this.style.transform = 'scale(1)';
            });
        });
    }
}

// Initialize mobile interactions
window.addEventListener('resize', handleMobileInteractions);
handleMobileInteractions();

window.scrollToSection = scrollToSection;
window.trackTechniqueInteraction = trackTechniqueInteraction;
window.setupCollapsibleSections = setupCollapsibleSections; // Export to allow manual override

// --- Collapsible Sections Logic ---
function setupCollapsibleSections(defaultExpanded = true) {
    console.log('Initializing collapsible sections, defaultExpanded:', defaultExpanded);
    const contentContainer = document.querySelector('.markdown-preview');
    if (!contentContainer) return;

    const headers = Array.from(contentContainer.querySelectorAll('h2'));
    console.log(`Found ${headers.length} h2 headers to process.`);

    headers.forEach(header => {
        // Avoid double processing
        if (header.parentNode.classList.contains('collapsible-header')) return;

        // Create section container
        const section = document.createElement('div');
        section.className = 'collapsible-section';

        // Initial state
        if (defaultExpanded === false) {
            section.classList.add('collapsed');
        }

        // Create header container
        const headerDiv = document.createElement('div');
        headerDiv.className = 'collapsible-header';

        // Icon
        const icon = document.createElement('span');
        icon.className = 'collapsible-icon';
        icon.innerHTML = '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>';

        // Insert section before header
        if (header.parentNode) {
            header.parentNode.insertBefore(section, header);

            // Move header into headerDiv
            headerDiv.appendChild(header);
            headerDiv.appendChild(icon);
            section.appendChild(headerDiv);

            // Create content container
            const contentDiv = document.createElement('div');
            contentDiv.className = 'collapsible-content';
            section.appendChild(contentDiv);

            // Move subsequent siblings into contentDiv
            let nextNode = section.nextSibling;
            while (nextNode) {
                // Stop at next H2 or H1
                if (nextNode.nodeName === 'H2' || nextNode.nodeName === 'H1') {
                    break;
                }
                const sibling = nextNode;
                nextNode = nextNode.nextSibling;
                contentDiv.appendChild(sibling);
            }

            // Click event
            headerDiv.addEventListener('click', () => {
                section.classList.toggle('collapsed');
            });
        }
    });
}

// --- Section Text-to-Speech Controls ---
function setupSectionTtsControls() {
    if (window.__sectionTtsInitialized) return;
    window.__sectionTtsInitialized = true;
    (function () {
            'use strict';

            const CHUNK_SIZE = 1800;
            const TTS_HIGHLIGHT_CLASS = 'tts-current';
            let speechRun = 0;
            let activeButton = null;
            let activeUnits = [];
            let activeUnitIndex = -1;
            let activeGroups = [];
            let activeStatus = null;

            function clearHighlights() {
                document.querySelectorAll('.' + TTS_HIGHLIGHT_CLASS)
                    .forEach(function (node) {
                        node.classList.remove(TTS_HIGHLIGHT_CLASS);
                    });
            }

            function restoreUnits() {
                document.querySelectorAll('.tts-unit').forEach(function (unit) {
                    const parent = unit.parentNode;
                    if (!parent) return;
                    while (unit.firstChild) parent.insertBefore(unit.firstChild, unit);
                    parent.removeChild(unit);
                });
            }

            function buildCommaUnits(paragraph) {
                const walker = document.createTreeWalker(
                    paragraph,
                    NodeFilter.SHOW_TEXT,
                    null
                );
                const textNodes = [];
                let node;
                while ((node = walker.nextNode())) {
                    if (node.nodeValue.trim()) textNodes.push(node);
                }

                const units = [];
                textNodes.forEach(function (textNode) {
                    const parts = textNode.nodeValue.split(/([,，])/);
                    const fragment = document.createDocumentFragment();
                    parts.forEach(function (part) {
                        if (/^[,，]$/.test(part)) {
                            fragment.appendChild(document.createTextNode(part));
                        } else if (part.trim()) {
                            const wrapper = document.createElement('span');
                            wrapper.className = 'tts-unit';
                            wrapper.textContent = part;
                            fragment.appendChild(wrapper);
                            units.push(wrapper);
                        }
                    });
                    textNode.parentNode.replaceChild(fragment, textNode);
                });
                return units.filter(function (unit) {
                    return unit.innerText.trim().length > 0;
                });
            }

            function stopReading() {
                speechRun += 1;
                if (window.speechSynthesis) {
                    window.speechSynthesis.cancel();
                }
                clearHighlights();
                restoreUnits();
                activeUnits = [];
                activeUnitIndex = -1;
                activeGroups = [];
                if (activeButton) {
                    activeButton.textContent = '🔊 朗讀';
                    activeButton = null;
                }
                if (activeStatus) {
                    activeStatus.textContent = '0/4';
                    activeStatus = null;
                }
            }

            function buildGroups() {
                const groups = [[], [], [], []];
                activeUnits.forEach(function (unit, index) {
                    const groupIndex = Math.min(3, Math.floor(index * 4 / Math.max(1, activeUnits.length)));
                    groups[groupIndex].push(unit);
                });
                return groups;
            }

            function setStatus(index) {
                if (activeStatus) {
                    activeStatus.textContent = String(index + 1) + '/4';
                }
            }

            function readParagraphs(paragraphs, button, statusLabel, startGroupIndex) {
                if (!paragraphs.length || !window.speechSynthesis) return;

                stopReading();
                restoreUnits();
                const run = speechRun;
                activeButton = button;
                activeStatus = statusLabel;
                button.textContent = '⏹ 停止';
                activeUnits = paragraphs.reduce(function (all, paragraph) {
                    return all.concat(buildCommaUnits(paragraph));
                }, []);
                activeGroups = buildGroups();
                const startIndex = Math.max(0, Math.min(3, startGroupIndex || 0));
                activeUnitIndex = activeGroups[startIndex].length
                    ? activeUnits.indexOf(activeGroups[startIndex][0])
                    : 0;
                speakUnit(run);
            }

            function speakUnit(run) {
                if (run !== speechRun || activeUnitIndex < 0 || activeUnitIndex >= activeUnits.length) {
                    if (run === speechRun) stopReading();
                    return;
                }
                const unit = activeUnits[activeUnitIndex];
                clearHighlights();
                unit.classList.add(TTS_HIGHLIGHT_CLASS);
                unit.scrollIntoView({ behavior: 'smooth', block: 'center' });
                setStatus(activeGroups.findIndex(function (group) {
                    return group.indexOf(unit) !== -1;
                }));
                const chunks = unit.innerText.match(
                    new RegExp('[\\s\\S]{1,' + CHUNK_SIZE + '}(?:\\s+|$)', 'g')
                ) || [unit.innerText];
                let chunkIndex = 0;

                function speakChunk() {
                    if (run !== speechRun || chunkIndex >= chunks.length) {
                        activeUnitIndex += 1;
                        speakUnit(run);
                        return;
                    }
                    const spokenText = chunks[chunkIndex++]
                        .replace(/[，。！？；：、,.!?;:]+/g, ' ')
                        .trim();
                    if (!spokenText) {
                        speakChunk();
                        return;
                    }
                    const utterance = new SpeechSynthesisUtterance(spokenText);
                    utterance.lang = 'zh-TW';
                    utterance.rate = 2;
                    utterance.onend = speakChunk;
                    utterance.onerror = speakChunk;
                    window.speechSynthesis.speak(utterance);
                }
                speakChunk();
            }

            function jumpSentence(offset, button, statusLabel) {
                if (!activeUnits.length) return;
                const highlightedIndex = activeUnits.findIndex(function (unit) {
                    return unit.classList.contains(TTS_HIGHLIGHT_CLASS);
                });
                const currentIndex = highlightedIndex >= 0 ? highlightedIndex : activeUnitIndex;
                const currentGroupIndex = activeGroups.findIndex(function (group) {
                    return group.indexOf(activeUnits[currentIndex]) !== -1;
                });
                const targetGroupIndex = Math.max(0, Math.min(3, currentGroupIndex + offset));
                speechRun += 1;
                window.speechSynthesis.cancel();
                clearHighlights();
                activeButton = button;
                activeStatus = statusLabel;
                button.textContent = '⏹ 停止';
                activeUnitIndex = activeGroups[targetGroupIndex].length
                    ? activeUnits.indexOf(activeGroups[targetGroupIndex][0])
                    : 0;
                const run = speechRun;
                speakUnit(run);
            }

            function addSectionButtons() {
                document.querySelectorAll('.collapsible-section').forEach(function (section) {
                    const header = section.querySelector('.collapsible-header');
                    const content = section.querySelector('.collapsible-content');
                    if (!header || !content || header.querySelector('.section-read-button')) return;

                    const controls = document.createElement('span');
                    controls.className = 'section-tts-controls';
                    const backButton = document.createElement('button');
                    const button = document.createElement('button');
                    const forwardButton = document.createElement('button');
                    const statusLabel = document.createElement('span');
                    [backButton, button, forwardButton].forEach(function (control) {
                        control.type = 'button';
                        control.className = 'section-read-button';
                    });
                    backButton.textContent = '⏪';
                    button.textContent = '🔊 朗讀';
                    forwardButton.textContent = '⏩';
                    statusLabel.className = 'section-tts-status';
                    statusLabel.textContent = '0/4';
                    backButton.title = '跳到上一句';
                    button.title = '逐逗號朗讀本段內容';
                    forwardButton.title = '跳到下一句';
                    button.addEventListener('click', function (event) {
                        event.stopPropagation();
                        if (activeButton === button) {
                            stopReading();
                            return;
                        }
                        const paragraphs = Array.from(content.querySelectorAll('p'))
                            .filter(function (paragraph) {
                                return paragraph.innerText.trim().length > 0;
                            });
                        readParagraphs(paragraphs, button, statusLabel, 0);
                    });
                    backButton.addEventListener('click', function (event) {
                        event.stopPropagation();
                        jumpSentence(-1, button, statusLabel);
                    });
                    forwardButton.addEventListener('click', function (event) {
                        event.stopPropagation();
                        jumpSentence(1, button, statusLabel);
                    });
                    controls.append(backButton, button, forwardButton, statusLabel);
                    header.appendChild(controls);
                });
            }

            addSectionButtons();
    }());
}

window.setupSectionTtsControls = setupSectionTtsControls;

document.addEventListener('DOMContentLoaded', function () {
    if (typeof window.setupCollapsibleSections === 'function') {
        window.setupCollapsibleSections(window.COLLAPSIBLE_DEFAULT_EXPANDED !== false);
    }
    setupSectionTtsControls();
});

function generateTOC() {
    const tocList = document.getElementById('toc-list');
    if (!tocList) return;

    // Clear existing to avoid duplicates
    tocList.innerHTML = '';

    const headers = document.querySelectorAll('h2');

    headers.forEach((header, index) => {
        if (!header.id) {
            header.id = `section-${index}`;
        }

        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = `#${header.id}`;
        a.textContent = header.textContent;

        a.addEventListener('click', (e) => {
            e.preventDefault();
            header.scrollIntoView({
                behavior: 'smooth'
            });
            if (window.innerWidth < 768 && typeof toggleTOC === 'function') {
                toggleTOC();
            }
        });

        li.appendChild(a);
        tocList.appendChild(li);
    });
}

function setupLightbox() {
    // Create overlay if not exists
    let overlay = document.getElementById('lightbox-overlay');
    if (!overlay) {
        overlay = document.createElement('div');
        overlay.id = 'lightbox-overlay';
        overlay.className = 'lightbox-overlay';
        overlay.innerHTML = '<img id="lightbox-image" class="lightbox-image" src="" alt="Enlarged Image">';
        document.body.appendChild(overlay);

        overlay.addEventListener('click', () => {
            overlay.classList.remove('active');
            setTimeout(() => { overlay.style.display = 'none'; }, 300);
        });
    }

    const images = document.querySelectorAll('.markdown-preview img, .header img, .zoomable');
    images.forEach(img => {
        img.addEventListener('click', (e) => {
            // Only enlarge if it's a zoomable image
            e.preventDefault();
            e.stopPropagation();

            const lightboxImg = document.getElementById('lightbox-image');
            lightboxImg.src = img.src;
            overlay.style.display = 'flex';
            // Force reflow
            overlay.offsetHeight;
            overlay.classList.add('active');
        });
    });
}
