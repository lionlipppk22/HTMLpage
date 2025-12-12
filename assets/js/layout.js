// Layout JavaScript for Google Nano Banana AI 圖像創作技巧指南

// Global state
let currentLayout = 'mobile';
let zoomLevel = 1.0;
let effectsEnabled = false;
let tocVisible = false;
let gradientAnimationEnabled = false;

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

// Enhanced zoom functionality with multiple levels
function toggleZoom() {
    const textElements = document.querySelectorAll('p, h1, h2, h3, h4, li, .card, .technique-card');

    // Remove previous zoom classes
    textElements.forEach(el => {
        el.classList.remove('zoomed-1-1', 'zoomed-1-2', 'zoomed-1-3', 'zoomed-1-4', 'zoomed-1-5');
    });

    // Cycle through zoom levels
    if (zoomLevel >= 1.5) {
        zoomLevel = 1.0; // Reset to normal
    } else {
        zoomLevel += 0.1;
    }

    // Apply zoom class based on level
    if (zoomLevel > 1.0) {
        const zoomClass = `zoomed-${zoomLevel.toFixed(1).replace('.', '-')}`;
        textElements.forEach(el => {
            el.classList.add(zoomClass);
        });
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

// Enhanced effects with dynamic gradients and breathing animations
function toggleEffects() {
    const gradientBg = document.querySelector('.gradient-bg');
    const cards = document.querySelectorAll('.card, .technique-card');

    if (!effectsEnabled) {
        effectsEnabled = true;

        // Enable dynamic gradient animation
        if (gradientBg) {
            gradientBg.classList.add('animated');
            gradientAnimationEnabled = true;
        }

        // Enhanced breathing effect for cards
        cards.forEach((card, index) => {
            setTimeout(() => {
                card.style.animation = 'breathe 18s ease-in-out infinite';
                card.style.animationDelay = `${index * 0.8}s`;
            }, index * 100);
        });

        // Add floating animation to technique numbers
        const techniqueNumbers = document.querySelectorAll('.technique-number');
        techniqueNumbers.forEach((num, index) => {
            setTimeout(() => {
                num.style.animation = 'float 2s ease-in-out infinite';
                num.style.animationDelay = `${index * 0.1}s`;
            }, index * 50);
        });

        // Update effects button
        const effectsBtn = document.querySelector('[onclick="toggleEffects()"]');
        if (effectsBtn) {
            effectsBtn.title = '特效 (已啟用)';
            effectsBtn.style.background = 'rgba(102, 126, 234, 0.8)';
            effectsBtn.style.color = 'white';
        }

    } else {
        effectsEnabled = false;

        // Disable gradient animation
        if (gradientBg) {
            gradientBg.classList.remove('animated');
            gradientAnimationEnabled = false;
        }

        // Remove breathing effects
        cards.forEach(card => {
            card.style.animation = '';
        });

        // Remove floating animation
        const techniqueNumbers = document.querySelectorAll('.technique-number');
        techniqueNumbers.forEach(num => {
            num.style.animation = '';
        });

        // Reset effects button
        const effectsBtn = document.querySelector('[onclick="toggleEffects()"]');
        if (effectsBtn) {
            effectsBtn.title = '特效';
            effectsBtn.style.background = '';
            effectsBtn.style.color = '';
        }
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

    // 定義漸層背景給每個關鍵字
    const gradients = [
        'linear-gradient(135deg, #ff6b6b, #000000)', // 紅色到白，加大對比
        'linear-gradient(135deg, #4ecdc4, #000000)', // 青色到黑
        'linear-gradient(135deg, #45b7d1, #ffff00)', // 藍色到黃
        'linear-gradient(135deg, #96ceb4, #ff0000)', // 綠色到紅
        'linear-gradient(135deg, #feca57, #800080)', // 黃色到紫
        'linear-gradient(135deg, #ff9ff3, #00ff00)', // 粉紅到綠
        'linear-gradient(135deg, #54a0ff, #ff00ff)', // 淺藍到品紅
        'linear-gradient(135deg, #5f27cd, #ffd700)', // 紫色到金
        'linear-gradient(135deg, #00d2d3, #ff4500)', // 亮青到橙紅
        'linear-gradient(135deg, #ff9f43, #4b0082)', // 橙色到靛
        'linear-gradient(135deg, #01a3a4, #ffc0cb)', // 深青到粉
        'linear-gradient(135deg, #f8b500, #00ffff)', // 金黃到青
        'linear-gradient(135deg, #c44569, #00ff7f)', // 深粉到春綠
        'linear-gradient(135deg, #786fa6, #ff1493)', // 深紫到深粉
        'linear-gradient(135deg, #2ed573, #8b0000)'  // 亮綠到暗紅
    ];

    // 動態生成 CSS 樣式給每個關鍵字
    let cssRules = '';
    keywords.forEach((keyword, index) => {
        const gradient = gradients[index % gradients.length];
        const className = `keyword-${index}`;
        cssRules += `.${className} { background: ${gradient}; color: white; padding: 2px 4px; border-radius: 3px; font-weight: bold; } `;
    });

    // 定義8色漸層給全型標點符號（只改變文字顏色，不改變背景）
    const punctuationGradients = [
        'linear-gradient(135deg, #ff6b6b, #ff0000)', // 紅色系
        'linear-gradient(135deg, #4ecdc4, #00ffff)', // 青色系
        'linear-gradient(135deg, #45b7d1, #0000ff)', // 藍色系
        'linear-gradient(135deg, #96ceb4, #00ff00)', // 綠色系
        'linear-gradient(135deg, #feca57, #ffff00)', // 黃色系
        'linear-gradient(135deg, #ff9ff3, #ff00ff)', // 粉紅系
        'linear-gradient(135deg, #54a0ff, #8a2be2)', // 紫藍系
        'linear-gradient(135deg, #ff9f43, #ff8c00)'  // 橙色系
    ];

    // 為每個標點符號顏色生成 CSS 類別
    punctuationGradients.forEach((gradient, index) => {
        cssRules += `.punctuation-${index} { background: ${gradient}; -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; font-weight: bold; } `;
    });

    // 添加 CSS 規則
    const style = document.createElement('style');
    style.textContent = cssRules;
    document.head.appendChild(style);

    const textElements = document.querySelectorAll('p, li, td, th');

    textElements.forEach(element => {
        let html = element.innerHTML;

        // 先處理關鍵字高亮
        keywords.forEach((keyword, index) => {
            const className = `keyword-${index}`;
            // 使用更寬鬆的 regex 來匹配中文關鍵字，忽略詞邊界
            const regex = new RegExp(keyword, 'gi');
            html = html.replace(regex, `<span class="${className}">${keyword}</span>`);
        });

        // 處理全型標點符號高亮（8色循環）
        // 全型標點符號列表：。，、；：？！「」『』（）【】《》〈〉…—etc.
        const fullWidthPunctuations = /([。，、；：？！「」『』（）【】《》〈〉…—～·＊＆％＄＃＠＋－＝＜＞｛｝［］｜＼／])/g;
        let punctuationCounter = 0;

        html = html.replace(fullWidthPunctuations, (match) => {
            const colorIndex = punctuationCounter % punctuationGradients.length;
            punctuationCounter++;
            return `<span class="punctuation-${colorIndex}">${match}</span>`;
        });

        element.innerHTML = html;
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

// Prayer fade-in animation trigger
document.addEventListener('DOMContentLoaded', function () {
    const prayerContent = document.getElementById('prayer-content');
    if (prayerContent) {
        setTimeout(() => {
            prayerContent.style.opacity = '1';
            prayerContent.classList.add('prayer-fade');
        }, 500); // Delay for smooth entrance
    }
});

window.scrollToSection = scrollToSection;
window.trackTechniqueInteraction = trackTechniqueInteraction;

/* --- Demo Page Specific Scripts --- */
document.addEventListener("DOMContentLoaded", function () {
    // Apply highlighting to the main content area if it exists
    const contentContainer = document.querySelector('.markdown-preview') || document.body;

    // 2. Collapsible Section Logic (Demo specific)
    const headers = Array.from(contentContainer.querySelectorAll('h2'));

    headers.forEach(header => {
        // Avoid double processing if already processed
        if (header.parentNode.classList.contains('collapsible-header')) return;

        // Create section container
        const section = document.createElement('div');
        section.className = 'collapsible-section collapsed';

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

            // Add click event
            headerDiv.addEventListener('click', () => {
                section.classList.toggle('collapsed');
            });
        }
    });

    // Initialize TOC
    if (typeof generateTOC === 'function') {
        generateTOC();
    }
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
