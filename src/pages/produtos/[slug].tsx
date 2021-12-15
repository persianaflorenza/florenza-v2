import {
  ProductPage as ProductPageType,
  ProductSlugs,
  ProductSlugsVariables,
  SlugFilter,
} from '@src/generated/schema';
import { contentService } from '@src/services';
import ProductSlugsQuery from '@src/queries/product-slugs.gql';
import ProductQuery from '@src/queries/product.gql';
import { GetStaticPaths } from 'next';
import { Layout, ProductOrganism } from '@src/components';

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await contentService.query<ProductSlugs, {}>({
    query: ProductSlugsQuery,
  });

  if (!data) return { paths: [], fallback: true };

  const paths: string[] = data.allProducts.map((a) => `/produtos/${a.slug}`) || [];

  return {
    paths,
    fallback: true,
  };
};

const ProductPage = ({ product }: any) => {
  return (
    <Layout>
      <ProductOrganism product={product} />
    </Layout>
  );
};

export const getStaticProps = async ({ params }: any) => {
  const data = await contentService.query<ProductPageType, any>({
    query: ProductQuery,
    variables: { slug: params.slug as SlugFilter },
  });

  return {
    props: {
      product: data.product,
    },
  };
};

export default ProductPage;
