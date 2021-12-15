import { motion, AnimatePresence } from 'framer-motion';
import { wrap } from 'popmotion';
import { useState } from 'react';
import { HiArrowNarrowRight, HiArrowNarrowLeft } from 'react-icons/hi';
import { ProductRecord } from '@src/generated/schema';
import { useImageSlider } from '@src/hooks/use-image-slider';

type ProductCarouselProps = {
  gallery?: ProductRecord['gallery'];
};

export const ProductCardCarousel = ({ gallery }: ProductCarouselProps) => {
  const images = gallery?.map((it) => it) ?? [];

  const { page, onChange, imageVariants, activeIndex, direction } = useImageSlider(
    images.length,
  );

  return (
    <div className="select-none rounded-lg  w-full">
      <AnimatePresence initial={false} custom={direction}>
        <div className="relative h-52 w-full">
          <motion.img
            {...images[activeIndex]?.responsiveImage}
            title="image"
            alt=""
            className="w-full h-full rounded-lg object-cover"
            drag={false}
            key={`img_${page}`}
            draggable={false}
            custom={direction}
            variants={imageVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              opacity: { duration: 0.2 },
            }}
          />
          <div className="flex absolute right-4 bottom-1 z-10">
            <HiArrowNarrowLeft
              className="text-white h-6 w-6 mr-4 cursor-pointer"
              onClick={() => onChange(-1)}
            >
              Prev.
            </HiArrowNarrowLeft>
            <HiArrowNarrowRight
              className="text-white h-6 w-6 cursor-pointer"
              onClick={() => onChange(1)}
            >
              Next.
            </HiArrowNarrowRight>
          </div>
        </div>
      </AnimatePresence>
    </div>
  );
};
