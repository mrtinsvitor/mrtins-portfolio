import React, { ReactNode } from 'react';
import { Container } from 'react-bootstrap';
import Navbar from '../Navbar';
import { StyledCopyright, StyledFooter } from './styles';

interface IProps {
	children: ReactNode;
	pageInfo: { pageName: string };
}

const Layout: React.FC<IProps> = ({ children, pageInfo }) => (
	<>
		<Container fluid>
			<Navbar pageInfo={pageInfo} />
			{/* <Row>
				<Col> */}
			<main>
				<Container className="mt-5">{children}</Container>
			</main>
			{/* </Col>
			</Row> */}
		</Container>
		<StyledFooter>
			<StyledCopyright>Vitor Martins ©2021</StyledCopyright>
		</StyledFooter>
	</>
);

export default Layout;
