class PortfolioFooter extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    background: #0c4a6e;
                    color: white;
                    padding: 3rem 2rem;
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
                    color: white;
                    text-decoration: none;
                    transition: color 0.3s ease;
                }
                .social-links a:hover {
                    color: #0ea5e9;
                }
.copyright {
                    opacity: 0.8;
                    font-size: 0.9rem;
                }
            </style>
            <div class="footer-content">
                <div class="social-links">
                    <a href="https://github.com" aria-label="GitHub">
                        <i data-feather="github" class="w-6 h-6"></i>
                    </a>
                    <a href="https://linkedin.com" aria-label="LinkedIn">
                        <i data-feather="linkedin" class="w-6 h-6"></i>
                    </a>
                    <a href="https://twitter.com" aria-label="Twitter">
                        <i data-feather="twitter" class="w-6 h-6"></i>
                    </a>
                    <a href="mailto:hello@flutterverse.dev" aria-label="Email">
                        <i data-feather="mail" class="w-6 h-6"></i>
                    </a>
                </div>
                <p class="copyright">© 2024 FlutterVerse Nexus. Built with ❤️ and Flutter.</p>
            </div>
        `;
    }
}

customElements.define('portfolio-footer', PortfolioFooter);