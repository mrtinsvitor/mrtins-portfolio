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
		<Container id="about" style={{ marginTop: '60px' }}>
			<CenterComponent>
				<div style={{ marginBottom: '60px' }}>
					<Title>About Me</Title>
					<Divider width={20} />
					<Text style={{ textAlign: 'justify' }}>
						Hey I'm Vitor, and I build things. I'm Experienced in Fullstack Web
						Development but I also like developing mobile applications
						(hybrid/native). There are some technologies that I'm used to
						working on a daily basis such as JavaScript and frameworks like
						React.Js, Angular, Node.Js, and also have good experience with Java
						and the Spring Framework. And as a Fullstack developer I also got
						some experiences with SQL and NoSQL databases, AWS Services and
						Docker. 
					</Text>
				</div>
				{skillDataList && (
					<div>
						<Title style={{ fontSize: '1.6rem' }}>Some Of My Skills</Title>
						<Divider width={25} />
						<StyledSkillsContainer>
							{skillDataList.map((el: ISkill, i: number) => (
								<li key={i}>
									<OverlayTrigger
										placement="bottom"
										overlay={
											<Tooltip id="tooltip-bottom" data-testid="skill-tooltip">
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
						</StyledSkillsContainer>
					</div>
				)}
			</CenterComponent>
		</Container>
	);
};

export default About;
