import { Container, FeatureCard } from '@src/components';
import React, { PropsWithChildren } from 'react';
import { BsShieldCheck, BsStars } from 'react-icons/bs';
import { RiHomeGearLine } from 'react-icons/ri';
import { GiPencilRuler } from 'react-icons/gi';
import { HomepageRecord } from '@src/generated/schema';

type FeaturesProps = PropsWithChildren<{ items: HomepageRecord['features'] }>;

const icons = [BsShieldCheck, GiPencilRuler, BsStars];

export const Features = ({ items = [] }: FeaturesProps) => (
  <Container>
    <div className="grid grid-cols-1 lg:grid-cols-3 space-y-6 lg:space-y-0 lg:space-x-6 mt-16">
      {items?.map((it, index) => (
        <FeatureCard
          key={it?.id}
          icon={icons[index]}
          title={it?.title ?? ''}
          description={it?.text ?? ''}
        />
      ))}
    </div>
  </Container>
);
