import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { StyledNavbarLink } from './styles';

interface IProps {
	pageInfo: { pageName: string };
}

const CustomNavbar: React.FC<IProps> = ({ pageInfo }) => {
	return (
		<>
			<Navbar
				variant="dark"
				expand="md"
				id="site-navbar"
				style={styles.navbarBorder}
			>
				<Link href="/">
					<a>
						<Navbar.Brand as="span">
							<Image
								src="/static/images/dev-icon.svg"
								alt="Developer icon"
								width={32}
								height={32}
							/>
						</Navbar.Brand>
					</a>
				</Link>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
					<Nav className="ml-auto" activeKey={pageInfo && pageInfo.pageName}>
						<StyledNavbarLink href="#about">
							<Nav.Link as="span" className="navbar-link">
								About
							</Nav.Link>
						</StyledNavbarLink>
						<StyledNavbarLink href="#experience">
							<Nav.Link as="span" className="navbar-link">
								Experience
							</Nav.Link>
						</StyledNavbarLink>
						<StyledNavbarLink href="#contact">
							<Nav.Link as="span" className="navbar-link">
								Contact
							</Nav.Link>
						</StyledNavbarLink>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</>
	);
};

const styles = {
	navbarBorder: {
		// borderBottom: '1px solid #3282B8',
		backgroundColor: '#222831',
		padding: '.5rem 1rem',
	},
};

export default CustomNavbar;
