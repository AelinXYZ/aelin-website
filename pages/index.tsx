import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styled from 'styled-components';
import Intro from '../components/Intro';
import Navbar from '../components/Navbar';
import Roadmap from '../components/Roadmap';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Aelin</title>
      </Head>
      <Intro />
      <Roadmap />
    </div>
  );
};

export default Home;
