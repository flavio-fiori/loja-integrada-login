import { ThemeProvider } from 'styled-components';
import { ApolloProvider } from '@apollo/client';
import { ToastContainer } from 'react-toastify';

import Login from './components/pages/Login';
import GlobalStyle from './styles/reset';
import { theme } from './styles/theme';
import { client } from 'graphql/apollo';

import 'react-toastify/dist/ReactToastify.css';

function App() {
	return (
		<ApolloProvider client={client}>
			<ThemeProvider theme={theme}>
				<ToastContainer />
				<GlobalStyle />
				<Login />
			</ThemeProvider>
		</ApolloProvider>
	);
}

export default App;
