class Navbar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <header id="main-header">
        <div class="container">
          <a href="index.html" class="logo">
            <img src="assets/logo.png" alt="RAGA Wood and Veneer Logo">
          </a>
          
          <button class="hamburger" id="mobile-menu-btn">
            ☰
          </button>
          
          <nav>
            <ul class="nav-links" id="nav-links">
              <li><a href="index.html">Home</a></li>
              <li><a href="about.html">About</a></li>
              <li class="dropdown">
                <a href="products.html">Products ▾</a>
                <ul class="dropdown-menu">
                  <li><a href="veneer.html">Veneer</a></li>
                  <li><a href="laminate.html">Laminate</a></li>
                  <li><a href="highlighter.html">Highlighter</a></li>
                  <li><a href="wallpaper.html">Wall Paper</a></li>
                </ul>
              </li>
              <li><a href="applications.html">Applications</a></li>
              <li><a href="gallery.html">Display Gallery</a></li>
              <li><a href="contact.html" class="btn btn-secondary" style="color: white; padding: 10px 20px;">Contact Us</a></li>
            </ul>
          </nav>
        </div>
      </header>
    `;
  }
}

class Footer extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer>
        <div class="container">
          <div class="footer-grid">
            <div class="footer-col">
              <h4>Contact Info</h4>
              <p>Ragawood Veneers Pvt Ltd.<br>
              403/1, Dakshindari Road,<br>
              ALCOVE GLORIA Mall, Shop No. 1,<br>
              VIP, Golaghat, Kolkata – 700048,<br>
              West Bengal, India</p>
              <p style="margin-top: 15px;">
                Phone: +91 8017757170<br>
                Email: ragawoodveneers@gmail.com
              </p>
            </div>
            
            <div class="footer-col">
              <h4>Quick Menu</h4>
              <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="about.html">About Us</a></li>
                <li><a href="applications.html">Applications</a></li>
                <li><a href="gallery.html">Display Gallery</a></li>
                <li><a href="contact.html">Contact Us</a></li>
              </ul>
            </div>
            
            <div class="footer-col">
              <h4>Products</h4>
              <ul>
                <li><a href="veneer.html">Veneer</a></li>
                <li><a href="laminate.html">Laminate</a></li>
                <li><a href="highlighter.html">Highlighter</a></li>
                <li><a href="wallpaper.html">Wall Paper</a></li>
              </ul>
            </div>
            
            <div class="footer-col">
              <h4>Follow Us</h4>
              <div class="social-icons">
                <a href="#" aria-label="Facebook">FB</a>
                <a href="#" aria-label="Twitter">X</a>
                <a href="#" aria-label="Instagram">IG</a>
              </div>
            </div>
          </div>
          
          <div class="footer-bottom">
            <p>&copy; ${new Date().getFullYear()} Ragawood Veneers Pvt. Ltd. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    `;
  }
}

customElements.define('app-navbar', Navbar);
customElements.define('app-footer', Footer);
