// Layout JavaScript for 顯化與吸引力法則深度分析報告

// Global state
let currentLayout = 'mobile';
let isZoomed = false;
let effectsEnabled = false;
let tocVisible = false;

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeLayout();
    setupEventListeners();
    updateLayoutIndicator();
    setupScrollAnimations();
    addScrollToTopButton();
    setupYouTubePreview();
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

// Toggle zoom
function toggleZoom() {
    const content = document.getElementById('main-content');
    
    if (!isZoomed) {
        content.classList.add('zoomed');
        isZoomed = true;
    } else {
        content.classList.remove('zoomed');
        isZoomed = false;
    }
}

// Toggle effects
function toggleEffects() {
    const body = document.body;
    
    if (!effectsEnabled) {
        body.classList.add('effects-enabled');
        effectsEnabled = true;
        
        // Trigger animations for visible sections
        const sections = document.querySelectorAll('.section');
        sections.forEach((section, index) => {
            setTimeout(() => {
                section.style.animation = 'fadeInUp 0.6s ease-out';
            }, index * 100);
        });
    } else {
        body.classList.remove('effects-enabled');
        effectsEnabled = false;
        
        // Remove animations
        const sections = document.querySelectorAll('.section');
        sections.forEach(section => {
            section.style.animation = '';
        });
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

// Index page JavaScript
// Add any interactive functionality here
