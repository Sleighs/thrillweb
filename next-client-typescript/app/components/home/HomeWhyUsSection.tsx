import { useEffect, useRef } from 'react';
import '../../../styles/home/home-why-us-section.css';

export interface IAppProps {
}

export default function HomeWhyUsSection (props: IAppProps) {
  const sectionRef = useRef(null);

  const handleScroll = () => {
    // console.log('hey')
    // const rect = sectionRef.current.getBoundingClientRect();
    // console.log(rect)
    // if (rect.y  < 20) {
    //   sectionRef.current.classList.add('home-why-us-section--active');
    // } else {
    //   sectionRef.current.classList.remove('home-why-us-section--active');
    // }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="home-why-us-section">
      <div className="home-why-us-section--content">

        <div className="home-why-us-section--section" ref={sectionRef}>
          <div className="home-why-us-section--subtitle">
            Why PulseWeb?
            </div>
          <div className="home-why-us-section--title">
            Why should you hire us to create your online business solution?
          </div>
          <div className="home-why-us-section--description">
            <p>We help companies all around the world develop a strong online presence thanks to our 24/7, accessible internet services. Our team is enthusiastic about what we do and continuously keeps up with the most recent business news. Because each member of our staff is a qualified specialist in their particular sector, we can guarantee the greatest outcomes for our clients.</p>
            <p>Selecting PULSEWEB: Why? In addition to helping companies all over the world establish an unrivaled online presence, we make sure that their solutions are constantly accessible online, around-the-clock, and from any location. We are honored to assist clients in Miami and all over the world. Businesses all across the world have come to trust us because of our solid track record and top-notch services.</p>
          </div>
          <div className="home-why-us-section--request-quote-button">Request a free quote</div>
        </div>

        <div className="home-why-us-section--section2">
          <div className="home-why-us-section--section2-item">
            <div className="home-why-us-section--section2-text">
              <div className="home-why-us-section--section2-item-subtitle">You are</div>
              <div className="home-why-us-section--section2-item-title">Always Available</div>
              <div className="home-why-us-section--section2-item-description">Imagine that you receive a late-night call from a customer or prospective client asking for information, and you are unable to answer. However, if your company has a website, it is constantly open and available to anyone who wants to learn more, around-the-clock!</div>
            </div>
            <div className="home-why-us-section--section2-image">
              </div>
          </div>

          <div className="home-why-us-section--section2-item">
            <div className="home-why-us-section--section2-text">
              <div className="home-why-us-section--section2-item-subtitle">We do</div>
              <div className="home-why-us-section--section2-item-title">better Advertising</div>
              <div className="home-why-us-section--section2-item-description">
                <p>High-performance websites with unlimited advertising opportunities can be found for a lot less money than traditional advertising methods.</p>
<p>
Due to the diversity of advertising and marketing opportunities they provide, high-performance websites can be highly beneficial for businesses.</p>
              </div>
            </div>
            <div className="home-why-us-section--section2-image">
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
