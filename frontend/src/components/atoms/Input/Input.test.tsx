import { render, screen } from '@testing-library/react';
import Input from '.';

describe('<Input />', () => {
	it('should render the component correctly', () => {
		render(
			<Input
				label="unknow test"
				id="unknow"
				placeholder="unknow test"
				type="text"
				error=""
			/>,
		);

		const element = screen.getByTestId('input');
		const label = screen.getByTestId('input-label');
		const error = screen.queryByTestId('input-error');

		expect(element).toBeInTheDocument();
		expect(label).toBeInTheDocument();
		expect(label).toHaveTextContent('unknow test');
		expect(error).not.toBeInTheDocument();
	});

	it('should render the error message', () => {
		render(
			<Input
				label="unknow test"
				id="unknow"
				placeholder="unknow test"
				type="text"
				error="user invalid"
			/>,
		);

		const element = screen.queryByTestId('input-error');

		expect(element).toBeInTheDocument();
		expect(element).toHaveTextContent('user invalid');
	});
});
