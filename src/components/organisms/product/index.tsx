import { ProductRecord } from '@src/generated/schema';
import { Container } from '@src/components';
import Gallery from 'react-photo-gallery';
import Carousel, { Modal, ModalGateway } from 'react-images';
import tw from 'twin.macro';
import styled from 'styled-components';
import React, { useState, useCallback } from 'react';
import dynamic from 'next/dynamic';
import { HiOutlineColorSwatch } from 'react-icons/hi';
import { RiHomeGearFill } from 'react-icons/ri';
import { CgEditShadows, CgDarkMode } from 'react-icons/cg';
const ProductDescription = styled.div`
  ${tw`text-navy-500`}
  &>p {
    ${tw`mt-4 w-full`}
  }
`;

type ProductOrganismProps = {
  product: ProductRecord;
};

const FeatureCard = ({ title, children, icon: Icon }: any) => {
  return (
    <div className="bg-white w-full px-4 py-6 rounded-lg flex items-center mt-4 shadow-lg">
      <Icon className="w-10 h-10 text-navy-500 mr-6" />
      <div>
        <h6 className="font-semibold text-gray-600">{title}</h6>
        {children}
      </div>
    </div>
  );
};

export const ProductOrganism = ({ product }: ProductOrganismProps) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  const photos = (product?.gallery || [])?.map((item, i) => ({
    ...item?.responsiveImage,
    width: i % 2 === 0 ? 3 : 4,
    height: i % 2 === 0 ? 4 : 3,
    src: `${item?.responsiveImage?.src}`,
  }));

  const isPlural = product?.hasBlackout && product?.hasTranslucid;

  return (
    <>
      <div className="py-6">
        <Container>
          <div className="min-h-128 md:min-h-96">
            <div className="w-screen bg-navy-50 h-80 absolute top-0 left-0 -z-1"></div>

            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="bg-navy-50 w-full p-4 md:p-8 md:-ml-8 -mx-6 rounded-lg h-max-content">
                <h1 className="text-navy-500 uppercase font-bold text-4xl">
                  {product?.title}
                </h1>

                <ProductDescription
                  className="text-gray-500"
                  dangerouslySetInnerHTML={{ __html: product?.description ?? '' }}
                />
              </div>

              <div>
                <FeatureCard title="Do seu jeito" icon={HiOutlineColorSwatch}>
                  <p className="text-navy-600">
                    {`Durante a visita são apresentadas uma ampla variedade de `}
                    <span className="font-semibold">Tecidos</span>
                    {` e `}
                    <span className="font-semibold">Cores</span>
                    {`, para criar uma experiência única a cada projeto.`}
                  </p>
                </FeatureCard>
                {product?.isAutomated && (
                  <FeatureCard title="Fácil manuseio" icon={RiHomeGearFill}>
                    <p className="text-navy-600">
                      Este modelo está disponível nos modos
                      <span className="font-semibold">Motorizado</span> e{' '}
                      <span className="font-semibold">Manual</span>
                    </p>
                  </FeatureCard>
                )}
                {(product?.hasBlackout || product?.hasTranslucid) && (
                  <FeatureCard title="Escuridão Total!" icon={CgEditShadows}>
                    <p className="text-navy-600">
                      {isPlural
                        ? `Tecidos disponíveis nos modos `
                        : `Tecido disponível no modo `}
                      {isPlural ? (
                        <>
                          <span className="font-semibold">Blackout</span>
                          {` e `}
                          <span className="font-semibold">Translúcido</span>
                        </>
                      ) : (
                        <span className="font-semibold">
                          {product?.hasBlackout ? 'Blackout' : 'Translúcido'}
                        </span>
                      )}
                    </p>
                  </FeatureCard>
                )}
              </div>
            </div>
          </div>
          <h1
            className={`text-center font-brush text-7xl text-navy-500 mb-4 ${
              (product?.hasBlackout && product?.hasTranslucid && product?.isAutomated) ??
              'mt-8'
            }`}
          >
            ShowCase
          </h1>

          <p className="mb-6 text-center text-lg text-gray-500">Instalações recentes</p>

          <Gallery photos={photos as any} onClick={openLightbox} />

          <div className="w-full h-px bg-gray-100 my-6" />

          <h4 className="text-center text-gray-500 text-lg">
            Visitas de orçamento / apresentação são totalmente{' '}
            <span className="font-semibold uppercase text-navy-500">gratuítas</span> e sem
            compromisso.
          </h4>
        </Container>
      </div>

      <ModalGateway>
        {viewerIsOpen && (
          <Modal onClose={closeLightbox}>
            <div className="absolute top-1/2 transform -translate-x-1/2 -translate-y-1/2 left-1/2 w-full md:w-auto">
              <Carousel
                currentIndex={currentImage}
                views={
                  photos.map((x) => ({
                    source: x.src,
                  })) as any[]
                }
              />
            </div>
          </Modal>
        )}
      </ModalGateway>
    </>
  );
};
