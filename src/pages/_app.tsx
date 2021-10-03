import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from 'components/Layout';
import type { AppProps } from 'next/app';
import React from 'react';
import 'styles/globals.css';
import 'styles/main.css';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Layout pageInfo={{ pageName: 'index' }}>
			<Component {...pageProps} />
		</Layout>
	);
}
export default MyApp;
