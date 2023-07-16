class Footer extends HTMLElement {
    constructor(active = "") {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <footer>
            <div class="col-xs-12 text-center">
                <h3>Follow me</h3>
                <ul>
                    <li>
                        <a href="https://www.linkedin.com/in/javiermaciasempere/" target="_blank"> 
                            <i class="bi bi-linkedin"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/Javier-Macia" target="_blank">
                            <i class="bi bi-github"></i>
                        </a> 
                        </li>
                    <li>
                        <a href="https://www.instagram.com/javierms_" target="_blank"> 
                            <i class="bi bi-instagram"></i> 
                        </a> 
                    </li>
                </ul>
            </div>
        </footer>
        `;
    }
}

customElements.define('footer-component', Footer);
