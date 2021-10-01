import About from 'components/About';
import Contact from 'components/Contact';
import Experience from 'components/Experience';
import Intro from 'components/Intro';
import type { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';

import experienceDataList from 'data/experiences';

const Home: NextPage = () => {
	return (
		<div>
			<Head>
				<title>Vitor Martins</title>
				<meta name="description" content="Software Engineer" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Intro />
			<About />
			<Experience experienceDataList={experienceDataList} />
			<Contact />
		</div>
	);
};

export default Home;
