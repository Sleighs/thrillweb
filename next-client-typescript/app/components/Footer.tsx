import '../../styles/footer.css'
type Props = {}

export default function Footer({}: Props) {
  return (
    <div className="footer">
      <div className="footer--logo">PulseWeb</div>
      <div className="footer--contact-items">
        <div className="footer--contact-item">
          <div className="footer--contact-item-title">Call us</div>
          <div className="footer--contact-item-value">+1 123-456-7890</div>
        </div>
        <div className="footer--contact-item">
          <div className="footer--contact-item-title">Send us a message</div>
          <div className="footer--contact-item-value">pulseweb@gmail.com</div>
        </div>
        <div className="footer--contact-item">
          <div className="footer--contact-item-title">Our Offices</div>
          <div className="footer--contact-item-value">South Jersey</div>
        </div>

      </div>
      <div className="footer--row">
        <div className="footer--menu">
          <div className="footer--menu-item">Home</div>
          <div className="footer--menu-item">About Us</div>
          <div className="footer--menu-item">Our Work</div>
          <div className="footer--menu-item">Our Team</div>
          <div className="footer--menu-item">Careers</div>
        </div>
        <div className="footer--social-media-row">
          <div className="footer--menu-item">Facebook</div>
          <div className="footer--menu-item">Twitter</div>
          <div className="footer--menu-item">Instagram</div>
          <div className="footer--menu-item">LinkedIn</div>
          <div className="footer--menu-item">Github</div>
          <div className="footer--menu-item">Dribbble</div>
          <div className="footer--menu-item">Behance</div>
        </div>
      </div>
    </div>
  )
}