import { Container, TextInput } from '@src/components';
import { ContactForm } from '@src/components/molecules/contact-form';
import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import whiteLogo from '../../../public/logo-white.svg';
import Image from 'next/image';

interface FooterProps {}

export const Footer: React.FC<FooterProps> = () => {
  return (
    <>
      <div className="bg-navy-500 py-6">
        <Container>
          <div className="h-px w-full bg-opacity-30 bg-white" />
          <div className="grid gap-y-6 grid-cols-1 md:grid-cols-2 mt-6 grid-flow-row place-content-between h-11 ">
            <Image
              alt="Florenza Persianas logo"
              draggable={false}
              src={whiteLogo}
              height={100}
              className="place-self-center sm:place-self-start"
            />

            <span className="text-white place-self-center md:place-self-end">
              2021 @ Florenza Persianas
            </span>
          </div>
        </Container>
      </div>
    </>
  );
};
