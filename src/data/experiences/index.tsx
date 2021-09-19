// import { ISkillList } from './types';
export interface IExperience {
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
		companyName: 'Accenture',
		period: 'September 2019 - Present',
		place: 'Rio de Janeiro, RJ, Brazil',
		description:
			'Acting as a Full Stack Web Developer outsourcing projects Brazilian companies such as Oi (Telecom) and Estácio (University), both one of the biggest companies in telecom and education in Brazil. As an outsourcing company I could develop several web development skills such as working with microservices projects, cloud architectures like AWS and also React and Node.Js with Typescript.',
		skills:
			'Java with Spring Framework, React, Node.Js, Typescript, AWS, Docker, RabbitMQ, MongoDB and Oracle Database',
	},
	{
		companyName: 'Unigranrio University',
		period: 'January 2018 - August 2019',
		place: 'Duque de Caxias, RJ, Brazil',
		description:
			'As a full time intern I worked as a Full Stack Developer. At Unigranrio I could develop management systems for internal use of the university employees. I also participated in the development of mobile applications with Ionic 3 and Angular 4 that are used by more than 10 thousand university professores and students. At Unigranrio I could learn many new things and new technologies like React, Spring Framework for Java and hybrid mobile development with Ionic.',
		skills:
			'Java, Spring Boot, Spring MVC, React, Ionic 3, Angular 4, Typescript, SQL Server and Oracle Database',
	},
	{
		companyName: 'Nexus Consultoria (Junior Enterprise)',
		period: 'June 2017 - January 2018',
		place: 'Duque de Caxias, RJ, Brazil',
		description:
			'As Nexus was an outsourcing Junior Enterprise I worked part-time developing websites with HTML/CSS, Wordpress blogs and website administration. At Nexus I could get a first contact with a professional environment and learn the basics of web development and also learned how to work in a team.',
		skills:
			'HTML5, CSS3, Javascript, Bootstrap library, Wordpress and also SEO techniques.',
	},
];

export default experiences;
