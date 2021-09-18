import 'tailwindcss/tailwind.css';
import Head from 'next/head';

// Components
import Layout from '../components/Layout';

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
				<meta http-equiv="X-UA-Compatible" content="IE=edge" />
				<title>J&L Personal Therapy | Counselling</title>
				<meta
					name="keywords"
					content="psychotherapy newquay,counselling newquay,counselling cornwall,therapy cornwall,psychotherapist mid cornwall,counselling,counsellor,psychotherapy,psychotherapist,therapy,therapist,depression,relationship,anxiety,bereavement,eating disorders,truro,mid cornwall,redruth,camborne"
				/>
				<meta
					name="description"
					content="Personal therapy based in Newquay, Cornwall. Online counselling with experienced psychotherapists Jen Schaub and Lorna Sandry."
				/>
				<meta property="og:image" content="" />
				<meta property="og:url" content="" />
				<meta
					property="og:title"
					content="J&L Personal Therapy | Counselling"
				/>
				<meta property="og:description" content="" />
				<meta property="og:type" content="website" />
				<meta property="og:site_name" content="J&LPersonalTherapy" />
				<meta property="og:locale" content="en_GB" />
				<link rel="canonical" href="https://jlpersonaltherapy.co.uk/" />
			</Head>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</>
	);
}

export default MyApp;
