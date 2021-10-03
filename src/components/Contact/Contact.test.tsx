import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { ISocial } from 'data/socials';
import Contact from '.';

describe('ContactComponent', () => {
	it('should renders without crashing', () => {
		render(<Contact />);
	});

	it('should renders social contacts list with data correctly', async () => {
		const mockData: ISocial[] = [
			{
				id: 1,
				url: 'https://www.linkedin.com/in/martinsvitor',
				icon: faLinkedinIn,
			},
		];

		render(<Contact socialDataList={mockData} />);

		expect(screen.getAllByRole('listitem').length).toBe(mockData.length);
	});
});
