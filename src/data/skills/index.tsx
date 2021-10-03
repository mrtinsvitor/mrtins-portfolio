export interface ISkill {
	name: string;
	years: number;
	img: any;
	url: string;
}

const skills: ISkill[] = [
	{
		name: 'Javascript',
		years: 4,
		img: '/static/images/skills/javascript.svg',
		url: 'https://www.javascript.com/',
	},
	{
		name: 'Typescript',
		years: 3,
		img: '/static/images/skills/typescript.svg',
		url: 'https://www.typescriptlang.org/',
	},
	{
		name: 'React',
		years: 4,
		img: '/static/images/skills/react.svg',
		url: 'https://pt-br.reactjs.org/',
	},
	{
		name: 'Angular',
		years: 4,
		img: '/static/images/skills/angular.svg',
		url: 'https://angular.io/',
	},
	{
		name: 'Ionic',
		years: 4,
		img: '/static/images/skills/ionic.svg',
		url: 'https://ionicframework.com/',
	},
	{
		name: 'Node.Js',
		years: 4,
		img: '/static/images/skills/nodejs.svg',
		url: 'https://nodejs.org/en/',
	},
	{
		name: 'Jest',
		years: 1,
		img: '/static/images/skills/jest.svg',
		url: 'https://jestjs.io/',
	},
	{
		name: 'Java',
		years: 4,
		img: '/static/images/skills/java.svg',
		url: 'https://www.java.com/',
	},
	{
		name: 'Spring Framework',
		years: 4,
		img: '/static/images/skills/spring.svg',
		url: 'https://spring.io/',
	},
	{
		name: 'AWS',
		years: 1,
		img: '/static/images/skills/aws.svg',
		url: 'https://aws.amazon.com/',
	},
	// {
	// 	name: 'Docker',
	// 	years: 1,
	// 	img: '/static/images/skills/docker.svg',
	// 	url: 'https://www.docker.com/',
	// },
	{
		name: 'SQL Databases',
		years: 4,
		img: '/static/images/skills/sql.svg',
		url: 'https://www.mysql.com/',
	},
];

export default skills;
