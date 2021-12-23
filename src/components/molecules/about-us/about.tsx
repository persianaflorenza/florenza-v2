import { Container } from '@src/components';
import { FileField, Maybe } from '@src/generated/schema';
import Image from 'next/image';

type AboutProps = {
  title: string;
  leftText: string;
  leftImage?: Maybe<FileField>;
  description: string;
};

const certificates = [
  {
    title:
      'Restringe o uso de subtâncias perigosas em equipamentos elétricos e eletrônicos',
    imageUrl:
      'https://www.datocms-assets.com/59373/1640221724-rohs-compliant-certification-final.jpeg',
  },
  {
    title: 'Compromisso com o meio ambiente',
    imageUrl:
      'https://www.datocms-assets.com/59373/1640221719-greenguard-certification-final.jpeg',
  },
  {
    title: 'Tecidos sem substâncias danosas ao usuário e meio ambiente',
    imageUrl:
      'https://www.datocms-assets.com/59373/1640221710-confidence-textiles-certification-final.jpeg',
  },
];

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
        <div className=" w-100 md:w-1/2">
          <div
            className="leading-loose text-gray-500 text-lg"
            dangerouslySetInnerHTML={{ __html: description }}
          />

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 place-content-between ">
            {certificates.map((c, i) => (
              <div key={i} className="grid place-items-center">
                <div className="w-full">
                  <img title={c.title} src={c.imageUrl} alt={c.title} />
                </div>

                <span className="mt-4 text-center break-words text-gray-400 text-sm ">
                  {c.title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};
