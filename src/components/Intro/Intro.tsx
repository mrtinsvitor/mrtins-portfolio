import React from 'react';
import Container from 'react-bootstrap/Container';
import {
	faLinkedinIn,
	faTwitter,
	faGithub,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

import CenterComponent from 'components/shared/CenterComponent';
import Divider from 'components/shared/Divider';
import Text from 'components/shared/Text';
import CircleIcon from 'components/shared/CircleIcon';

import { StyledImage, StyledTitle, IconsContainer } from './styles';

const Intro: React.FC = () => {
	const openNewTab = (url: string): any => {
		return window.open(url, '_blank');
	};

	return (
		<Container style={{ marginTop: '100px' }}>
			<CenterComponent>
				<StyledImage
					src="/static/images/profileImg.jpg"
					alt="Vitor Martins profile photo"
					width={150}
					height={150}
				/>
				<StyledTitle>Vitor Martins</StyledTitle>
				<Divider width={35} />
				<Text style={{ width: '40%' }}>
					Hey I’m Vitor and I'm a Software Engineer.
				</Text>
				<Divider width={25} />
				{/* TODO: Redesign this buttons */}
				{/* <ButtonContainer>
					<Button type="pill" outlined>
						About
					</Button>
					<Button type="pill" outlined>
						Projects
					</Button>
					<Button type="pill" outlined>
						Contact
					</Button>
				</ButtonContainer> */}
				<IconsContainer>
					<CircleIcon
						onClick={() =>
							openNewTab('https://www.linkedin.com/in/martinsvitor/')
						}
						icon={faLinkedinIn}
						color="#fff"
					/>
					<CircleIcon
						onClick={() => openNewTab('https://github.com/mrtins')}
						icon={faGithub}
						color="#fff"
					/>
					<CircleIcon
						onClick={() => openNewTab('https://twitter.com/mrtinsvitor')}
						icon={faTwitter}
						color="#fff"
					/>
					<CircleIcon
						onClick={() => openNewTab('mailto:vitorfigmartins@gmail.com')}
						icon={faEnvelope}
						color="#fff"
					/>
				</IconsContainer>
			</CenterComponent>
		</Container>
	);
};

export default Intro;
