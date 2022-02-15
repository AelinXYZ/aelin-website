import React, { CSSProperties } from 'react';
import styled from 'styled-components';

interface CirclesProps {
  color: 'white' | 'blue';
  style?: CSSProperties;
}

const Circles = ({ color, style }: CirclesProps) => {
  return (
    <CirclesWrapper style={style}>
      <MainCircle
        style={{
          background: color === 'blue' ? '#a4f3ff' : '#FFF',
        }}
      />
      <MiddleCircle
        style={{
          background:
            color === 'blue'
              ? 'rgba(164, 243, 255, 0.4)'
              : 'rgba(255, 255, 255, 0.4)',
        }}
      />
      <BigCircle
        style={{
          background:
            color === 'blue'
              ? 'rgba(164, 243, 255, 0.2)'
              : 'rgba(255, 255, 255, 0.2)',
        }}
      />
    </CirclesWrapper>
  );
};

const CirclesWrapper = styled.div`
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

export default Circles;
