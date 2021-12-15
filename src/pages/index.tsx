import { HomepageContent } from '@src/generated/schema';
import type { NextPage } from 'next';
import HomePageQuery from '@src/queries/homepage.gql';
import { contentService } from '@src/services';
import { InferProps } from '@src/types/general';
import { HomeOrganism } from '@src/components';
import dynamic from 'next/dynamic';

const Layout = dynamic(async () => {
  return (await import('@src/components/organisms/layout/layout')).Layout;
});

interface Props extends InferProps<typeof getStaticProps> {}

const Home: NextPage<Props> = ({ data }) => {
  return (
    <div>
      <Layout>
        <HomeOrganism content={data} />
      </Layout>
    </div>
  );
};

export const getStaticProps = async () => {
  const data = await contentService.query<HomepageContent, {}>({
    query: HomePageQuery,
  });

  return {
    props: { data },
  };
};

export default Home;
