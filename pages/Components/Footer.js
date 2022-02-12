import Image from 'next/image'
import FooterLogo from '../img/footerlogo.png'

export default function Footer () {
  return (
    <section className="footer">
    <div className="container">
      <div className="newslater">
        <h3>Get access to excussive update</h3>
        <form className="form" >
          <div>
            <input type="text" placeholder="info@eample.com" />
            <button>Subscribe to the newslater</button>
          </div>
        </form>
      </div>
      <div className="footer-link">
        <div className="row text-center">
          <div className="col-md-3 footer-border">
            <Image src={FooterLogo} alt="footer-logo" />
          </div>
          <div className="col-md-3 footer-border">
            <p className="footer-heading">Quick Links</p>
            <ul>
              <li> <a >Home</a> </li>
              <li> <a >About Us</a> </li>
              <li> <a >Contact Us</a> </li>
            </ul>
          </div>
          <div className="col-md-3 footer-border">
            <p className="footer-heading">Quick Links</p>
            <ul>
              <li> <a >Home</a> </li>
              <li> <a >About Us</a> </li>
              <li> <a >Contact Us</a> </li>
            </ul>
          </div>
          <div className="col-md-3">
            <p className="footer-heading">Quick Links</p>
            <ul>
              <li> <a >Home</a> </li>
              <li> <a >About Us</a> </li>
              <li> <a >Contact Us</a> </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="copyright">
        <a >copyright@2021 dotgfx.com</a>
      </div>
    </div>
  </section>
  )
}
