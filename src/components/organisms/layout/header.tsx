import logo from '../../../public/logo.svg';
import Image from 'next/image';
import { FaTimes, FaWhatsapp, FaInstagram } from 'react-icons/fa';
import { BiMenu } from 'react-icons/bi';
import { MdClose } from 'react-icons/md';
import NextLink from 'next/link';
import { Link, Container } from '../../atoms';
import styled from 'styled-components';
import { useState, useCallback, useRef, useEffect } from 'react';

import { OverlayProps, useOverlay, usePreventScroll } from '@react-aria/overlays';

type MobileMenuProps = OverlayProps & {};

const MobileMenu = (props: MobileMenuProps) => {
  let menuRef = useRef<HTMLDivElement>(null);

  let { overlayProps, underlayProps } = useOverlay(props, menuRef);

  // Prevent scrolling while the modal is open, and hide content
  // outside the modal from screen readers.
  usePreventScroll({ isDisabled: !props.isOpen });

  return (
    <div
      className={`fixed bg-black transition-all grid top-0 left-0 bottom-0 right-0 lg:hidden ${
        props.isOpen ? 'z-50 bg-opacity-25' : '-z-50 bg-opacity-0'
      }`}
      {...underlayProps}
    >
      <div
        className={`bg-white w-2/3 justify-self-end place-self-stretch transition-all p-4 ${
          props.isOpen ? 'translate-x-0' : 'translate-x-144'
        }`}
        ref={menuRef}
        {...overlayProps}
      >
        <div className="place-content-between grid grid-flow-col place-items-center text-navy-500">
          <span className="font-brush text-5xl">Menu</span>
          <MdClose onClick={props.onClose} className="h-8 w-8 cursor-pointer" />
        </div>

        <div className="grid gap-y-6 mt-6">
          <Link href={`/`}>Home</Link>
          <Link href={`/#showroom`}>Show Case</Link>
          <Link href={`/#sobre`}>Quem somos</Link>
          <Link href={`/#contato`}>Contato</Link>
        </div>
      </div>
    </div>
  );
};

const Header = () => {
  const [isOpen, setOpen] = useState(false);

  const toggleMenu = () => setOpen((b) => !b);

  return (
    <div>
      <Container>
        <div className=" md:grid grid-flow-col gap-6 place-items-center place-content-center w-full pt-4">
          <div className="flex items-center text-green-500 ">
            <FaWhatsapp className="mr-2 h-4 w-4 " />
            <span className="font-semibold">Ligue agora!</span>
          </div>

          <div className="text-navy-100">
            <span className="font-semibold">Atendemos todo o estado de São Paulo</span>
          </div>

          <a
            target="_blank"
            href="https://instagram.com/persianasflorenza?utm_medium=copy_link"
            role="button"
            referrerPolicy="no-referrer"
            rel="noreferrer"
          >
            <div className="text-navy-500 flex items-center">
              <FaInstagram className="mr-1 h-4 w-4 " />
              <span className="font-semibold">@persianasflorenza</span>
            </div>
          </a>
        </div>
        <div className="flex justify-between items-center py-4">
          <NextLink href={`/`}>
            <a>
              <Image
                alt="Florenza Persianas logo"
                className="cursor-pointer h-20"
                draggable={false}
                src={logo}
              />
            </a>
          </NextLink>
          <div className="hidden lg:inline-flex items-center space-x-4">
            <Link href={`/`}>Home</Link>
            <Link href={`/#showroom`}>Show Case</Link>
            <Link href={`/#sobre`}>Quem somos</Link>
            <Link href={`/#contato`}>Contato</Link>

            {/* <div className="pl-8">
              <a
                target="_blank"
                href="https://api.whatsapp.com/send?phone=5511991827642"
                role="button"
                className="bg-navy-50 shadow-md text-navy-500 p-4 rounded-md flex text-sm items-center font-bold hover:scale-110 transition-all"
                referrerPolicy="no-referrer"
                rel="noreferrer"
              >
                <FaWhatsapp className="mr-2 h-6 w-6 text-green-500" />
                <div>
                  Faça seu orçamento <br />
                  <span className="font-normal">sem compromisso</span>
                </div>
              </a>
            </div> */}
          </div>

          <div className="lg:hidden self-start">
            <BiMenu
              onClick={toggleMenu}
              className="h-10 w-10 cursor-pointer text-navy-500"
            />
          </div>
        </div>
      </Container>

      <MobileMenu
        isDismissable
        isKeyboardDismissDisabled
        isOpen={isOpen}
        onClose={toggleMenu}
      />
    </div>
  );
};
export default Header;
