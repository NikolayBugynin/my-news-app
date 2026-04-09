import React, {
  useRef,
  type ComponentPropsWithRef,
  type ReactElement,
} from 'react';
import styles from './styles.module.css';

interface SliderProps {
  children: ReactElement<ComponentPropsWithRef<'div'>>;
  step?: number;
}

export const Slider = ({ children, step = 150 }: SliderProps) => {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (sliderRef.current) sliderRef.current.scrollLeft -= step;
  };

  const scrollRight = () => {
    if (sliderRef.current) sliderRef.current.scrollLeft += step;
  };

  return (
    <div className={styles.slider}>
      <button onClick={scrollLeft} className={styles.arrow}>
        {'<'}
      </button>
      {React.cloneElement(children, { ref: sliderRef })}
      <button onClick={scrollRight} className={styles.arrow}>
        {'>'}
      </button>
    </div>
  );
};
