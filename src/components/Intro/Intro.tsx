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
		<Container style={{ marginTop: '0' }}>
			<CenterComponent>
				<>
					<StyledImage
						src="/static/images/profileImg.jpg"
						alt="Vitor Martins profile photo"
						width={150}
						height={150}
					/>
					<StyledTitle>Vitor Martins</StyledTitle>
					<Text style={{ width: '40%' }}>Software Developer</Text>
					<Divider width={35} />
				</>
				{socialDataList && (
					<>
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
