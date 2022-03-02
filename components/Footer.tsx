import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';
import { devices } from '../breakpoints';

const Footer = () => {
  return (
    <ContentWrapper>
      <LogoSocialWrapper>
        <Image
          src='/svg/blue-text-logo.svg'
          alt='Logo'
          height={33}
          width={177}
        />
        <SocialWrapper>
          <A href='https://twitter.com/aelinprotocol'>
            <Image
              src='/svg/twitter.svg'
              alt='Twitter Icon'
              height={16}
              width={19}
            />
          </A>
          <A href='http://discord.gg/YHffnV9sUM '>
            <Image
              src='/svg/discord.svg'
              alt='Discord Icon'
              height={16}
              width={19}
            />
          </A>
          <A href={'https://github.com/AelinXYZ'}>
            <Image src='/svg/social.svg' alt='Icon' height={16} width={19} />
          </A>
        </SocialWrapper>
      </LogoSocialWrapper>
    </ContentWrapper>
  );
};

const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 83px;
  @media ${devices.tablet} {
    margin-bottom: 52px;
  }
`;

const LogoSocialWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 177;
  height: 85px;
`;

const SocialWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 120px;
  height: 16px;
`;

const A = styled.a`
  cursor: pointer;
`;

export default Footer;
