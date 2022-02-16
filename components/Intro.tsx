import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import useMediaQuery from '../hooks/useMediaQuery';
import { devices } from '../breakpoints';
import CallToActionButton from './CallToActionButton';
import Typography from './Typography';

function Intro() {
  const matchesMobile = useMediaQuery('(max-width: 620px)');

  return (
    <IntroSection>
      <LinesContainer />
      <Navbar />
      <ContentContainer>
        <MainLogoContainer>
          <LogoWrapper>
            <BlurBlob />
            <Image
              src='/svg/logo.svg'
              alt='Logo'
              width={matchesMobile ? 194 : 360}
              height={matchesMobile ? 98 : 181}
            />
          </LogoWrapper>
          <Image
            src='/svg/text-logo.svg'
            alt='Text logo'
            width={matchesMobile ? 194 : 358}
            height={matchesMobile ? 35 : 65}
          />
        </MainLogoContainer>
        <Typography variant='subtitle' style={{ marginBottom: '40px' }}>
          THE FIRST DECENTRALIZED FUNDRAISING PROTOCOL
        </Typography>
        <Typography variant='body' style={{ marginBottom: '46px' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Typography>
        <CallToActionButton variant='primary' text='Go to app' />
      </ContentContainer>
    </IntroSection>
  );
}

const IntroSection = styled.div`
  width: 100%;
`;

const ContentContainer = styled.div`
  width: 100%;
  max-width: 880px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  z-index: 2;

  @media ${devices.tablet} {
    max-width: 600px;
  }

  @media ${devices.mobile} {
    max-width: 320px;
  }
`;

const LinesContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 674px;
  background-image: url('/svg/white-lines.svg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: 200% 100%;
  z-index: 0;
  pointer-events: none;
`;

const MainLogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 100px;

  @media ${devices.mobile} {
    margin-bottom: 145px;
  }
`;

const LogoWrapper = styled.div`
  position: relative;
  margin-bottom: 40px;

  @media ${devices.mobile} {
    margin-top: 70px;
    margin-bottom: 20px;
  }
`;

const BlurBlob = styled.div`
  width: 600px;
  height: 600px;
  position: absolute;
  top: -200px;
  left: 0;
  background-image: linear-gradient(90deg, #a4f3ff 0%, #a4f3ff 100%);
  filter: blur(100px);
  border-radius: 9999px;
  opacity: 0.5;
`;

export default Intro;
