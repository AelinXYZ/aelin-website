import type { NextPage } from 'next';
import Head from 'next/head';
import Footer from '../components/Footer';
import Intro from '../components/Intro';
import Roadmap from '../components/Roadmap';
import SponsorInvestor from '../components/SponsorInvestor';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Aelin</title>
      </Head>
      <Intro />
      <SponsorInvestor />
      <Roadmap />
      <Footer />
    </div>
  );
};

export default Home;
