import React from 'react';
import styled from 'styled-components';
import { devices } from '../breakpoints';
import { usersInfo } from '../data/usersInfo';
import CallToActionButton from './CallToActionButton';
import Circles from './Circles';
import Typography from './Typography';

const SponsorInvestor = () => {
  return (
    <ContentContainer>
      <Gradient />
      <Typography variant='title' style={{ marginBottom: '40px' }}>
        HOW AELIN WORKS
      </Typography>
      <Typography variant='body' style={{ marginBottom: '60px' }}>
        Aelin is a permissionless protocol. Anyone with an internet connection
        may participate in the fundraising or deal sourcing process.
      </Typography>
      <SponsInvestWrapper>
        <Bar />
        <TitleWrapper>
          <Title style={{ textAlign: 'right' }}>SPONSOR</Title>
          <Title style={{ textAlign: 'left' }}>INVESTOR</Title>
        </TitleWrapper>
        <div style={{ marginBottom: '63px' }}>
          {usersInfo.map(({ title, text, id, user }) => {
            if (user === 'sponsor') {
              return (
                <InfoWrapper key={id} style={{ alignItems: 'start' }}>
                  <Circles
                    color='white'
                    style={{
                      position: 'absolute',
                      top: 0,
                      marginLeft: 'auto',
                      marginRight: 'auto',
                      left: 0,
                      right: 0,
                    }}
                  />
                  <SponsorTitle>{title}</SponsorTitle>
                  <SponsorParagraph>{text}</SponsorParagraph>
                </InfoWrapper>
              );
            }
            return (
              <InfoWrapper key={id} style={{ alignItems: 'end' }}>
                <Circles
                  color='white'
                  style={{
                    position: 'absolute',
                    top: 0,
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    left: 0,
                    right: 0,
                  }}
                />
                <InvestorTitle>{title}</InvestorTitle>
                <InvestorParagraph>{text}</InvestorParagraph>
              </InfoWrapper>
            );
          })}
        </div>
        <CallToActionButton
          onClick={() => {
            location.href = 'https://docs.aelin.xyz/';
          }}
          variant='primary'
          text='Learn more'
        />
      </SponsInvestWrapper>
    </ContentContainer>
  );
};

const Gradient = styled.div`
  height: 900px;
  position: absolute;
  pointer-events: none;
  top: -200px;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  background: radial-gradient(
    rgba(164, 243, 255, 0.15) 0%,
    rgba(164, 243, 255, 0) 74.86%
  );
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
  @media ${devices.tablet} {
    max-width: 320px;
  }
`;

const SponsInvestWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 880px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  z-index: 2;

  @media ${devices.tablet} {
    max-width: 320px;
  }
`;

const TitleWrapper = styled.div`
  width: 100%;
  max-width: 716px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 100px;
`;

const Title = styled.div`
  width: 298px;

  font-family: 'Agrandir-TextBold';
  font-size: 24px;
  line-height: 31px;
  color: #a4f3ff;
  text-shadow: 0px 0px 6px rgba(80, 80, 80, 0.5);
`;

const Bar = styled.div`
  position: absolute;
  height: 1132px;
  width: 6px;
  top: 0;

  background: linear-gradient(
    0deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 1) 15%,
    rgba(255, 255, 255, 1) 85%,
    rgba(255, 255, 255, 0) 100%
  );
`;

const InfoWrapper = styled.div`
  position: relative;
  width: 716px;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  margin-bottom: 20px;
`;

const SponsorTitle = styled.span`
  width: 298px;

  font-family: 'Agrandir-TextBold';
  font-size: 24px;
  line-height: 31px;
  text-align: right;
`;

const SponsorParagraph = styled.p`
  width: 298px;

  font-size: 16px;
  line-height: 21px;
  text-align: right;

  color: rgba(255, 255, 255, 0.7);

  text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.5);
`;
const InvestorTitle = styled.span`
  width: 298px;

  font-family: 'Agrandir-TextBold';
  font-size: 24px;
  line-height: 31px;

  text-align: left;
`;

const InvestorParagraph = styled.p`
  width: 298px;
  font-size: 16px;
  line-height: 21px;
  text-align: left;
  color: rgba(255, 255, 255, 0.7);
  text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.5);
`;

export default SponsorInvestor;
