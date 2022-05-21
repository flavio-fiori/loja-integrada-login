import styled from 'styled-components';

export const Container = styled.div`
	margin-top: 2rem;
	text-align: center;
	border-top: 0.0625rem solid ${({ theme }) => theme.palette.text};
	padding-top: 1rem;
`;
