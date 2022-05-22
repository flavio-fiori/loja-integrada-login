import styled from 'styled-components';

import bg from '../../../images/background.jpg';

export const Container = styled.section`
	width: 100%;
	height: 100vh;
	display: flex;
	@media (max-width: 47.9375rem) {
		flex-direction: column;
	}
`;

export const Background = styled.section`
	width: 65%;
	height: 100vh;
	background-image: url(${bg});
	background-position: left center;
	position: relative;
	background-size: cover;
	&::before {
		content: '';
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
		background-color: rgba(26, 32, 44, 0.7);
	}
	@media (max-width: 67.5rem) {
		width: 50%;
	}
	@media (max-width: 47.9375rem) {
		width: 100%;
		height: 10rem;
		background-position: center center;
	}
`;

export const Main = styled.main`
	width: 35%;
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	@media (max-width: 67.5rem) {
		width: 50%;
	}
	@media (max-width: 47.9375rem) {
		width: 100%;
		height: auto;
		padding: 4rem 0;
	}
`;

export const Info = styled.div`
	width: 100%;
	margin: auto;
	padding: 0 2rem;
	max-width: 30rem;
	@media (max-width: 87.5rem) {
		max-width: 24rem;
	}
`;
