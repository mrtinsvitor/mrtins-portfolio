import { IExperience } from 'data/experiences';
import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import CenterComponent from '../shared/CenterComponent';
import Divider from '../shared/Divider';
import Title from '../shared/Title';
import {
  StyledCompanyInfo,
  StyledCompanyName,
  StyledExperienceDescription,
  StyledExperienceSkills
} from './styles';

interface IProps {
	experienceDataList?: IExperience[];
}

const Experience: React.FC<IProps> = ({ experienceDataList }) => {
	return (
		<>
			{experienceDataList && (
				<Container id="experience" style={{ marginTop: '120px' }}>
					<CenterComponent>
						<div style={{ marginBottom: '40px' }}>
							<Title>Career Experience</Title>
							<Divider width={25} />
						</div>
						<Container>
							<ul>
								{experienceDataList
									.sort((a: IExperience, b: IExperience) => b.id - a.id)
									.map((experience: IExperience, i: number) => (
										<li key={i}>
											<Row style={{ marginBottom: '30px' }}>
												<Col md={4} style={{ marginBottom: '20px' }}>
													<StyledCompanyName data-testid="company-name">
														{experience.companyName}
													</StyledCompanyName>
													<StyledCompanyInfo data-testid="period">
														{experience.period}
													</StyledCompanyInfo>
													<StyledCompanyInfo data-testid="place">
														{experience.place}
													</StyledCompanyInfo>
												</Col>
												<Col md={8}>
													<StyledExperienceDescription data-testid="description">
														{experience.description}
													</StyledExperienceDescription>
													<StyledExperienceDescription
														style={{ margin: 0, padding: 0 }}
													>
														Some of the technologies that I{' '}
														{experience.period.includes('Present')
															? 'use'
															: 'used'}{' '}
														at {experience.companyName}:
													</StyledExperienceDescription>
													<StyledExperienceSkills data-testid="skills">
														{experience.skills}
													</StyledExperienceSkills>
												</Col>
												<Divider width={50} style={{ marginTop: '25px' }} />
											</Row>
										</li>
									))}
							</ul>
						</Container>
					</CenterComponent>
				</Container>
			)}
		</>
	);
};

export default Experience;
