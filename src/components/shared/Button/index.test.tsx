import { render } from '@testing-library/react';
import Button from './index';

describe('Button', () => {
	it('renders without crashing', () => {
		render(<Button />);
	});
});
