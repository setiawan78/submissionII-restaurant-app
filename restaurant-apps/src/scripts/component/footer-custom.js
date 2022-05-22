class FooterCustom extends HTMLElement {
    connectedCallback() {
      this.render();
    }
  
    render() {
      this.innerHTML = `
        <footer>
        <div class="footer-logo">
          <center>
              <img src="./images/heros/logo-waroengku-white.png" width="80" height="40" alt="Logo WaroengKu">
          </center>
        </div>
        <p>WaroengKu Apps</p>
        Copyright &copy; 2022 - WaroengKu Apps
        </footer>
      `;
    }
  }
  
  customElements.define('footer-custom', FooterCustom);
  