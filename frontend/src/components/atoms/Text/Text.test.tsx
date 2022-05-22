import { render, screen } from '@testing-library/react';
import Text from '.';

describe('<Text />', () => {
	it('should render the component correctly', () => {
		render(<Text>unknown text</Text>);
		const element = screen.getByTestId('text');
		expect(element).toBeInTheDocument();
		expect(element).toHaveTextContent('unknown text');
	});
	it('should not render when not passed children', () => {
		// @ts-ignore
		render(<Text />);
		const element = screen.queryByTestId('text');
		expect(element).not.toBeInTheDocument();
	});
});
