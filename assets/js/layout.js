// Layout JavaScript for Google Nano Banana AI 圖像創作技巧指南

// Global state
let currentLayout = 'mobile';
let zoomLevel = 1.0;
let effectsEnabled = false;
let tocVisible = false;
let gradientAnimationEnabled = false;

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeLayout();
    setupEventListeners();
    updateLayoutIndicator();
    setupScrollAnimations();
    addScrollToTopButton();
    setupYouTubePreview();
    addFloatingAnimation();
    setupTechniqueCardAnimations();
    setupKeywordHighlighting();
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
        link.addEventListener('click', function(e) {
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

// Setup YouTube preview functionality
function setupYouTubePreview() {
    const youtubeLinks = document.querySelectorAll('.youtube-link');

    youtubeLinks.forEach(link => {
        // Add click tracking
        link.addEventListener('click', function(e) {
            // Allow the link to open normally
            console.log('YouTube link clicked:', this.href);

            // Add a visual feedback
            const playButton = this.querySelector('.play-button');
            if (playButton) {
                playButton.style.transform = 'scale(0.9)';
                setTimeout(() => {
                    playButton.style.transform = 'scale(1)';
                }, 150);
            }
        });

        // Add hover effects
        link.addEventListener('mouseenter', function() {
            const thumbnail = this.querySelector('.youtube-thumbnail img');
            if (thumbnail) {
                thumbnail.style.filter = 'brightness(1.1)';
            }
        });

        link.addEventListener('mouseleave', function() {
            const thumbnail = this.querySelector('.youtube-thumbnail img');
            if (thumbnail) {
                thumbnail.style.filter = 'brightness(1)';
            }
        });

        // Handle image load errors
        const img = link.querySelector('.youtube-thumbnail img');
        if (img) {
            img.addEventListener('error', function() {
                // Fallback if YouTube thumbnail fails to load
                this.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgwIiBoZWlnaHQ9IjM2MCIgdmlld0JveD0iMCAwIDQ4MCAzNjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0ODAiIGhlaWdodD0iMzYwIiBmaWxsPSIjRkY0NDQ0Ii8+Cjx0ZXh0IHg9IjI0MCIgeT0iMTgwIiBmaWxsPSJ3aGl0ZSIgZm9udC1zaXplPSIyNCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+WW91VHViZSBWaWRlbzwvdGV4dD4KPC9zdmc+';
                this.alt = 'YouTube 影片預覽';
            });
        }
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
                card.style.animation = 'breathe 3s ease-in-out infinite';
                card.style.animationDelay = `${index * 0.2}s`;
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

// Add floating animation keyframes dynamically
function addFloatingAnimation() {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
        }
    `;
    document.head.appendChild(style);
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
    scrollBtn.className = 'scroll-to-top';
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
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollBtn.style.opacity = '1';
            scrollBtn.style.visibility = 'visible';
        } else {
            scrollBtn.style.opacity = '0';
            scrollBtn.style.visibility = 'hidden';
        }
    });
    
    // Hover effect
    scrollBtn.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-2px)';
        this.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.3)';
    });
    
    scrollBtn.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.2)';
    });
}

// Initialize scroll to top button
document.addEventListener('DOMContentLoaded', function() {
    addScrollToTopButton();
});

// Add keyboard shortcuts
document.addEventListener('keydown', function(e) {
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
    window.addEventListener('load', function() {
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

    const text = element.textContent;
    element.innerHTML = '';

    for (let i = 0; i < text.length; i++) {
        const span = document.createElement('span');
        span.textContent = text[i];
        span.style.opacity = '0';
        span.style.transition = 'opacity 0.5s ease-in';
        span.style.display = 'inline-block';
        element.appendChild(span);

        setTimeout(() => {
            span.style.opacity = '1';
        }, i * delay);
    }
}

// Initialize text fade effect
document.addEventListener('DOMContentLoaded', function() {
    // Apply fade in effect to prayer closing text
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
document.addEventListener('DOMContentLoaded', function() {
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
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.02)';
            this.style.transition = 'all 0.3s ease';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });

        // Add click animation
        card.addEventListener('click', function() {
            this.style.transform = 'scale(0.98)';
            setTimeout(() => {
                this.style.transform = 'translateY(-5px) scale(1.02)';
            }, 150);
        });
    });
}

// Setup keyword highlighting functionality
function setupKeywordHighlighting() {
    const keywords = ['Nano Banana', 'AI', '圖像生成', '提示詞', '迭代', '一致性', 'OpenArt', 'Gemini'];
    const textElements = document.querySelectorAll('p, li');

    textElements.forEach(element => {
        let html = element.innerHTML;

        keywords.forEach(keyword => {
            const regex = new RegExp(`\\b${keyword}\\b`, 'gi');
            html = html.replace(regex, `<span class="keyword">${keyword}</span>`);
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
            card.addEventListener('touchstart', function() {
                this.style.transform = 'scale(0.98)';
            });

            card.addEventListener('touchend', function() {
                this.style.transform = 'scale(1)';
            });
        });
    }
}

// Initialize mobile interactions
window.addEventListener('resize', handleMobileInteractions);
handleMobileInteractions();

// Export functions for global access
window.scrollToSection = scrollToSection;
window.trackTechniqueInteraction = trackTechniqueInteraction;
