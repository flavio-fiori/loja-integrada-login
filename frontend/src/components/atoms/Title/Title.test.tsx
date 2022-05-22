import { render, screen } from '@testing-library/react';
import Title from '.';

describe('<Title />', () => {
	it('should render the component correctly', () => {
		render(<Title>unknown text</Title>);
		const element = screen.getByTestId('title');
		expect(element).toBeInTheDocument();
		expect(element).toHaveTextContent('unknown text');
	});
	it('should not render when not passed children', () => {
		// @ts-ignore
		render(<Title />);
		const element = screen.queryByTestId('title');
		expect(element).not.toBeInTheDocument();
	});
});
