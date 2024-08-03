import * as React from 'react';
import '../../../public/styles/home/home-portfolio-highlight.css';
export interface IHomePortfolioHighlightProps {
}

export default function HomePortfolioHighlight (props:IHomePortfolioHighlightProps) {
  return (
    <div className="home-portfolio-highlight">
      <div className="home-portfolio-highlight--info-section">
        <div className="home-portfolio-highlight--info-section--subtitle">
          Proud to work with them
        </div>
        <div className="home-portfolio-highlight--info-section--title">
          We put the <span style={{color: '#38c1c8'}}>Spark</span> in your eyes
        </div>
        <div className="home-portfolio-highlight--info-section--description">
          <p>Yes, we are proud to highlight the people we’ve recently worked with and the job we’ve completed for them.</p>
          <p>We are dedicated to changing the market as a top SEO and web design firm with innovative problem-solving, adaptable technique, steadfast ethics, and years of expertise.</p>
        </div>
        <div className="home-portfolio-highlight--info-section--button">
          <div>Get Started</div>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-up-right" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0-.5.5v6a.5.5 0 0 0 .5.5h6a.5.5 0 0 0 .5-.5v-6z"/>
            <path fillRule="evenodd" d="M11.854 9.646a.5.5 0 0 0-.708-.708l-4.5 4.5a.5.5 0 0 0 .708.708l4.5-4.5z"/>
          </svg>
        </div>
      </div>
      <div className="home-portfolio-highlight--image-section">
        <div className="home-portfolio-highlight--image-section--slideshow">
          <div className="home-portfolio-highlight--image-section--slideshow--slide">
            <div className="home-portfolio-highlight--image-section--slideshow--slide--image">
              <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" />
            </div>
          </div>
          <div className="home-portfolio-highlight--image-section--slideshow--slide">
            <div className="home-portfolio-highlight--image-section--slideshow--slide--image">  
              <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
