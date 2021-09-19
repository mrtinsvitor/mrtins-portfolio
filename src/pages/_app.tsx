import 'bootstrap/dist/css/bootstrap.min.css';
import 'styles/globals.css';
import 'styles/main.css';
import type { AppProps } from 'next/app';
import React from 'react';

import Layout from 'components/Layout';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Layout pageInfo={{ pageName: 'index' }}>
			<Component {...pageProps} />
		</Layout>
	);
}
export default MyApp;
