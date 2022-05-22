import { render, screen } from '@testing-library/react';
import Button from '.';

describe('<Button />', () => {
	it('should render the component correctly', () => {
		render(<Button>unknown text</Button>);
		const element = screen.getByTestId('button');
		expect(element).toBeInTheDocument();
		expect(element).toHaveTextContent('unknown text');
	});
	it('should not render when not passed children', () => {
		// @ts-ignore
		render(<Button />);
		const element = screen.queryByTestId('button');
		expect(element).not.toBeInTheDocument();
	});
});
