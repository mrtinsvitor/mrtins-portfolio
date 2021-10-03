import About from 'components/About';
import Contact from 'components/Contact';
import Experience from 'components/Experience';
import Intro from 'components/Intro';
import experienceDataList from 'data/experiences';
import skillDataList from 'data/skills';
import socialDataList from 'data/socials';
import type { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';

const Home: NextPage = () => {
	return (
		<div>
			<Head>
				<title>Vitor Martins</title>
				<meta name="description" content="Software Engineer" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Intro socialDataList={socialDataList} />
			<About skillDataList={skillDataList} />
			<Experience experienceDataList={experienceDataList} />
			<Contact socialDataList={socialDataList} />
		</div>
	);
};

export default Home;
