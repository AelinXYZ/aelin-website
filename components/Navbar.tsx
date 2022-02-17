import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import useMediaQuery from '../hooks/useMediaQuery';
import CallToActionButton from './CallToActionButton';
import { devices } from '../breakpoints';

const Navbar = () => {
  const matchesMobile = useMediaQuery(devices.mobile);

  if (matchesMobile)
    return (
      <NavMobile>
        <Image
          src='/svg/text-logo.svg'
          alt='Text logo'
          width={89}
          height={15}
        />
      </NavMobile>
    );
  return (
    <Nav>
      <Image src='/svg/text-logo.svg' alt='Text logo' width={120} height={22} />
      <div>
        <CallToActionButton variant='tertiary' text='Buy Aelin' />
        <CallToActionButton variant='tertiary' text='Docs' />
        <CallToActionButton variant='secondary' text='Go to app' />
      </div>
    </Nav>
  );
};

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  padding: 40px 40px;
`;

const NavMobile = styled.nav`
  display: flex;
  justify-content: center;
  width: 100%;
  align-items: center;
  padding: 40px 40px;
`;

export default Navbar;
