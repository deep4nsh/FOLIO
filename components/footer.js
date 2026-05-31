class PortfolioFooter extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    background: var(--footer-bg, #0b1329);
                    border-top: 1px solid var(--header-border, rgba(14, 165, 233, 0.1));
                    color: var(--nav-text, #cbd5e1);
                    padding: 3rem 2rem;
                    transition: background-color 0.3s, color 0.3s;
                }
                .footer-content {
                    max-width: 1200px;
                    margin: 0 auto;
                    text-align: center;
                }
                .social-links {
                    display: flex;
                    justify-content: center;
                    gap: 1.5rem;
                    margin-bottom: 2rem;
                }
                .social-links a {
                    color: var(--nav-text, #cbd5e1);
                    text-decoration: none;
                    transition: color 0.3s ease, transform 0.3s ease;
                    display: inline-block;
                }
                .social-links a:hover {
                    color: #0ea5e9;
                    transform: translateY(-3px);
                }
                .copyright {
                    opacity: 0.8;
                    font-size: 0.9rem;
                }
            </style>
            <div class="footer-content">
                <div class="social-links">
                    <a href="https://github.com/deep4nsh/" aria-label="GitHub" target="_blank">
                        <i data-feather="github" class="w-6 h-6"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/deepanshdev/" aria-label="LinkedIn" target="_blank">
                        <i data-feather="linkedin" class="w-6 h-6"></i>
                    </a>
                    <a href="mailto:deepansh.gup124@gmail.com" aria-label="Email">
                        <i data-feather="mail" class="w-6 h-6"></i>
                    </a>
                </div>
                <p class="copyright">© 2026 Deepansh Gupta. Built with ❤️ and Flutter.</p>
            </div>
        `;
        
        // Render feather icons inside Shadow DOM
        setTimeout(() => {
            if (window.feather) {
                window.feather.replace(this.shadowRoot);
            }
        }, 100);
    }
}

customElements.define('portfolio-footer', PortfolioFooter);
