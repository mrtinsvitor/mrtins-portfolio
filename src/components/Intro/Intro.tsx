import CenterComponent from 'components/shared/CenterComponent';
import CircleIcon from 'components/shared/CircleIcon';
import Divider from 'components/shared/Divider';
import Text from 'components/shared/Text';
import { ISocial } from 'data/socials';
import React from 'react';
import Container from 'react-bootstrap/Container';
import profileImg from '../../../public/static/images/profileImg.jpg';
import { IconsContainer, StyledImage, StyledTitle } from './styles';

interface IProps {
	socialDataList?: ISocial[];
}

const Intro: React.FC<IProps> = ({ socialDataList }) => (
	<Container style={{ marginTop: '0' }}>
		<CenterComponent>
			<>
				<StyledImage
					src={
						profileImg
							? profileImg
							: '/static/images/profileImg.jpg'
					}
					alt="Vitor Martins profile photo"
					width={150}
					height={150}
					placeholder="blur"
          blurDataURL="/static/images/profileImg.jpg"
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
									href={social.url}
									target="_blank"
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

export default Intro;
