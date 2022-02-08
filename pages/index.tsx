import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Aelin</title>
      </Head>
      <Nav>
        <Image
          src="/svg/text-logo.svg"
          alt="Text logo"
          width={120}
          height={22}
        />
        <div>
          <button>Buy Aelin</button>
          <button>Docs</button>
          <button>Go to app</button>
        </div>
      </Nav>
      <ContentContainer>
        <MainLogoContainer>
          <Image
            src="/svg/logo-and-text.svg"
            alt="Text logo"
            width={360}
            height={181}
          />
        </MainLogoContainer>

        <H1 style={{ marginTop: 100 }}>
          THE FIRST DECENTRALIZED FUNDRAISING PROTOCOL
        </H1>

        <P>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
        </P>
        <CallToActionBtn>Go to app</CallToActionBtn>
      </ContentContainer>
    </div>
  );
};

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  height: 100;
  width: 100%;
  align-items: center;
  padding-top: 30px;
`;
const MainLogoContainer = styled.div`
  margin-top: 80px;
`;

const ContentContainer = styled.div`
  width: 100%;
  max-width: 880px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  z-index: 2;
`;
const H1 = styled.h1`
  font-style: normal;
  font-weight: 800;
  font-size: 24px;
  line-height: 31px;
  text-align: center;
  text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.8);
`;
const P = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 31px;
  text-align: center;
  text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.5);
`;

const CallToActionBtn = styled.button`
  background: #a4f3ff;
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
`;
export default Home;
