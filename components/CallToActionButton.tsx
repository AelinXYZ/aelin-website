import React from 'react';
import styled from 'styled-components';
import { devices } from '../breakpoints';

interface ButtonProps {
  text: string;
  variant: 'outline' | 'primary' | 'text';
  onClick?: () => void;
}

const CallToActionButton = ({ text, variant, onClick }: ButtonProps) => {
  if (variant === 'primary') {
    return <PrimaryButton onClick={onClick}>{text}</PrimaryButton>;
  }
  if (variant === 'text') {
    return <TextButton onClick={onClick}>{text}</TextButton>;
  }
  return <OutlineButton onClick={onClick}>{text}</OutlineButton>;
};

const PrimaryButton = styled.button`
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
  margin: 40px 0 180px 0;
  @media ${devices.tablet} {
    width: 160px;
    height: 40px;
    font-size: 14px;
    line-height: 18px;
    margin: 40px 0 68px 0;
  }
`;

const OutlineButton = styled.button`
  background: transparent;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  cursor: pointer;
  border-radius: 25px;
  width: 160px;
  color: inherit;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 18px;
  padding: 8px 0;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid #ffffff;
  box-sizing: border-box;
  backdrop-filter: blur(4px);
  border-radius: 50px;
`;

const TextButton = styled.button`
  margin-right: 30px;
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  outline: inherit;
  font-size: 18px;
  cursor: pointer;
`;

export default CallToActionButton;
