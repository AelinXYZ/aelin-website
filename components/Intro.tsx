import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import { devices } from '../breakpoints';
import CallToActionButton from './CallToActionButton';
import Typography from './Typography';

function Intro() {
  return (
    <IntroSection>
      <Navbar />
      <Gradient />
      <MainLogoContainer>
        <Image
          src='/png/Full_logo_with_halo_no_light.png'
          alt='Logo'
          width={610}
          height={632}
          layout='responsive'
        />
      </MainLogoContainer>
      <ContentContainer>
        <Typography variant='subtitle' style={{ marginBottom: '40px' }}>
          A COMMUNITY FUNDRAISING PROTOCOL
        </Typography>
        <Typography variant='body' style={{ marginBottom: '46px' }}>
          {
            "A permissionless multi-chain protocol for capital raises and OTC deals. No need for VC's, Aelin decentralizes fundraising"
          }
        </Typography>
        <CallToActionButton
          onClick={() => {
            location.href = 'https://app.aelin.xyz/';
          }}
          variant='primary'
          text='Go to app'
        />
      </ContentContainer>
    </IntroSection>
  );
}

const Gradient = styled.div`
  height: 900px;
  position: absolute;
  pointer-events: none;
  top: -500px;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  background: radial-gradient(
    rgba(164, 243, 255, 0.15) 0%,
    rgba(164, 243, 255, 0) 74.86%
  );
`;
const IntroSection = styled.div`
  width: 100%;
  height: 900px;

  @media ${devices.mobile} {
    height: 650px;
  }
`;

const ContentContainer = styled.div`
  width: 100%;
  max-width: 880px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  z-index: 2;
  position: relative;
  top: -270px;
  @media ${devices.tablet} {
    max-width: 600px;
  }

  @media ${devices.mobile} {
    max-width: 320px;
  }
  @media ${devices.smallMobile} {
    top: -215px;
  }
`;

const MainLogoContainer = styled.div`
  max-width: 610px;
  max-height: 632px;
  position: relative;
  top: -116px;
  margin: auto;
`;

export default Intro;
