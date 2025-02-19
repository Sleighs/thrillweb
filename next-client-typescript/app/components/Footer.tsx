import '../../styles/footer.css'
type Props = {}

export default function Footer({}: Props) {
  return (
    <div className="footer">
      <div className="footer--container">
        <div className="footer--logo">P</div>
        <div className="footer--logo-mobile">
          <span style={{fontWeight: 400, fontSize: '42px', transform: 'translateY(-2px)'}}>P</span>
          <span style={{fontWeight: 400, fontSize: '42px'}}>ULSE</span>
          <span style={{fontWeight: 300, fontSize: '42px'}}>WEB</span>
        </div>

        <div className="footer--section">
          <div className="footer--content">
            <div className="footer--contact-item footer--contact-item-1">
              <div className="footer--contact-item-title">Call us</div>
              <div className="footer--contact-item-value">+1 123-456-7890</div>
            </div>

            <div className="footer--contact-item footer--contact-item-2">
              <div className="footer--contact-item-title">Send us a message</div>
              <div className="footer--contact-item-value">contact@pulseweb.com</div>
            </div>

            <div className="footer--contact-item footer--contact-item-3">
              <div className="footer--contact-item-title">Our Offices</div>
              <div className="footer--contact-item-value">South Jersey Office</div>
            </div>

            <div className="footer--social-media-section">
              <div className="footer--menu-item">Facebook</div>
              <div className="footer--menu-item">Twitter</div>
              <div className="footer--menu-item">Instagram</div>
              <div className="footer--menu-item">LinkedIn</div>
              <div className="footer--menu-item">Github</div>
              <div className="footer--menu-item">Dribbble</div>
              <div className="footer--menu-item">Behance</div>
            </div>
          
            <div className="footer--menu">
              <div className="footer--menu-item">Home</div>
              <div className="footer--menu-item">About Us</div>
              <div className="footer--menu-item">Our Work</div>
              <div className="footer--menu-item">Our Team</div>
              <div className="footer--menu-item">Careers</div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}