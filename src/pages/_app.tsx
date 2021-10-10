import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from 'components/Layout';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import 'styles/globals.css';
import 'styles/main.css';
import * as gtag from '../../lib/gtag';

function MyApp({ Component, pageProps }: AppProps) {
	const router = useRouter();
	useEffect(() => {
		const handleRouteChange = (url: string) => {
			gtag.pageview(url);
		};
		router.events.on('routeChangeComplete', handleRouteChange);
		return () => {
			router.events.off('routeChangeComplete', handleRouteChange);
		};
	}, [router.events]);

	return (
		<Layout pageInfo={{ pageName: 'index' }}>
			<Component {...pageProps} />
		</Layout>
	);
}
export default MyApp;
