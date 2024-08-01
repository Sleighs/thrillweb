import '../../../public/styles/home/hero-section.css'

export interface IAppProps {
}

export default function HeroSection (props: IAppProps) {
  return (
    <div className="hero-section">
      <div className="hero-section--content">
        <div className="hero-section--main-content">
          <div className="hero-section--title">
            Your trusted South Jersey Web Design Agency with a global reach.
          </div>
          <div className="hero-section--description">
            We at PULSEWEB are your partners in success, not just a web design company. With innovative solutions that relfect your vision and connect with contemporary audiences, we assist you in unleashing the potential of your company. We provide small and medium-sized businesses all over the world best-in-class services as a full-service digital marketing firm.
          </div>
          <div className="hero-section--links">
            <div className="hero-section--link hero-section--link1">
              <span>Get Started</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-up-right" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"/>
              </svg>
            </div>
            <div className="hero-section--link hero-section--link2">
              <span>About PulseWeb</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-box-arrow-up-right" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5"/>
                <path fillRule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z"/>
              </svg>  
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
