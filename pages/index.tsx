import type { NextPage } from 'next';
import Head from 'next/head';
import Footer from '../components/Footer';
import Intro from '../components/Intro';
import Roadmap from '../components/Roadmap';
import RoadmapMobile from '../components/RoadmapMobile';
import SponsorInvestor from '../components/SponsorInvestor';
import SponsorInvestorMobile from '../components/SponsorInvestorMobile';
import useMediaQuery from '../hooks/useMediaQuery';

const Home: NextPage = () => {
  const matchesTablet = useMediaQuery('(max-width: 840px)');
  const matchesLaptop = useMediaQuery('(max-width: 1100px)');

  return (
    <div>
      <Head>
        <title>Aelin</title>
      </Head>
      <Intro />
      {matchesTablet ? <SponsorInvestorMobile /> : <SponsorInvestor />}
      {matchesLaptop ? <RoadmapMobile /> : <Roadmap />}
      <Footer />
    </div>
  );
};

export default Home;
