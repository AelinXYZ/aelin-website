import React from 'react';
import styled from 'styled-components';
import { roadmap } from '../data/roadmap';

const Roadmap = () => {
  return (
    <div>
      <ContentContainer>
        <H2>ROADMAP</H2>
        <P>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.{' '}
        </P>
        <TimelineWrapper>
          {roadmap.map(({ month, isActive, version, id }) => (
            <ReleaseWrapper key={id}>
              <Title>{month}</Title>
              <VersionWrapper
                style={{ outline: isActive ? '2px solid #A4F3FF' : '' }}
              >
                <VersionTitle>{version.title}</VersionTitle>
                {version.bullets.map((b, i) => (
                  <VersionBullet key={i}>* {b}</VersionBullet>
                ))}
              </VersionWrapper>
            </ReleaseWrapper>
          ))}
        </TimelineWrapper>
      </ContentContainer>
    </div>
  );
};

const ContentContainer = styled.div`
  width: 100%;
  max-width: 1164px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  z-index: 2;
`;

const H2 = styled.h2`
  height: 70px;
  font-weight: 800;
  font-size: 36px;
  line-height: 47px;
  text-align: center;
  color: #ffffff;
  text-shadow: 0px 0px 6px rgba(80, 80, 80, 0.5);
  margin: 0 0 10px 0;
`;

const P = styled.p`
  width: 840px;
  height: 90px;
  font-weight: normal;
  font-size: 24px;
  line-height: 31px;
  text-align: center;
  color: #ffffff;
  text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.5);
  margin: 0 0 40px 0;
`;

const TimelineWrapper = styled.div`
  width: 100%;
  height: 327px;

  display: flex;
  justify-content: space-between;
`;

const ReleaseWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 261px;
  height: 327px;
`;

const Title = styled.div`
  width: 109px;
  height: 60px;
  font-weight: 800;
  font-size: 16px;
  line-height: 21px;
  text-align: center;
  color: #ffffff;
`;

const VersionWrapper = styled.div`
  width: 230px;
  height: 184px;
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.5);
  border-radius: 12px;
  padding: 30px;
`;
const VersionWrapperActive = styled.div`
  width: 230px;
  height: 184px;
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.5);
  border-radius: 12px;
  padding: 30px;
  border: 2px solid #a4f3ff;
`;
const VersionTitle = styled.div`
  font-style: normal;
  font-weight: 800;
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
