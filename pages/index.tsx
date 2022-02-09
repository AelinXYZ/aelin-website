import type { NextPage } from 'next';
import Head from 'next/head';
import Intro from '../components/Intro';
import Roadmap from '../components/Roadmap';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Aelin</title>
      </Head>
      <Intro />
      <Roadmap />
    </div>
  );
};

export default Home;
