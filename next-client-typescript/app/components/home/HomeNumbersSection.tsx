import * as React from 'react';
import '../../../styles/home/home-numbers-section.css';

export interface IAppProps {
}

export default function HomeNumbersSection (props: IAppProps) {
  return (
    <div className="home-numbers-section">
      <div className="home-numbers-section--content">
        <div className="home-numbers-section--section">
          <div className="home-numbers-section--number">
            800+
          </div>
          <div className="home-numbers-section--description">
            We deliver results for over 800 clients worldwide every single month.
          </div>
        </div>
        <div className="home-numbers-section--section">
          <div className="home-numbers-section--number">
            758+
          </div>
          <div className="home-numbers-section--description">
            We have designed 758+ complete brand identities. Every year.
          </div>
        </div>
        <div className="home-numbers-section--section">
          <div className="home-numbers-section--number">
            5,000+
          </div>
          <div className="home-numbers-section--description">
           5,000 businesses trust us with their online presence.
          </div>
        </div>
        <div className="home-numbers-section--section">
          <div className="home-numbers-section--number">
            11+
          </div>
          <div className="home-numbers-section--description">
            11+ years of <span>web design and development</span> expertise.
          </div>
        </div>
      </div>
    </div>
  );
}
