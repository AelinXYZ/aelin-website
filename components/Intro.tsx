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
      <MainLogoContainer>
        <Image
          src='/png/shape-home_with-logo_with-halo.png'
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
          A permissionless multi-chain protocol for capital raises and OTC
          deals. No need for VC's, Aelin decentralizes fundraising
        </Typography>
        <CallToActionButton
          onClick={() => {
            location.href = 'https://aelin.xyz/';
          }}
          variant='primary'
          text='Go to app'
        />
      </ContentContainer>
    </IntroSection>
  );
}

const IntroSection = styled.div`
  width: 100%;
  height: 900px;
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
  top: -315px;
  @media ${devices.tablet} {
    max-width: 600px;
  }

  @media ${devices.mobile} {
    max-width: 320px;
    top: -315px;
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
