import type { NextPage } from 'next';
import Head from 'next/head';
import styled from 'styled-components';
import { devices } from '../breakpoints';
import Footer from '../components/Footer';
import Intro from '../components/Intro';
import Roadmap from '../components/Roadmap';
import RoadmapMobile from '../components/RoadmapMobile';
import SponsorInvestor from '../components/SponsorInvestor';
import SponsorInvestorMobile from '../components/SponsorInvestorMobile';
import useMediaQuery from '../hooks/useMediaQuery';

const Home: NextPage = () => {
  const matchesTablet = useMediaQuery(devices.tablet);
  const matchesLaptop = useMediaQuery(devices.laptop);

  return (
    <div>
      <Head>
        <title>Aelin</title>
      </Head>
      <Intro />
      {matchesTablet ? <SponsorInvestorMobile /> : <SponsorInvestor />}
      <LinesContainer />
      {matchesLaptop ? <RoadmapMobile /> : <Roadmap />}
      <Footer />
    </div>
  );
};

const LinesContainer = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  height: 674px;
  background-image: url('/svg/blue-lines.svg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: 200% 100%;
  z-index: 0;
  pointer-events: none;
  transform: translateY(-615px);
`;
export default Home;
