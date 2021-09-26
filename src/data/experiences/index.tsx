// import { ISkillList } from './types';
export interface IExperience {
	id: number;
	companyName: string;
	period: string;
	place: string;
	description: string;
	skills: string;
}

export interface ISkillList {
	[x: string]: any;
	[index: number]: IExperience;
}

const experiences: ISkillList = [
	{
		id: 1,
		companyName: 'Nexus Consultoria (Junior Enterprise)',
		period: 'June, 2017 - January, 2018',
		place: 'Rio de Janeiro, Brazil',
		description:
			'As Nexus was an outsourcing Junior Enterprise I worked part-time developing websites with HTML/CSS, Wordpress blogs and website administration. At Nexus I could get a first contact with a professional environment and learn the basics of web development and also learned how to work in a team.',
		skills:
			'HTML5, CSS3, Javascript, Bootstrap library, Wordpress and also SEO techniques.',
	},
	{
		id: 2,
		companyName: 'Unigranrio University',
		period: 'January, 2018 - August, 2019',
		place: 'Rio de Janeiro, Brazil',
		description:
			'As a full time intern I worked as a Full Stack Developer. At Unigranrio I could develop management systems for internal use of the university employees. I also participated in the development of mobile applications with Ionic 3 and Angular 4 that are used by more than 10 thousand university professores and students. At Unigranrio I could learn many new things and new technologies like React, Spring Framework for Java and hybrid mobile development with Ionic.',
		skills:
			'Java, Spring Boot, Spring MVC, React, Ionic, Angular, Typescript, SQL Server and Oracle Database',
	},
	{
		id: 3,
		companyName: 'Accenture',
		period: 'September, 2019 - December, 2020',
		place: 'Rio de Janeiro, Brazil',
		description:
			'Acting as a Full-Stack Web Developer outsourcing projects Brazilian companies such as Oi (Telecom) and Estácio (University), both one of the biggest companies in telecom and education in Brazil. As an outsourcing company I could develop several web development skills such as working with microservices projects, cloud architectures like AWS and also React and Node.Js with Typescript.',
		skills:
			'Java, Spring Framework, React, Node.Js, Typescript, AWS, Docker, RabbitMQ, MongoDB and Oracle Database',
	},
	{
		id: 4,
		companyName: 'Aubay',
		period: 'January, 2021 - Present',
		place: 'Lisbon, Portugal',
		description:
			'With Aubay I could get myself to work on a different country than my native one, which is giving me a wonderful experience, since I can get to know new cultures and different people around the world. In Aubay I work as a Software Development Engineer in outsource projects for big European companies. Working with Full stack projects, I could get in touch in the Front End with the most popular technologies like React, Ionic and Angular for PWAs projects. For the Back End I could work with Node.Js and Java with Spring Framework and could also learn Kotlin for Back End',
		skills:
			'Java, Spring Framework, React, Node.Js, Typescript, Kotlin, MongoDB',
	},
];

export default experiences;
