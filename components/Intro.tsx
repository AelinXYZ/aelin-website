import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import useMediaQuery from '../hooks/useMediaQuery';
import { devices } from '../breakpoints';
import CallToActionButton from './CallToActionButton';

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

        <H1>THE FIRST DECENTRALIZED FUNDRAISING PROTOCOL</H1>

        <P>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.{' '}
        </P>
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

const H1 = styled.h1`
  font-family: 'Agrandir-TextBold';
  font-size: 24px;
  line-height: 31px;
  display: flex;
  align-items: center;
  text-align: center;
  text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.8);
  margin-bottom: 40px;
  @media ${devices.mobile} {
    font-family: 'Agrandir-TextBold';
    font-size: 18px;
    line-height: 23px;
    margin-bottom: 20px;
  }
`;
const P = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 31px;
  text-align: center;
  text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.5);
  height: 90px;
  @media ${devices.mobile} {
    font-size: 16px;
    line-height: 21px;
    height: 84px;
  }
`;

export default Intro;
