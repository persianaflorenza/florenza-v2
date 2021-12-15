import { Container } from '@src/components';
import { FileField, Maybe } from '@src/generated/schema';
import Image from 'next/image';

type AboutProps = {
  title: string;
  leftText: string;
  leftImage?: Maybe<FileField>;
  description: string;
};
export const About = ({ title, description, leftImage, leftText }: AboutProps) => {
  return (
    <Container className="my-6">
      <h1 id="sobre" className="font-brush text-7xl font-normal capitalize text-navy-500">
        {title}
      </h1>
      <div className="mt-8 justify-between flex flex-col-reverse md:flex-row">
        <div className="relative mt-12 md:mt-0">
          <div className="w-80 h-144">
            <Image
              width="100%"
              layout="fill"
              height="100%"
              title=""
              src={(leftImage?.responsiveImage?.src || '') as string}
              alt="Sobre Florenza Periana"
            />
          </div>

          <span className="absolute leading-normal text-navy-500 font-extrabold  text-5xl lg:text-7xl break-words left-4 md:left-16 top-10 lg:w-114">
            {`${leftText}`}
          </span>
        </div>

        <div
          className="leading-loose lg:w-144 text-gray-500 text-lg"
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </div>
    </Container>
  );
};
