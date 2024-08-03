import * as React from 'react';
import '../../../public/styles/home/home-trusted-worldwide-section.css';

export interface IAppProps {
}

export default function HomeTrustedWorldwideSection(props: IAppProps) {
  
  return (
    <div className="home-trusted-worldwide-section">
      <div className="home-trusted-worldwide-section--content">
        <div className="home-trusted-worldwide-section--info">
          <div className='home-trusted-worldwide-section--info-subtitle'>
            Trusted Worldwide
          </div>
          <div className="home-trusted-worldwide-section--info-title">
            Our services reach clients in over 90 countries worldwide.
          </div>
          <div className="home-trusted-worldwide-section--info-description">
            <p>SEO, the production of mobile apps, and brand identity creation are just a few of our comprehensive digital marketing offerings. Your company will have the web exposure it deserves thanks to our efficient method. We concentrate on offering the content, experiences, and data-driven insights that are most important to your organization in order to increase conversions.</p>
            <p>Our expertise extends to custom solutions for feature-rich websites or applications and covers the most popular CMS systems, including WordPress, Drupal, and Magento. Dynamic websites need ongoing maintenance to maintain peak performance. With our managed services, we elevate your online visibility thanks to our dedication to constant observation.</p>
          </div>
          <div className="home-trusted-worldwide-section--info-button">
            <div>Get Started </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-up-right" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"/>
            </svg>
          </div>
        </div>

        <div className="home-trusted-worldwide-section--image">
          <div className="home-trusted-worldwide-section--customer-comment">
            <div className="home-trusted-worldwide-section--customer-comment-content">
              <div className="home-trusted-worldwide-section--customer-comment-text">
                &quot;Working with PulseWeb was a breath. An efficient and responsive team. They created a beautiful identity and a perfect <span style={{color: '#38C1C9'}}>custom website</span> for our company.
              </div>
              <div className="home-trusted-worldwide-section--customer-comment-author">
                <div className="home-trusted-worldwide-section--customer-comment-author-name">Dave M.</div>
                <div className="home-trusted-worldwide-section--customer-comment-author-title">Client</div>
              </div> 
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
