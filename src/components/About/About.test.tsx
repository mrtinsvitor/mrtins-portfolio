import '@testing-library/jest-dom';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { ISkill } from 'data/skills';
import About from '.';

describe('AboutComponent', () => {
	it('should renders without crashing', () => {
		render(<About />);
	});

	it('should renders skill list with skills data correctly', async () => {
		const mockData: ISkill[] = [
			{
				name: 'Javascript',
				years: 4,
				img: '/static/images/skills/javascript.svg',
				url: 'https://www.javascript.com/',
			},
		];

		render(<About skillDataList={mockData} />);

		fireEvent.mouseOver(screen.getByTestId('skill-overlay'));
		const skillYears = await waitFor(() => screen.getByTestId('skill-tooltip'));
		const image = screen.getByRole('img');
		const skillUrl = screen.getAllByRole('link')[0];

		expect(skillYears.textContent).toBe(
			`${mockData[0].name} - ${mockData[0].years.toString()} years`
		);
		expect(screen.getAllByRole('listitem').length).toBe(mockData.length);
		expect(image).toHaveAttribute('alt', mockData[0].name);
		expect(skillUrl).toHaveAttribute('href', mockData[0].url);
		expect(skillUrl).toHaveAttribute('target', '_blank');
	});
});
