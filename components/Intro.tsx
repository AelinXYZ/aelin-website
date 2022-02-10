import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import useMediaQuery from '../hooks/useMediaQuery';

function Intro() {
  return (
    <IntroSection>
      <LinesContainer />
      <Navbar />
      <ContentContainer>
        <MainLogoContainer>
          <LogoWrapper>
            <Image src='/svg/logo.svg' alt='Logo' width={360} height={181} />
          </LogoWrapper>
          <Image
            src='/svg/text-logo.svg'
            alt='Text logo'
            width={358}
            height={65}
          />
        </MainLogoContainer>

        <H1>THE FIRST DECENTRALIZED FUNDRAISING PROTOCOL</H1>

        <P>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.{' '}
        </P>
        <CallToActionBtn>Go to app</CallToActionBtn>
      </ContentContainer>
    </IntroSection>
  );
}

const ContentContainer = styled.div`
  width: 100%;
  max-width: 880px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  z-index: 2;
`;

const IntroSection = styled.div`
  position: relative;
  width: 100%;
`;

const LinesContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 674px;
  background-image: url('/svg/white-lines.svg');
  background-position: center;
  background-size: cover;
  z-index: 0;
  pointer-events: none;
`;

const BackgroundGradient = styled.div`
  position: absolute;
  width: 1014px;
  height: 880px;
  left: 212px;
  top: -17px;
  background: radial-gradient(
    43.47% 57.22% at 50% 50%,
    #a4f3ff 0%,
    #a4f3ff 74.86%
  );
`;

const BackgroundBoxShadow = styled.div`
  position: absolute;
  width: 1px;
  height: 1px;
  left: 729px;
  top: 275px;

  background: #34364e;
  box-shadow: 0px 0px 250px 180px #ffffff;
`;

const MainLogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 100px;
`;

const LogoWrapper = styled.div`
  margin-bottom: 40px;
`;

const H1 = styled.h1`
  font-family: 'Agrandir-TextBold';
  font-style: normal;
  font-size: 24px;
  line-height: 31px;
  display: flex;
  align-items: center;
  text-align: center;
  text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.8);
  margin-bottom: 40px;
`;
const P = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 31px;
  text-align: center;
  text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.5);
  height: 90px;
`;

const CallToActionBtn = styled.button`
  background: #a4f3ff;
  cursor: pointer;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  border-radius: 25px;
  width: 200px;
  border: none;
  color: #152033;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 21px;
  padding: 8px 0;
  margin: 40px 0 180px 0;
`;

export default Intro;
