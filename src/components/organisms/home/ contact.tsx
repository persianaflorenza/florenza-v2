import { Container } from '../../atoms/container';
import { FaWhatsapp, FaMap, FaPhone, FaClock } from 'react-icons/fa';

type ContactSectionProps = {
  contactTitle?: string;
  whatsappNumber?: string;
  landline?: string;
  address?: string;
  mapsUrl?: string;
  openingHours?: string;
};

export const ContactSection = ({
  contactTitle,
  whatsappNumber,
  landline,
  address,
  mapsUrl,
  openingHours,
}: ContactSectionProps) => {
  return (
    <div className="bg-navy-500 w-full py-6">
      <Container>
        <h1 className="font-brush text-center text-7xl font-normal capitalize text-white">
          {contactTitle}
        </h1>

        <h2 className="my-4 text-center text-xl text-light text-gray-200">
          Atendemos todo o estado de São Paulo
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 place-items-start">
          {/* whatsapp */}
          <div>
            <div className=" w-full py-2 rounded-lg flex items-center">
              <div>
                <h6 className=" text-gray-200">Whatsapp</h6>
                <div className="flex items-center">
                  <FaWhatsapp className="mr-2 h-6 w-6 text-green-500" />
                  <a
                    className="font-semibold text-lg text-white underline"
                    href={`https://api.whatsapp.com/send?phone=55${whatsappNumber}`}
                  >
                    {`(11) 9 8877-3322`}
                  </a>
                </div>
              </div>
            </div>
            <div className=" w-full py-2 rounded-lg flex items-center">
              <div>
                <h6 className=" text-gray-200">Telefone</h6>
                <div className="flex items-center">
                  <FaPhone className="mr-2 h-4 w-4 text-white" />
                  <span className="font-semibold text-lg text-white underline">
                    {landline}
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* endereço */}
          <div className=" w-full py-4 rounded-lg flex items-center">
            <div>
              <h6 className=" text-gray-200">Endereço</h6>
              <div className="flex items-center">
                <FaMap className="mr-4 h-10 w-10 text-yellow-500" />
                <a className="font-semibold text-lg text-white underline" href={mapsUrl}>
                  {address}
                </a>
              </div>
            </div>
          </div>
          {/* horario de funcionamento */}
          <div className="w-full py-4 lg:pl-8">
            <h6 className=" text-gray-200">Horário de atendimento</h6>
            <div className="my-2">
              <div className="flex items-center text-white">
                <FaClock className="mr-4 h-4 w-4" />
                <div>
                  <span className="font-semibold">Segunda – Sexta-feira:</span>
                  <p>{` 09:00 - 19:00`}</p>
                </div>
              </div>
            </div>
            <div className="my-2">
              <div className="flex items-center text-white">
                <FaClock className="mr-4 h-4 w-4" />
                <div>
                  <span className="font-semibold">Sábado:</span>
                  <p>{` 09:00 - 13:00`}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
