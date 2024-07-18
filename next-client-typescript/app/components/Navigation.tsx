import '../../styles/navigation.css'

type Props = {}

export default function Navigation({}: Props) {
  return (
    <div className="navigation">
      <div className="navigation--logo">PulseWeb</div>
      <div className="navigation--menu">
        <div className="navigation--menu-item">Home</div>
        <div className="navigation--menu-item">About Us</div>
        <div className="navigation--menu-item">Services +</div>
        <div className="navigation--menu-item">Our Work</div>
        <div className="navigation--menu-item">Contact Us</div>
      </div>
      <div className="navigation--get-started-button">Pulse your project</div>
      <div className="navigation--hamburger">Hamburger</div>
    </div>
  )
}