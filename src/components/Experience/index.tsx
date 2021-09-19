import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Title from '../shared/Title';
import Divider from '../shared/Divider';
import CenterComponent from '../shared/CenterComponent';

import {
  StyledCompanyName,
  StyledCompanyInfo,
  StyledExperienceDescription,
  StyledExperienceSkills,
  StyledVerticalDivider,
} from './styles';

import experienceList from '../../data/experiences';
import { IExperience } from '../../data/experiences/types';

const Experience: React.FC = () => {
  return (
    <Container style={{ marginTop: '120px' }}>
      <CenterComponent>
        <div style={{ marginBottom: '40px' }}>
          <Title>Career Experience</Title>
          <Divider width={25} />
        </div>
        <Container>
          {experienceList.map((experience: IExperience, i: number) => (
            <div key={i} style={{ marginBottom: '20px' }}>
              <Row>
                <Col md={3}>
                  <StyledCompanyName>{experience.companyName}</StyledCompanyName>
                  <StyledCompanyInfo>{experience.period}</StyledCompanyInfo>
                  <StyledCompanyInfo>{experience.place}</StyledCompanyInfo>
                </Col>
                <Col md={1}>
                  <StyledVerticalDivider />
                </Col>
                <Col md={8}>
                  <StyledExperienceDescription>
                    {experience.description}
                  </StyledExperienceDescription>
                  <StyledExperienceDescription style={{ margin: 0, padding: 0 }}>
                    Some of the technologies that I use at {experience.companyName}:
                  </StyledExperienceDescription>
                  <StyledExperienceSkills>{experience.skills}</StyledExperienceSkills>
                </Col>
              </Row>
            </div>
          ))}
        </Container>
      </CenterComponent>
    </Container>
  );
};

export default Experience;
