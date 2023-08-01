class Header extends HTMLElement {
    constructor(active = "") {
        super();

        this.active_page = this.getAttribute('active-page') || active;
    }

    connectedCallback() {
        this.innerHTML = `
        <header>
            <input type="checkbox" id="nav-toggle">
            <label for="nav-toggle" class="nav-toggle-label">
                <div>
                    <hr/>
                    <hr/>
                    <hr/>
                </div>
            </label>
            <nav>
                <ul>
                    <li class="nav-item ${this.active_page === '' ? 'active' : ''}">
                        <a href=" ${this.active_page === '' ? '.' : '..'}">Home</a>
                    </li>
                    <li class="nav-item ${this.active_page === 'about' ? 'active' : ''}">
                        <a href=" ${this.active_page === '' ? '.' : '..'}/about/">About</a>
                    </li>
                    <li class="nav-item ${this.active_page === 'projects' ? 'active' : ''}">
                        <a href=" ${this.active_page === '' ? '.' : '..'}/projects/">My projects</a>
                    </li>
                    <li class="nav-item ${this.active_page === 'experience' ? 'active' : ''}">
                        <a href=" ${this.active_page === '' ? '.' : '..'}/experience/">Experience</a>
                    </li>
                </ul>
            </nav>
        </header>
        `;
    }
}

customElements.define('header-component', Header);
