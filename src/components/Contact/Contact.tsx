import React from 'react';
import { Container } from 'react-bootstrap';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {
	faLinkedinIn,
	faTwitter,
	faGithub,
} from '@fortawesome/free-brands-svg-icons';

import CenterComponent from 'components/shared/CenterComponent';
import CircleIcon from 'components/shared/CircleIcon/index';

import {
	StyledContactText,
	IconsContainer,
	StyledContactsContainer,
} from './styles';
import { ISocial } from 'data/socials';

interface IProps {
	socialDataList?: ISocial[];
}

const Contact: React.FC<IProps> = ({ socialDataList }) => {
	const openNewTab = (url: string): any => {
		return window.open(url, '_blank');
	};

	return (
		<>
			{socialDataList && (
				<Container style={{ marginTop: '100px' }}>
					<CenterComponent style={{ marginTop: '30px', marginBottom: '40px' }}>
						<StyledContactsContainer>
							<StyledContactText>Get in contact</StyledContactText>
							<IconsContainer>
								{socialDataList.map((social, i) => (
									<li key={i}>
										<CircleIcon
											onClick={() => openNewTab(social.url)}
											icon={social.icon}
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
};

export default Contact;
