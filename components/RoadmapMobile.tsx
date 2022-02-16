import React from 'react';
import styled from 'styled-components';
import { devices } from '../breakpoints';
import { roadmap } from '../data/roadmap';
import Circles from './Circles';
import Typography from './Typography';

const RoadmapMobile = () => {
  return (
    <ContentContainer>
      <Typography variant='title' style={{ marginBottom: '20px' }}>
        ROADMAP
      </Typography>
      <Typography variant='body' style={{ marginBottom: '56px' }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </Typography>
      <TimelineWrapper>
        <Bar />
        <LongBar />
        {roadmap.map(({ month, isActive, version, id }, index) => {
          return (
            <ReleaseWrapper key={id}>
              <TitleCircleWrapper>
                <Title>{month}</Title>
                <Circles
                  color={
                    isActive === 'active' || isActive === 'previous'
                      ? 'blue'
                      : 'white'
                  }
                  style={{
                    position: 'relative',
                    margin: '0',
                    width: '100%',
                    height: '100%',
                  }}
                />
              </TitleCircleWrapper>
              <VersionWrapper
                style={{
                  outline: isActive === 'active' ? '2px solid #A4F3FF' : '',
                }}
              >
                <VersionTitle>{version.title}</VersionTitle>
                {version.bullets.map((b, i) => (
                  <VersionBullet key={i}>* {b}</VersionBullet>
                ))}
              </VersionWrapper>
            </ReleaseWrapper>
          );
        })}
      </TimelineWrapper>
    </ContentContainer>
  );
};

const ContentContainer = styled.div`
  width: 100%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  z-index: 2;
  margin-bottom: 107px;
  @media ${devices.mobile} {
    max-width: 320px;
    margin-bottom: 86px;
  }
`;

const TimelineWrapper = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media ${devices.mobile} {
  }
`;

const Bar = styled.div`
  position: absolute;
  top: 130px;
  left: 131px;
  background: #a4f3ff;
  width: 6px;
  height: 25%;
  z-index: 5;
  @media ${devices.mobile} {
    top: 119px;
    left: 33px;
  }
`;

const LongBar = styled.div`
  position: absolute;
  top: 130px;
  left: 131px;
  width: 6px;
  height: 95%;
  z-index: 4;
  background: linear-gradient(
    0deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.7) 70%
  );

  @media ${devices.mobile} {
    top: 119px;
    left: 33px;
    height: 90%;
  }
`;

const ReleaseWrapper = styled.div`
  display: flex;
  flex-shrink: 0;
  justify-content: space-evenly;
  width: 100%;
  margin: 10px 0;
  @media ${devices.mobile} {
    margin-bottom: 40px;
  }
`;

const TitleCircleWrapper = styled.div`
  @media ${devices.mobile} {
    display: flex;
    flex-direction: column;
    width: 100px;
    height: 100%;
    margin-right: 5px;
  }
`;

const Title = styled.span`
  height: 60px;
  font-family: 'Agrandir-TextBold';
  font-size: 18px;
  line-height: 21px;
  text-align: center;
  z-index: 10;
  @media ${devices.mobile} {
    margin-bottom: 50px;
  }
`;

const VersionWrapper = styled.div`
  width: 40%;
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.5);
  border-radius: 12px;
  padding: 30px;
  @media ${devices.mobile} {
    width: 100%;
    justify-content: center;
  }
`;

const VersionTitle = styled.div`
  font-family: 'Agrandir-TextBold';
  font-size: 24px;
  line-height: 31px;
  color: #ffffff;
  margin-bottom: 10px;
`;

const VersionBullet = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 21px;
  color: #ffffff;
  text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.5);
  margin-bottom: 10px;
`;

export default RoadmapMobile;
