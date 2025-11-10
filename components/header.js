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
                    background: rgba(255, 255, 255, 0.95);
                    backdrop-filter: blur(10px);
                    border-bottom: 1px solid rgba(14, 165, 233, 0.1);
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
                    font-weight: bold;
                    color: #0ea5e9;
                    text-decoration: none;
                }
                .nav-links {
                    display: flex;
                    gap: 2rem;
                    align-items: center;
                }
                .nav-links a {
                    text-decoration: none;
                    color: #e2e8f0;
                    font-weight: 500;
                    transition: color 0.3s ease;
                }
                .nav-links a:hover {
                    color: #0ea5e9;
                }
                .mobile-menu-btn {
                    display: none;
                    background: none;
                    border: none;
                    cursor: pointer;
                    color: #e2e8f0;
                }
                @media (max-width: 768px) {
                    .nav-links {
                        display: none;
                        flex-direction: column;
                        position: absolute;
                        top: 100%;
                        left: 0;
                        right: 0;
                        background: #1e293b;
                        padding: 1rem;
                        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
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
                <a href="#" class="logo">FlutterVerse</a>
                <div class="nav-links">
                    <a href="#skills">Skills</a>
                    <a href="#projects">Projects</a>
                    <a href="#contact">Contact</a>
                    <a href="#" class="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-500 transition-colors">
                        Resume
                    </a>
                </div>
<button class="mobile-menu-btn">
                    <i data-feather="menu"></i>
                </button>
            </nav>
        `;

        // Mobile menu toggle
        const menuBtn = this.shadowRoot.querySelector('.mobile-menu-btn');
        const navLinks = this.shadowRoot.querySelector('.nav-links');
        
        menuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!this.contains(e.target)) {
                navLinks.classList.remove('active');
            }
        });
    }
}

customElements.define('portfolio-header', PortfolioHeader);