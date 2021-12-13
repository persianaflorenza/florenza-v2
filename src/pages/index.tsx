import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <div>
      <h1 className="text-navy-500 text-7xl">Hello world</h1>
    </div>
  );
};

export const getStaticProps = () => {
  return {
    props: { count: 10 },
  };
};

export default Home;
