import { render, screen } from '@testing-library/react';
import Checkbox from '.';

describe('<Checkbox />', () => {
	it('should render the component correctly', () => {
		render(<Checkbox label="unknow test" id="unknow" />);
		const element = screen.getByTestId('checkbox');
		expect(element).toBeInTheDocument();
		expect(element).toHaveTextContent('unknow test');
	});
});
