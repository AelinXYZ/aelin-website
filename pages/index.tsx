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
import Image from 'next/image';

const Home: NextPage = () => {
  const matchesTablet = useMediaQuery(devices.tablet);
  const matchesLaptop = useMediaQuery(devices.laptop);

  return (
    <div>
      <Head>
        <title>Aelin</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <Intro />

      {matchesTablet ? <SponsorInvestorMobile /> : <SponsorInvestor />}
      {matchesLaptop ? null : (
        <LogoWrapper>
          <Image
            src='/png/Half_logo_with_halo_no_light.png'
            alt='Logo'
            layout='fill'
          />
        </LogoWrapper>
      )}

      {matchesLaptop ? (
        <RoadmapMobile />
      ) : (
        <PositionWrapper>
          <Roadmap />
        </PositionWrapper>
      )}

      <Footer />
    </div>
  );
};

const PositionWrapper = styled.div`
  margin-top: -650px;
`;
const LogoWrapper = styled.div`
  width: 723px;
  height: 748px;
  position: relative;
  top: -400px;
  pointer-events: none;
  margin: auto;
`;

export default Home;
