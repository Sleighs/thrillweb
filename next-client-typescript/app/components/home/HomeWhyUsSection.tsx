import { useEffect, useRef } from 'react';
import '../../../styles/home/home-why-us-section.css';

export interface IAppProps {
}

export default function HomeWhyUsSection (props: IAppProps) {
  const containerRef = useRef(null);
  const ghostRef = useRef(null);
  const sectionRef = useRef(null);

  const handleScroll = () => {
    const rect = containerRef?.current?.getBoundingClientRect();
    
    console.table(rect)

    // If the section is in the viewport
    if (rect.top  < 80 && rect.bottom > 900 ) {
      sectionRef?.current?.classList.add('home-why-us-section--active');
      ghostRef?.current?.classList.add('home-why-us-section--ghost-active')
    } else {
      sectionRef?.current?.classList.remove('home-why-us-section--active');
      ghostRef?.current?.classList.remove('home-why-us-section--ghost-active')
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="home-why-us-section" ref={containerRef}>
      <div className="home-why-us-section--content">
        <div className="home-why-us-section--section-ghost" ref={ghostRef}></div>
        <div className="home-why-us-section--section1" ref={sectionRef}>
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
              <div className="home-why-us-section--section2-item-title">Better Advertising</div>
              <div className="home-why-us-section--section2-item-description">
                <p>High-performance websites with unlimited advertising opportunities can be found for a lot less money than traditional advertising methods.</p>
<p>
Due to the diversity of advertising and marketing opportunities they provide, high-performance websites can be highly beneficial for businesses.</p>
              </div>
            </div>
            <div className="home-why-us-section--section2-image">
            </div>
          </div>

          <div className="home-why-us-section--section2-item">
            <div className="home-why-us-section--section2-text">
              <div className="home-why-us-section--section2-item-subtitle">You can</div>
              <div className="home-why-us-section--section2-item-title">Track & Understand</div>
              <div className="home-why-us-section--section2-item-description">
                <p>An effective tool that enables you to watch and evaluate the behavior of your website visitors, a website is more than just an online brochure. You can enhance your marketing campaigns and boost sales in a way that has never been possible before by utilizing the insights garnered from studying user data.</p>
                <p>Don’t pass up the chance to maximize the capabilities of your website and advance your company.</p>
              </div>
            </div>
            <div className="home-why-us-section--section2-image"></div>
          </div>

          <div className="home-why-us-section--section2-item">
            <div className="home-why-us-section--section2-text">
              <div className="home-why-us-section--section2-item-subtitle">You will</div>
              <div className="home-why-us-section--section2-item-title">Get More Clients</div>
              <div className="home-why-us-section--section2-item-description">
                <p>Say goodbye to missed opportunities and hello to a more efficient way of reaching your audience.</p>
                <p>Thanks to the new online solution you’ve implemented, your consumers can now reach you more easily.</p>
              </div>
            </div>
            <div className="home-why-us-section--section2-image"></div>
          </div>

          <div className="home-why-us-section--section2-item">
            <div className="home-why-us-section--section2-text">
              <div className="home-why-us-section--section2-item-subtitle">We do</div>
              <div className="home-why-us-section--section2-item-title">Online Reputation Management</div>
              <div className="home-why-us-section--section2-item-description">
                <p>Potential clients use your internet reputation as a trust indicator when deciding whether or not to do business with you. What would you say about your company’s reputation is?</p>
                <p>Let us take care of that.</p>
              </div>
            </div>
            <div className="home-why-us-section--section2-image"></div>
          </div>
        </div>



      </div>
    </div>
  );
}
