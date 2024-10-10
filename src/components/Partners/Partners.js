import { useEffect, useRef } from 'react';
import './_Partners.scss';

const Partners = () => {
  const listRef = useRef(null);

  useEffect(() => {
    const targetElement = listRef.current;
    let scrolling;

    if (targetElement) {
      scrolling = setInterval(() => {
        let scrolled = targetElement.scrollLeft;
        targetElement.scrollTo(targetElement.scrollLeft + 1, 0);

        // If the scrolled distance equals the current scroll position, reset scroll
        if (scrolled === targetElement.scrollLeft) {
          targetElement.scrollLeft = 0;
        }
      }, 10);
    }

    // Clear the interval on component unmount
    return () => clearInterval(scrolling);
  }, []);

  return (
    <section className="partners">
      <div className="partners__cotainer">
        <div className="partners__list" ref={listRef}>
          <div className="partners__item partners__item--andrew"></div>
          <div className="partners__item partners__item--leadership"></div>
          <div className="partners__item partners__item--walbridge"></div>
          <div className="partners__item partners__item--ideal"></div>
          <div className="partners__item partners__item--phalen"></div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
