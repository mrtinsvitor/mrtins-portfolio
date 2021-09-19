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
