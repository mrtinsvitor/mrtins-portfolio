import {
	faGithub,
	faLinkedinIn,
	faTwitter,
	IconDefinition,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

export interface ISocial {
	id: number;
	url: string;
	icon: IconDefinition;
}

const socials: ISocial[] = [
	{
		id: 1,
		url: 'https://www.linkedin.com/in/martinsvitor',
		icon: faLinkedinIn,
	},
	{
		id: 2,
		url: 'https://github.com/mrtins',
		icon: faGithub,
	},
	{
		id: 3,
		url: 'https://twitter.com/mrtinsvitor',
		icon: faTwitter,
	},
	{
		id: 4,
		url: 'mailto:vitorfigmartins@gmail.com',
		icon: faEnvelope,
	},
];

export default socials;
