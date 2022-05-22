import styled from 'styled-components';

export const Button = styled.button`
	width: 2rem;
	height: 2rem;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 100%;
	background-color: transparent;
	border: 0.125rem solid ${({ theme }) => theme.palette.primary};
	margin: 0 0.25rem;
	& > svg {
		color: ${({ theme }) => theme.palette.primary};
	}
`;
