import { render, screen } from '@testing-library/react';
import SocialButton from '.';

describe('<SocialButton />', () => {
	it('should render the component correctly', () => {
		render(<SocialButton>unknown text</SocialButton>);
		const element = screen.getByTestId('social-button');
		expect(element).toBeInTheDocument();
		expect(element).toHaveTextContent('unknown text');
	});
	it('should not render when not passed children', () => {
		// @ts-ignore
		render(<SocialButton />);
		const element = screen.queryByTestId('social-button');
		expect(element).not.toBeInTheDocument();
	});
});
