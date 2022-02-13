import React, { useState } from 'react';
import styled from 'styled-components';
import { devices } from '../breakpoints';
import { usersInfo } from '../data/usersInfo';

const SponsorInvestorMobile = () => {
  const [activeTab, setActiveTab] = useState<'sponsor' | 'investor'>('sponsor');

  return (
    <ContentContainer>
      <Tabs>
        <LeftTab
          onClick={() => setActiveTab('sponsor')}
          style={
            activeTab === 'investor'
              ? {
                  background: 'rgba(255, 255, 255, 0.1)',
                  border: '1px solid #a4f3ff',
                  color: '#a4f3ff',
                }
              : { background: '#a4f3ff', color: '#152033' }
          }
        >
          Sponsor
        </LeftTab>
        <RightTab
          onClick={() => setActiveTab('investor')}
          style={
            activeTab === 'sponsor'
              ? {
                  background: 'rgba(255, 255, 255, 0.1)',
                  border: '1px solid #a4f3ff',
                  color: '#a4f3ff',
                }
              : { background: '#a4f3ff', color: '#152033' }
          }
        >
          Investor
        </RightTab>
      </Tabs>
      <div style={{ position: 'relative' }}>
        <Bar />

        {usersInfo.map(({ title, text, id, user }, index) => {
          if (activeTab === user) {
            return (
              <InfoContainer key={id}>
                <Puce>
                  <MainCircle />
                  <MiddleCircle />
                  <BigCircle />
                </Puce>
                <TextContainer>
                  <Title>{title}</Title>
                  <Text>{text}</Text>
                </TextContainer>
              </InfoContainer>
            );
          }
        })}
      </div>
      <CallToActionBtn>Learn more</CallToActionBtn>
    </ContentContainer>
  );
};

const ContentContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 320px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  z-index: 2;
`;

const Tabs = styled.div`
  display: flex;
  margin-bottom: 70px;
`;

const LeftTab = styled.div`
  margin: auto;
  width: 160px;
  height: 40px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid #a4f3ff;
  color: #a4f3ff;
  border-radius: 25px 0px 0px 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  line-height: unset;
  cursor: pointer;
`;

const RightTab = styled.div`
  margin: auto;
  width: 160px;
  height: 40px;
  background: #a4f3ff;
  color: #152033;
  border-radius: 0px 25px 25px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  line-height: unset;
  cursor: pointer;
`;

const InfoContainer = styled.div`
  width: 340px;
  height: 170px;
  display: flex;
  margin: 0 0 40px;
  justify-content: space-between;
  padding: 10px;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
`;

const Title = styled.span`
  font-family: 'Agrandir-TextBold';
  font-size: 24px;
  line-height: 31px;
  margin: 12px 0;
`;

const Text = styled.p`
  font-size: 16px;
  line-height: 21px;
  color: rgba(255, 255, 255, 0.7);
  text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.5);
  margin: 12px 0;
`;

const Puce = styled.div`
  position: relative;
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

const Bar = styled.div`
  position: absolute;
  top: 20px;
  left: 30px;
  margin-left: -3px;

  height: 600px;
  width: 6px;

  background: linear-gradient(
    0deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.7) 70%
  );
`;

const CallToActionBtn = styled.button`
  background: #a4f3ff;
  cursor: pointer;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  border-radius: 25px;
  border: none;
  color: #152033;
  font-style: normal;
  font-weight: normal;
  padding: 8px 0;
  margin: 40px 0 80px;
  width: 160px;
  height: 40px;
  font-size: 14px;
  line-height: 18px;
`;

export default SponsorInvestorMobile;
