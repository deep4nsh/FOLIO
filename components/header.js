class PortfolioHeader extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    z-index: 1000;
                    background: var(--header-bg, rgba(255, 255, 255, 0.85));
                    backdrop-filter: blur(10px);
                    -webkit-backdrop-filter: blur(10px);
                    border-bottom: 1px solid var(--header-border, rgba(14, 165, 233, 0.1));
                    transition: background-color 0.3s, border-color 0.3s;
                }
                nav {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 1rem 2rem;
                    max-width: 1200px;
                    margin: 0 auto;
                }
                .logo {
                    font-size: 1.5rem;
                    font-weight: 700;
                    color: #0ea5e9;
                    text-decoration: none;
                    background: linear-gradient(135deg, #0ea5e9 0%, #d946ef 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }
                .nav-links {
                    display: flex;
                    gap: 2rem;
                    align-items: center;
                }
                .nav-links a {
                    text-decoration: none;
                    color: var(--nav-text, #334155);
                    font-weight: 500;
                    transition: color 0.3s ease;
                }
                .nav-links a:hover {
                    color: #0ea5e9;
                }
                .resume-btn {
                    background: #0ea5e9;
                    color: white !important;
                    padding: 0.5rem 1.25rem;
                    border-radius: 9999px;
                    transition: background-color 0.3s, transform 0.3s !important;
                }
                .resume-btn:hover {
                    background: #0284c7;
                    transform: translateY(-2px);
                }
                .right-controls {
                    display: flex;
                    align-items: center;
                    gap: 1.5rem;
                }
                .theme-toggle-btn {
                    background: none;
                    border: none;
                    cursor: pointer;
                    color: var(--btn-color, #334155);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 0.5rem;
                    border-radius: 50%;
                    transition: background-color 0.3s, color 0.3s;
                }
                .theme-toggle-btn:hover {
                    background-color: rgba(14, 165, 233, 0.1);
                    color: #0ea5e9;
                }
                .mobile-menu-btn {
                    display: none;
                    background: none;
                    border: none;
                    cursor: pointer;
                    color: var(--btn-color, #334155);
                }
                @media (max-width: 768px) {
                    .nav-links {
                        display: none;
                        flex-direction: column;
                        position: absolute;
                        top: 100%;
                        left: 0;
                        right: 0;
                        background: var(--header-bg-mobile, #1e293b);
                        padding: 1.5rem;
                        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
                        gap: 1.25rem;
                        align-items: stretch;
                        text-align: center;
                        border-bottom: 1px solid var(--header-border, rgba(14, 165, 233, 0.1));
                    }
                    .nav-links.active {
                        display: flex;
                    }
                    .mobile-menu-btn {
                        display: block;
                    }
                }
            </style>
            <nav>
                <a href="index.html" class="logo">FlutterVerse</a>
                <div class="right-controls">
                    <div class="nav-links">
                        <a href="index.html#skills">Skills</a>
                        <a href="projects.html">Projects</a>
                        <a href="blog.html">Blog</a>
                        <a href="index.html#contact">Contact</a>
                        <a href="https://drive.google.com/file/d/1od7WzCoERznl-aeYz3MRxMtk0C4PK_Vq/view?usp=sharing" class="resume-btn" target="_blank">
                            Resume
                        </a>
                    </div>
                    <button class="theme-toggle-btn" aria-label="Toggle theme">
                        <i data-feather="moon"></i>
                    </button>
                    <button class="mobile-menu-btn" aria-label="Toggle menu">
                        <i data-feather="menu"></i>
                    </button>
                </div>
            </nav>
        `;

        // Get elements
        const themeBtn = this.shadowRoot.querySelector('.theme-toggle-btn');
        const menuBtn = this.shadowRoot.querySelector('.mobile-menu-btn');
        const navLinks = this.shadowRoot.querySelector('.nav-links');

        // Mobile menu toggle
        menuBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            navLinks.classList.toggle('active');
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!this.contains(e.target)) {
                navLinks.classList.remove('active');
            }
        });

        // Initial Theme State Setup
        const initialDark = localStorage.getItem('theme') !== 'light';
        updateThemeIcon(initialDark);

        // Theme toggle button click
        themeBtn.addEventListener('click', () => {
            const isDarkNow = document.documentElement.classList.contains('dark');
            const newDark = !isDarkNow;
            
            // Dispatch dynamic custom event for script.js
            document.dispatchEvent(new CustomEvent('theme-changed', {
                detail: { isDark: newDark }
            }));
            
            updateThemeIcon(newDark);
        });

        function updateThemeIcon(isDark) {
            const icon = themeBtn.querySelector('i');
            if (!icon) return;
            
            if (isDark) {
                icon.outerHTML = `<i data-feather="sun" style="color: #eab308; width: 20px; height: 20px;"></i>`;
            } else {
                icon.outerHTML = `<i data-feather="moon" style="color: #475569; width: 20px; height: 20px;"></i>`;
            }
            
            if (window.feather) {
                window.feather.replace(this.shadowRoot);
            }
        }

        // Apply feather icons inside Shadow DOM
        setTimeout(() => {
            if (window.feather) {
                window.feather.replace(this.shadowRoot);
            }
        }, 100);
    }
}

customElements.define('portfolio-header', PortfolioHeader);
