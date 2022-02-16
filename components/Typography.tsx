import React, { CSSProperties } from 'react';
import styled from 'styled-components';
import { devices } from '../breakpoints';

interface TypographyProps {
  variant: 'title' | 'subtitle' | 'body' | 'body1';
  children: string;
  style?: CSSProperties;
}

const Typography = ({ variant, children, style }: TypographyProps) => {
  if (variant === 'title') return <Title style={style}>{children}</Title>;
  if (variant === 'subtitle')
    return <Subtitle style={style}>{children}</Subtitle>;
  if (variant === 'body') return <Body style={style}>{children}</Body>;
  return <Body1 style={style}>{children}</Body1>;
};

const Title = styled.div`
  font-family: 'Agrandir-TextBold';
  font-size: 36px;
  line-height: 47px;
  text-align: center;
  color: #ffffff;
  text-shadow: 0px 0px 6px rgba(80, 80, 80, 0.5);
  @media ${devices.mobile} {
    font-size: 18px;
    line-height: 23px;
  }
`;

const Subtitle = styled.div`
  font-family: 'Agrandir-TextBold';
  font-size: 24px;
  line-height: 31px;
  text-align: center;
  color: #ffffff;
  text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.8);

  @media ${devices.mobile} {
    font-family: 'Agrandir-TextBold';
    font-size: 18px;
    line-height: 23px;
    margin-bottom: 20px;
  }
`;

const Body = styled.div`
  font-size: 24px;
  line-height: 31px;
  text-align: center;
  color: #ffffff;
  text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.5);
  @media ${devices.mobile} {
    font-size: 16px;
    line-height: 21px;
    height: 84px;
  }
`;

const Body1 = styled.div`
  font-size: 16px;
  line-height: 21px;
  color: #ffffff;
  text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.5);
`;

export default Typography;
