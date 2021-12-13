import { HomepageContent } from '@src/generated/schema';
import type { NextPage } from 'next';
import HomePageQuery from '@src/queries/homepage.gql';
import { contentService } from '@src/services';

const Home: NextPage = ({ data }: any) => {
  console.log(data)
  return (
    <div>
      <h1 className="text-navy-500 text-7xl">Hello worlder</h1>
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
