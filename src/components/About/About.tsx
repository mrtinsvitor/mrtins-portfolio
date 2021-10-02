import CenterComponent from 'components/shared/CenterComponent';
import Divider from 'components/shared/Divider';
import Text from 'components/shared/Text';
import Title from 'components/shared/Title';
import { ISkill } from 'data/skills/index';
import Image from 'next/image';
import React from 'react';
import Container from 'react-bootstrap/Container';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import { StyledSkillImage, StyledSkillsContainer } from './styles';

interface IProps {
	skillDataList?: ISkill[];
}

const About: React.FC<IProps> = ({ skillDataList }) => {
	const openNewTab = (url: string): any => {
		return window.open(url, '_blank');
	};

	return (
		<Container style={{ marginTop: '100px' }}>
			<CenterComponent>
				<div style={{ marginBottom: '60px' }}>
					<Title>About Me</Title>
					<Divider width={20} />
					<Text style={{ textAlign: 'justify' }}>
						Hey, I’m Vitor and I’m a Software Engineer. When I was at high
						school I started learning about Pascal, I developed a simple text
						based RPG game, then I realized how I could do amazing things with
						code and fell in love with it. So I graduated in Computer
						Programming and got a Bachelor’s Degree. That said I have over three
						years of professional experience in web and mobile development,
						developing with JavaScript and Java. One of my passions is gaming
						and game development, so whenever I can I’m developing some game or
						learning about game development. To learn more about my experience
						check out my resume here.
					</Text>
				</div>
				{skillDataList && (
					<div>
						<Title style={{ fontSize: '1.6rem' }}>Some Of My Skills</Title>
						<Divider width={25} />
						<StyledSkillsContainer>
							<ul>
								{skillDataList.map((el: ISkill, i: number) => (
									<li key={i}>
										<OverlayTrigger
											placement="bottom"
											overlay={
												<Tooltip
													id="tooltip-bottom"
													data-testid="skill-tooltip"
												>
													{el.name} -{' '}
													{el.years > 1
														? `${el.years} years`
														: `${el.years} year`}
												</Tooltip>
											}
										>
											<StyledSkillImage
												data-testid="skill-overlay"
												onClick={() => openNewTab(el.url)}
											>
												<Image
													src={el.img}
													alt={el.name}
													width={42}
													height={42}
												/>
											</StyledSkillImage>
										</OverlayTrigger>
									</li>
								))}
							</ul>
						</StyledSkillsContainer>
					</div>
				)}
			</CenterComponent>
		</Container>
	);
};

export default About;
