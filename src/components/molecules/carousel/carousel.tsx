import { Container } from '@src/components/atoms';
import { motion, AnimatePresence } from 'framer-motion';

import tw from 'twin.macro';
import styled from 'styled-components';
import { HiArrowNarrowRight, HiArrowNarrowLeft } from 'react-icons/hi';
import { HomepageRecord } from '@src/generated/schema';
import { useImageSlider } from '@src/hooks/use-image-slider';

type CarouselProps = {
  items: HomepageRecord['carousel'];
};

const CarouselText = styled(motion.h1)`
  ${tw`text-navy-500 uppercase font-bold text-2xl md:text-4xl`}
  &>span {
    ${tw`font-brush text-4xl md:text-7xl font-normal capitalize`}
  }
`;

export const Carousel = ({ items }: CarouselProps) => {
  const images = items?.map((it) => it?.image) ?? [];
  const texts =
    items?.map((it) => it?.text?.replace(/\*\*(\S[^\*]+\S)\*\*/g, `<span> $1 </span>`)) ??
    [];

  const { page, onChange, textVariants, imageVariants, activeIndex, direction } =
    useImageSlider(images.length);

  return (
    <div className="w-full max-w-5xl mx-auto px-6 pt-6 md:pt-12 select-none">
      <div className="flex flex-col lg:flex-row items-center justify-center md:justify-between">
        <div className="flex-2">
          <CarouselText
            key={`h1_${page}`}
            transition={{
              opacity: { duration: 0.5 },
              x: { duration: 0.5 },
            }}
            variants={textVariants}
            initial="initial"
            animate="enter"
            dangerouslySetInnerHTML={{ __html: texts[activeIndex] ?? '' }}
          />
        </div>
        <div className="flex-1 mt-6 md:mt-0 md:ml-6">
          <AnimatePresence initial={false} custom={direction}>
            <div className="relative w-72 h-72 lg:h-114 lg:w-114">
              <motion.img
                {...images[activeIndex]?.responsiveImage}
                title="image"
                alt=""
                className="w-full h-full rounded-full object-cover"
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
            </div>
          </AnimatePresence>
        </div>
      </div>
      <div className="flex">
        <HiArrowNarrowLeft
          className="text-navy-500 h-6 w-6 mr-4 cursor-pointer"
          onClick={() => onChange(-1)}
        >
          Prev.
        </HiArrowNarrowLeft>
        <HiArrowNarrowRight
          className="text-navy-500 h-6 w-6 cursor-pointer"
          onClick={() => onChange(1)}
        >
          Next.
        </HiArrowNarrowRight>
      </div>
    </div>
  );
};
