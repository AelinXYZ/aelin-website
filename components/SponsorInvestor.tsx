import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';
import { devices } from '../breakpoints';
import { usersInfo } from '../data/usersInfo';

const SponsorInvestor = () => {
  return (
    <ContentContainer>
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
                <Puce>
                  <MainCircle />
                  <MiddleCircle />
                  <BigCircle />
                </Puce>
                <SponsorTitle>{title}</SponsorTitle>
                <SponsorParagraph>{text}</SponsorParagraph>
              </InfoWrapper>
            );
          }
          return (
            <InfoWrapper key={id} style={{ alignItems: 'end' }}>
              <Puce>
                <MainCircle />
                <MiddleCircle />
                <BigCircle />
              </Puce>
              <InvestorTitle>{title}</InvestorTitle>
              <InvestorParagraph>{text}</InvestorParagraph>
            </InfoWrapper>
          );
        })}
      </div>
      <CallToActionBtn>Learn more</CallToActionBtn>
      <LogoWrapper>
        <Image
          src='/svg/gray-text-logo.svg'
          alt='Logo'
          width={358}
          height={65}
        />
      </LogoWrapper>
    </ContentContainer>
  );
};

const ContentContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 880px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  z-index: 2;
  // this is a bit off
  background: radial-gradient(
    43.47% 57.22% at 50% 50%,
    rgba(164, 243, 255, 0.15) 0%,
    rgba(164, 243, 255, 0) 74.86%
  );

  @media ${devices.tablet} {
    max-width: 300px;
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

  // need to fix this color
  background: linear-gradient(0deg, rgba(255, 255, 255, 0) 0%, #ffffff 35.94%);
`;

const InfoWrapper = styled.div`
  position: relative;
  width: 716px;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: end;
  margin-bottom: 20px;
`;

const Puce = styled.div`
  position: absolute;
  top: 0;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;

  width: 40px;
  height: 40px;
`;

const MainCircle = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 20px;
  width: 20px;
  background: #ffffff;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.5);
  z-index: 30;
  border-radius: 50%;
`;
const MiddleCircle = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 36px;
  height: 36px;
  background: rgba(255, 255, 255, 0.4);
  z-index: 20;
  border-radius: 50%;
`;
const BigCircle = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 48px;
  height: 48px;
  background: rgba(255, 255, 255, 0.2);
  z-index: 10;
  border-radius: 50%;
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
  margin: 43px 0 80px;
`;

const LogoWrapper = styled.div`
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 83px;
`;

export default SponsorInvestor;
