import { wrap } from 'popmotion';
import { useState } from 'react';

export const useImageSlider = (length: number) => {
  const [[page, direction], setPage] = useState([0, 0]);

  const activeIndex = wrap(0, length, page);

  const onChange = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  const textVariants = {
    initial: { x: -300, opacity: 0 },
    enter: { x: 0, opacity: 1 },
    exit: { opacity: 0 },
  };

  const imageVariants = {
    enter: () => {
      return {
        opacity: 0,
      };
    },
    center: {
      x: 0,
      opacity: 1,
    },
    exit: () => {
      return {
        opacity: 0,
      };
    },
  };

  return { activeIndex, onChange, page, direction, textVariants, imageVariants };
};
