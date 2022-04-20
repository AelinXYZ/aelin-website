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
import { init } from '@socialgouv/matomo-next';
import { useEffect } from 'react';

const SafeHydrate: React.FC = ({ children }) => {
  return (
    <div suppressHydrationWarning>
      {typeof window === 'undefined' ? null : children}
    </div>
  );
};
const Home = () => {
  const matchesTablet = useMediaQuery(devices.tablet);
  const matchesLaptop = useMediaQuery(devices.laptop);

  useEffect(() => {
    init({
      url: process.env.NEXT_PUBLIC_MATOMO_URL || '',
      siteId: process.env.NEXT_PUBLIC_MATOMO_SITE_ID || '',
    });
  }, []);

  return (
    <SafeHydrate>
      <div>
        <Head>
          <title>Aelin</title>
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
    </SafeHydrate>
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
