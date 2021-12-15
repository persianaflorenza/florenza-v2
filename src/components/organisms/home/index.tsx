import { About, Container, Carousel } from '@src/components';
import React, { PropsWithChildren } from 'react';
import { Features } from './features';
import { motion, AnimatePresence } from 'framer-motion';
import { wrap } from 'popmotion';
import { useState } from 'react';
import tw from 'twin.macro';
import styled from 'styled-components';
import { HiArrowNarrowRight, HiArrowNarrowLeft } from 'react-icons/hi';
import { ShowCase } from '@src/components/molecules/showcase';
import { FileField, HomepageContent } from '@src/generated/schema';
import { ContactSection } from './ contact';
import dynamic from 'next/dynamic';

const ClientSideCarousel = dynamic(
  async () => {
    return (await import('../../molecules/carousel/carousel')).Carousel;
  },
  {
    loading: () => <></>,
  },
);

type HomeOrganismProps = PropsWithChildren<{
  content: HomepageContent;
}>;

export const HomeOrganism = ({ content }: HomeOrganismProps) => {
  return (
    <>
      <ClientSideCarousel items={content.homepage?.carousel as any} />
      <Features items={content.homepage?.features as any} />
      <ShowCase
        title={content.homepage?.productsTitle ?? undefined}
        products={content.allProducts as any}
      />
      <About
        leftText={content.homepage?.aboutSideText ?? ''}
        description={content?.homepage?.aboutText || ''}
        title={content?.homepage?.aboutTitle || ''}
        leftImage={content?.homepage?.aboutBanner as FileField}
      />
      <ContactSection
        contactTitle={content?.homepage?.contactTitle ?? undefined}
        whatsappNumber={content?.homepage?.whatsappNumber ?? undefined}
        landline={content?.homepage?.landline ?? undefined}
        address={content?.homepage?.address ?? undefined}
        mapsUrl={content?.homepage?.mapsUrl ?? undefined}
        openingHours={content?.homepage?.openingHours ?? undefined}
      />
    </>
  );
};
