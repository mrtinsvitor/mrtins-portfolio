import CenterComponent from 'components/shared/CenterComponent';
import CircleIcon from 'components/shared/CircleIcon/index';
import { ISocial } from 'data/socials';
import React from 'react';
import { Container } from 'react-bootstrap';
import {
	IconsContainer,
	StyledContactsContainer,
	StyledContactText,
} from './styles';

interface IProps {
	socialDataList?: ISocial[];
}

const Contact: React.FC<IProps> = ({ socialDataList }) => (
	<>
		{socialDataList && (
			<Container id="contact" style={{ marginTop: '100px' }}>
				<CenterComponent style={{ marginTop: '30px', marginBottom: '40px' }}>
					<StyledContactsContainer>
						<StyledContactText>Get in contact</StyledContactText>
						<IconsContainer>
							{socialDataList.map((social, i) => (
								<li key={i}>
									<CircleIcon
										icon={social.icon}
										href={social.url}
										target="_blank"
										color="#fff"
									/>
								</li>
							))}
						</IconsContainer>
					</StyledContactsContainer>
				</CenterComponent>
			</Container>
		)}
	</>
);

export default Contact;
