import * as React from 'react';
import '../../../public/styles/home/home-numbers-section.css';

export interface IAppProps {}

export default function HomeNumbersSection (props: IAppProps) {
  return (
    <div className="home-numbers-section">
      <div className="home-numbers-section--content">
        <div className="home-numbers-section--section">
          <div className="home-numbers-section--number">
            80+
          </div>
          <div className="home-numbers-section--description">
            Over 80% of clients return for additional projects.
          </div>
        </div>
        <div className="home-numbers-section--section">
          <div className="home-numbers-section--number">
            50+
          </div>
          <div className="home-numbers-section--description">
            We have designed 50+ complete websites and brand identities. 
          </div>
        </div>
        <div className="home-numbers-section--section">
          <div className="home-numbers-section--number">
            20+
          </div>
          <div className="home-numbers-section--description">
          On average, projects are completed over 20% faster than industry standards.          
          </div>
        </div>
        <div className="home-numbers-section--section">
          <div className="home-numbers-section--number">
            5+
          </div>
          <div className="home-numbers-section--description">
            4+ years of delivering <span>web design and development</span> services.
          </div>
        </div>
      </div>
    </div>
  );
}
