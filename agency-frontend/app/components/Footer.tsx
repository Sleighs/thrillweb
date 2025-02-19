import '../../public/styles/footer.css'

type Props = {}

export default function Footer({}: Props) {
  return (
    <div className="footer">
      <div className="footer--container">
        <div className="footer--logo" style={{userSelect: 'none'}}>
          {/* <img src="https://imgbox.com/TqzQchEa" alt="ThrillWeb" /> */}
          <span style={{fontWeight: 400, fontSize: '42px', transform: 'translateY(-2px)'}}>T</span>
          <span style={{fontWeight: 400, fontSize: '42px'}}>HRILL</span>
          <span style={{fontWeight: 300, fontSize: '42px'}}>WEB</span>
        </div>
        <div className="footer--logo-mobile">
          <span style={{fontWeight: 400, fontSize: '42px', transform: 'translateY(-2px)'}}>T</span>
          <span style={{fontWeight: 400, fontSize: '42px'}}>HRILL</span>
          <span style={{fontWeight: 300, fontSize: '42px'}}>WEB</span>
        </div>

        <div className="footer--section">
          <div className="footer--content">
            <div className="footer--contact-item footer--contact-item-1">
              <div className="footer--contact-item-title">Call us</div>
              <div className="footer--contact-item-value">+1 609 472 2897</div>
              <div className="footer--contact-item-value">+1 954 261 2792</div>    
            </div>

            <div className="footer--contact-item footer--contact-item-2">
              <div className="footer--contact-item-title">Send us a message</div>
              <div className="footer--contact-item-value">contact@thrillwebdigital.com</div>
              <div className="footer--contact-item-value">samuel@thrillwebdigital.com</div>

            </div>

            <div className="footer--contact-item footer--contact-item-3">
              <div className="footer--contact-item-title">Our Office</div>
              <div className="footer--contact-item-value">Cherry Hill, NJ, United States</div>
            </div>

            <div className="footer--social-media-section" style={{display: 'none'}}>
              <div className="footer--social-media-menu-item">Facebook</div>
              <div className="footer--social-media-menu-item">Twitter</div>
              <div className="footer--social-media-menu-item">Instagram</div>
              <div className="footer--social-media-menu-item">LinkedIn</div>
              <div className="footer--social-media-menu-item">Github</div>
              <div className="footer--social-media-menu-item">Dribbble</div>
              <div className="footer--social-media-menu-item">Behance</div>
              <div className="footer--social-media-menu-item-icon">FB</div>
              <div className="footer--social-media-menu-item-icon">TW</div>
              <div className="footer--social-media-menu-item-icon">IN</div>
              <div className="footer--social-media-menu-item-icon">LI</div>
              <div className="footer--social-media-menu-item-icon">GH</div>
              <div className="footer--social-media-menu-item-icon">DR</div>
              <div className="footer--social-media-menu-item-icon">BE</div>
            </div>
          
            <div className="footer--menu" style={{display: 'none'}}>
              <div className="footer--menu-item">Home</div>
              <div className="footer--menu-item">About Us</div>
              <div className="footer--menu-item">Our Work</div>
              <div className="footer--menu-item">Our Team</div>
              <div className="footer--menu-item">Careers</div>
            </div>
          </div>
        </div>

      </div>
      <div style={{
        display: 'flex', 
        justifyContent: 'center', 
        position: 'absolute',
        bottom: '0',
        backgroundColor: '#0F0F0F60', 
        height: '30px',
        width: '100%',
        alignContent: 'center',
        padding: '5px',
      }}>
        <div className="footer--copyright" style={{
          userSelect: 'none', 
          fontSize: '.8em', 
          //color: '#ffffff80',
        }}>©2025 ThrillWeb Digital. All rights reserved.</div>
      </div>
    </div>
  )
}