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
  const matchesMobile = useMediaQuery(devices.mobile);
  const matchesLaptop = useMediaQuery(devices.laptop);

  return (
    <div>
      <Head>
        <title>Aelin</title>
      </Head>
      <Intro />

      {matchesTablet ? <SponsorInvestorMobile /> : <SponsorInvestor />}
      {!matchesMobile && (
        <LogoWrapper>
          <Image
            src='/png/shape-home_with-logo_no-halo.png'
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
  margin-top: -550px;
`;
const LogoWrapper = styled.div`
  width: 723px;
  height: 748px;
  position: relative;
  top: -350px;
  pointer-events: none;
  margin: auto;
  // this shouldn't be needed if the logo is centered
  transform: translateX(5%);
`;

export default Home;
