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
          {roadmap.map(({ month, isActive, version, id }, index) => {
            return (
              <ReleaseWrapper key={id}>
                <Title>{month}</Title>
                <BarWrapper>
                  <Puce>
                    <MainCircle
                      style={{
                        background:
                          isActive === 'active' || isActive === 'previous'
                            ? '#a4f3ff'
                            : '#FFF',
                      }}
                    />
                    <MiddleCircle
                      style={{
                        background:
                          isActive === 'active' || isActive === 'previous'
                            ? 'rgba(164, 243, 255, 0.4)'
                            : 'rgba(255, 255, 255, 0.4)',
                      }}
                    />
                    <BigCircle
                      style={{
                        background:
                          isActive === 'active' || isActive === 'previous'
                            ? 'rgba(164, 243, 255, 0.2)'
                            : 'rgba(255, 255, 255, 0.2)',
                      }}
                    />
                  </Puce>
                  {index === 0 && (
                    <>
                      <Bar
                        style={{
                          background:
                            isActive === 'previous' || isActive === 'active'
                              ? '#a4f3ff'
                              : 'linear-gradient(270deg, rgb(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.5) 48.44%)',
                        }}
                      />
                      <LongBar />
                    </>
                  )}
                </BarWrapper>
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

const H2 = styled.h2`
  height: 70px;
  font-family: 'Agrandir-TextBold';
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
  display: flex;
  justify-content: space-between;
`;

const BarWrapper = styled.div`
  position: relative;
  margin-bottom: 41px;
`;

const Puce = styled.div`
  position: relative;
  width: 40px;
  height: 40px;
  margin: 12px 0px;
`;

const LongBar = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 1170px;
  height: 6px;
  z-index: 5;
  background: linear-gradient(
    270deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.5) 48.44%
  );
`;

const Bar = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 299px;
  height: 6px;
  z-index: 5;
`;

const MainCircle = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 20px;
  width: 20px;

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
  z-index: 10;
  border-radius: 50%;
`;

const ReleaseWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 261px;
`;

const Title = styled.div`
  width: 109px;
  height: 60px;
  font-family: 'Agrandir-TextBold';
  font-size: 18px;
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

const VersionTitle = styled.div`
  font-style: normal;
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

export default Roadmap;
