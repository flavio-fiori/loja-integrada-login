import styled from 'styled-components';

export const Button = styled.button`
	width: 100%;
	height: 3.5rem;
	font-size: 1.25rem;
	text-transform: uppercase;
	font-weight: bold;
	background-color: ${({ theme }) => theme.palette.primary};
	color: ${({ theme }) => theme.palette.text};
	border-radius: ${({ theme }) => theme.borderRadius};
	transition: filter 0.7s ease-in-out;
	margin-top: 2rem;
	&:hover {
		filter: brightness(75%);
	}
	&:disabled {
		background-color: lightgray;
		cursor: not-allowed;
	}
`;
