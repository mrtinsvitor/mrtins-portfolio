import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { ISocial } from 'data/socials';
import Intro from '.';

describe('IntroComponent', () => {
	it('should renders without crashing', () => {
		render(<Intro />);
	});

	it('should renders social contacts list with data correctly', async () => {
		const mockData: ISocial[] = [
			{
				id: 1,
				url: 'https://www.linkedin.com/in/martinsvitor',
				icon: faLinkedinIn,
			},
		];

		render(<Intro socialDataList={mockData} />);
		const socialUrl = screen.getAllByRole('link')[0];

		expect(screen.getAllByRole('listitem').length).toBe(mockData.length);
		expect(socialUrl).toHaveAttribute('href', mockData[0].url);
		expect(socialUrl).toHaveAttribute('target', '_blank');
	});
});
