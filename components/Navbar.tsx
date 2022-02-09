import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';

const Navbar = () => {
  return (
    <Nav>
      <Image src='/svg/text-logo.svg' alt='Text logo' width={120} height={22} />
      <div>
        <Button>Buy Aelin</Button>
        <Button>Docs</Button>
        <NavCallToActionButton theme>Go to app</NavCallToActionButton>
      </div>
    </Nav>
  );
};

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  align-items: center;
  padding: 30px 40px;
`;

const Button = styled.button`
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

const NavCallToActionButton = styled.button`
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
  /* Note: backdrop-filter has minimal browser support */

  border-radius: 50px;
`;

export default Navbar;
