import {
	faGithub,
	faLinkedinIn,
	faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import CenterComponent from 'components/shared/CenterComponent';
import CircleIcon from 'components/shared/CircleIcon';
import Divider from 'components/shared/Divider';
import Text from 'components/shared/Text';
import { ISocial } from 'data/socials';
import React from 'react';
import Container from 'react-bootstrap/Container';
import { IconsContainer, StyledImage, StyledTitle } from './styles';

interface IProps {
	socialDataList?: ISocial[];
}

const Intro: React.FC<IProps> = ({ socialDataList }) => {
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
				{socialDataList && (
					<>
						<Divider width={25} />
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
					</>
				)}
			</CenterComponent>
		</Container>
	);
};

export default Intro;
