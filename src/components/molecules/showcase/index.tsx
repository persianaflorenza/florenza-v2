import { Container } from '@src/components';
import { ProductCard } from './product-card';
import { ProductRecord } from '@src/generated/schema';

type ShowCaseProps = {
  products?: ProductRecord[];
  title?: string;
};
export const ShowCase = ({ products, title }: ShowCaseProps) => {
  if (!products?.length) return <></>;
  return (
    <div className="mt-6 bg-gray-50 min-h-96 w-full pt-8" id="showroom">
      <h1 className="text-center font-brush text-7xl text-navy-500">{title}</h1>

      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {products?.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
      </Container>
    </div>
  );
};
