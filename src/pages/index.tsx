import type { NextPage } from 'next';
import Head from 'next/head';

import Intro from 'components/Intro';
import About from 'components/About';
import Experience from 'components/Experience';
import Contact from 'components/Contact';

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
			<Experience />
			<Contact />
		</div>
	);
};

export default Home;
