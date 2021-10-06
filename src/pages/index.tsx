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

// The following import prevents a Font Awesome icon server-side rendering bug,
// where the icons flash from a very large icon down to a properly sized one:
import '@fortawesome/fontawesome-svg-core/styles.css';
// Prevent fontawesome from adding its CSS since we did it manually above:
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false; /* eslint-disable import/first */

const Home: NextPage = () => {
	return (
		<div>
			<Head>
				<title>Vitor Martins</title>
				<meta
					name="description"
					content="Hey I'm Vitor, and I build things. I'm experienced in Fullstack Web
						Development but I also like developing mobile applications
						(hybrid/native). There are some technologies that I'm used to
						working on a daily basis such as JavaScript and frameworks like
						React.Js, Angular, Node.Js and also have good experience with Java
						and the Spring Framework. And as a Fullstack developer I also got
						some experiences with SQL and NoSQL databases, AWS Services and
						Docker."
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<link rel="icon" href="/static/images/dev-icon.svg" />
			</Head>

			<Intro socialDataList={socialDataList} />
			<About skillDataList={skillDataList} />
			<Experience experienceDataList={experienceDataList} />
			<Contact socialDataList={socialDataList} />
		</div>
	);
};

export default Home;
