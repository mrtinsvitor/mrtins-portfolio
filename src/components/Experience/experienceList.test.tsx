import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { IExperience } from 'data/experiences';
import Experience from '.';

describe('ExperienceListComponent', () => {
	it('should renders without crashing', () => {
		render(<Experience />);
	});

	it('should renders experience list with experience data correctly', () => {
		const mockData: IExperience[] = [
			{
				id: 1,
				companyName: 'Test company',
				period: 'January, 2020 - January, 2021',
				place: 'Rio de Janeiro, Brazil',
				description: 'Test company description',
				skills: 'Unit Testing, Jest, React',
			},
		];

		render(<Experience experienceDataList={mockData} />);

		const experienceList = screen.getAllByRole('listitem');
		// const companyName = screen.getByRole('heading', { level: 4 });
		const companyName = screen.getByTestId('company-name');
		const period = screen.getByTestId('period');
		const place = screen.getByTestId('place');
		const description = screen.getByTestId('description');
		const skills = screen.getByTestId('skills');

		expect(experienceList.length).toBe(mockData.length);
		expect(companyName).toHaveTextContent(mockData[0].companyName);
		expect(period).toHaveTextContent(mockData[0].period);
		expect(place).toHaveTextContent(mockData[0].place);
		expect(description).toHaveTextContent(mockData[0].description);
		expect(skills).toHaveTextContent(mockData[0].skills);
	});
});
