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

const Contact: React.FC = () => {
	const openNewTab = (url: string): any => {
		return window.open(url, '_blank');
	};

	return (
		<Container style={{ marginTop: '100px' }}>
			<CenterComponent style={{ marginTop: '30px', marginBottom: '40px' }}>
				<StyledContactsContainer>
					<StyledContactText>Get in contact</StyledContactText>
					<IconsContainer>
						<CircleIcon
							onClick={() =>
								openNewTab('https://www.linkedin.com/in/martinsvitor/')
							}
							icon={faLinkedinIn}
							color="#fff"
							containerStyle={{ width: '36px', height: '36px' }}
						/>
						<CircleIcon
							onClick={() => openNewTab('https://github.com/mrtins')}
							icon={faGithub}
							color="#fff"
							containerStyle={{ width: '36px', height: '36px' }}
						/>
						<CircleIcon
							onClick={() => openNewTab('https://twitter.com/mrtinsvitor')}
							icon={faTwitter}
							color="#fff"
							containerStyle={{ width: '36px', height: '36px' }}
						/>
						<CircleIcon
							onClick={() => openNewTab('mailto:vitorfigmartins@gmail.com')}
							icon={faEnvelope}
							color="#fff"
							containerStyle={{ width: '36px', height: '36px' }}
						/>
					</IconsContainer>
				</StyledContactsContainer>
			</CenterComponent>
		</Container>
	);
};

export default Contact;
