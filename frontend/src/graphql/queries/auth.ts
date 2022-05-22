import { gql } from '@apollo/client';

export const QUERY_AUTH = gql`
	query ($password: String!, $email: String!) {
		auth(password: $password, email: $email)
	}
`;
