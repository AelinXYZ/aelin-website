import React from 'react';
import styled from 'styled-components';
import { roadmap } from '../data/roadmap';
import { devices } from '../breakpoints';
import useMediaQuery from '../hooks/useMediaQuery';
import Circles from './Circles';

const Roadmap = () => {
  const matchesMd = useMediaQuery('(max-width: 768px)');

  return (
    <div>
      <ContentContainer>
        {matchesMd ? <H2>THE AELIN ROADMAP</H2> : <H2>ROADMAP</H2>}
        <P>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.{' '}
        </P>
        <TimelineWrapper>
          {roadmap.map(({ month, isActive, version, id }, index) => {
            return (
              <ReleaseWrapper key={id}>
                {matchesMd ? (
                  <div
                    style={{
                      position: 'relative',
                      display: 'flex',
                      justifyContent: 'center',
                      marginRight: '10px',
                      width: '109px',
                    }}
                  >
                    <Title>{month}</Title>
                    <BarWrapper>
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
                  </div>
                ) : (
                  <>
                    <Title>{month}</Title>
                    <BarWrapper>
                      <Circles
                        color={
                          isActive === 'active' || isActive === 'previous'
                            ? 'blue'
                            : 'white'
                        }
                        style={{ position: 'relative', margin: '12px 0px' }}
                      />
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
                  </>
                )}
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
  @media ${devices.tablet} {
    max-width: 300px;
    margin-bottom: 86px;
  }
`;

const H2 = styled.h2`
  font-family: 'Agrandir-TextBold';
  height: 70px;
  font-size: 36px;
  line-height: 47px;
  text-align: center;
  text-shadow: 0px 0px 6px rgba(80, 80, 80, 0.5);
  margin-bottom: 10px;

  @media ${devices.tablet} {
    height: 100%;
    font-size: 18px;
    line-height: 23px;
    text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.8);
    margin-bottom: 20px;
  }
`;

const P = styled.p`
  width: 840px;
  height: 90px;
  font-size: 24px;
  line-height: 31px;
  text-align: center;
  text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.5);
  margin-bottom: 40px;
  @media ${devices.tablet} {
    height: 100%;
    width: 300px;
    font-size: 16px;
    line-height: 21px;
    margin-bottom: 56px;
  }
`;

const TimelineWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  @media ${devices.tablet} {
    flex-direction: column;
  }
`;

const ReleaseWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 261px;
  @media ${devices.tablet} {
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: normal;
    margin-bottom: 40px;
  }
`;

const BarWrapper = styled.div`
  position: relative;
  margin-bottom: 41px;
  @media ${devices.tablet} {
    position: absolute;
    width: 100%;
    left: 100%;
    margin-bottom: 0;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

const LongBar = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  // need to fix this width
  width: 70vw;
  height: 6px;
  z-index: 5;
  background: linear-gradient(
    270deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.5) 48.44%
  );
  @media ${devices.tablet} {
    width: 6px;
    // Need to fix height and linear gradient
    height: 1020px;
    background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.5) 36.46%
    );
  }
`;

const Bar = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 299px;
  height: 6px;
  z-index: 5;
  @media ${devices.tablet} {
    width: 6px;
    height: 299px;
  }
`;

const Title = styled.span`
  height: 60px;
  font-family: 'Agrandir-TextBold';
  font-size: 18px;
  line-height: 21px;
  text-align: center;
  z-index: 50;
  @media ${devices.tablet} {
  }
`;

const VersionWrapper = styled.div`
  width: 100%;
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.5);
  border-radius: 12px;
  padding: 30px;
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

export default Roadmap;
