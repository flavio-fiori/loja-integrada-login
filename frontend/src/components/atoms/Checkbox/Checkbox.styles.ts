import styled from 'styled-components';

export const Container = styled.label`
	display: flex;
	color: var(--text);
	font-size: 0.875rem;
	margin-top: 1.5rem;
	overflow: hidden;
	cursor: pointer;
`;

export const Checkbox = styled.input`
	left: -2rem;
	position: absolute;

	& + span {
		width: 0.75rem;
		height: 0.75rem;
		margin-right: 0.5rem;
		border: 1px solid var(--primary);
	}

	&:hover + span,
	&:focus + span {
		border-width: 2px;
	}

	&:checked + span {
		background-color: var(--primary);
	}
`;
