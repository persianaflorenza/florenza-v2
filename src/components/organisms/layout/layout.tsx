import React, { ReactNode } from 'react';
import { Footer } from './footer';
import Header from './header';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { OverlayProvider } from '@react-aria/overlays';
type LayoutProps = {
  children: ReactNode;
};

const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 },
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <div className="w-14 h-14 md:w-24 md:h-24 fixed z-60  transition-all bottom-8 right-8 cursor-pointer">
        <a
          target="_blank"
          href="https://api.whatsapp.com/send?phone=5511991827642"
          role="button"
          referrerPolicy="no-referrer"
          rel="noreferrer"
        >
          <Image
            width="100%"
            layout="fill"
            height="100%"
            title="Whatsapp florenza logo"
            src="https://www.datocms-assets.com/59373/1639254806-whatsapp-logo-1.png"
            alt="Whatsapp florenza logo"
          />
        </a>
      </div>
      <Header />
      <motion.main
        initial="hidden"
        animate="enter"
        exit="exit"
        variants={variants}
        transition={{ type: 'linear' }}
        className="w-full h-full transition-all"
      >
        <OverlayProvider>{children}</OverlayProvider>
      </motion.main>
      <Footer />
      {/* <a
        target="_blank"
        href="https://api.whatsapp.com/send?phone=5511991827642"
        role="button"
        className="shadow-md absolute top-4 bottom-4"
        referrerPolicy="no-referrer"
        rel="noreferrer"
      >
        <img src={require('/public/whatsapp-logo.png')} />
      </a> */}
    </div>
  );
};
