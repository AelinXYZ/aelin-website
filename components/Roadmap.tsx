import React from 'react';
import styled from 'styled-components';
import { roadmap } from '../data/roadmap';
import Circles from './Circles';
import Typography from './Typography';

const Roadmap = () => {
  return (
    <div>
      <ContentContainer>
        <Typography
          variant='title'
          style={{ marginBottom: '100px', maxWidth: '880px' }}
        >
          ROADMAP
        </Typography>

        <TimelineWrapper>
          <Bar />
          <LongBar />
          {roadmap.map(({ month, isActive, version, id }) => {
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
                    style={{ position: 'relative', margin: '12px 0px' }}
                  ></Circles>
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
    </div>
  );
};

const TitleCircleWrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
`;

const Bar = styled.div`
  position: absolute;
  top: 89px;
  left: 125px;
  background: #a4f3ff;
  width: 26%;
  height: 6px;
  z-index: 5;
`;

const LongBar = styled.div`
  position: absolute;
  top: 89px;
  left: 125px;
  // need to fix this width
  width: 100%;
  height: 6px;
  z-index: 4;
  background: linear-gradient(
    270deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.5) 48.44%
  );
`;

const ContentContainer = styled.div`
  width: 100%;
  max-width: 1164px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  z-index: 2;
  margin-bottom: 107px;
`;

const TimelineWrapper = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: space-between;
`;

const ReleaseWrapper = styled.div`
  display: flex;
  flex-shrink: 0;
  flex-direction: column;
  align-items: center;
  width: 261px;
`;

const Title = styled.span`
  height: 60px;
  font-family: 'Agrandir-Grand-Heavy-800';
  font-size: 18px;
  line-height: 21px;
  text-align: center;
  z-index: 50;
`;

const VersionWrapper = styled.div`
  width: 100%;
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.5);
  border-radius: 12px;
  padding: 30px;
  height: 215px;
`;

const VersionTitle = styled.div`
  font-family: 'Agrandir-Grand-Heavy-800';
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

export default Roadmap;
