import React, { useEffect, useRef, useState } from 'react';
import './index.scss';
import img from '../../../Component/images/images';

interface Banner {
  id: number;
  image: string;
}

const banners: Banner[] = [
  { id: 1, image: img.slider4 },
  { id: 2, image: img.slider2 },
  { id: 3, image: img.slider3 },
  { id: 4, image: img.slider1 },
  { id: 5, image: img.slider5 },
];

export function SlideBanner(): JSX.Element {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const slideInterval = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    startSlideShow();
    return () => {
      if (slideInterval.current) {
        clearInterval(slideInterval.current);
      }
    };
  }, []);

  const startSlideShow = () => {
    slideInterval.current = setInterval(() => {
      setCurrentSlide((prev) => (prev === banners.length - 1 ? 0 : prev + 1));
    }, 3000);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    if (slideInterval.current) {
      clearInterval(slideInterval.current);
    }
    startSlideShow();
  };

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev === banners.length - 1 ? 0 : prev + 1));
    if (slideInterval.current) {
      clearInterval(slideInterval.current);
    }
    startSlideShow();
  };

  return (
      <div className="slider">
        <div className="slides" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
          {banners.map((banner, index) => (
              <div
                  key={banner.id}
                  className={`slide ${index === currentSlide ? 'active' : ''}`}
              >
                <img src={banner.image} alt={`Banner ${banner.id}`} className="image" />
              </div>
          ))}
        </div>

        <div className="dots">
          {banners.map((_, index) => (
              <span
                  key={index}
                  className={`dot ${index === currentSlide ? 'active' : ''}`}
                  onClick={() => goToSlide(index)}
              ></span>
          ))}
        </div>
      </div>
  );
}
