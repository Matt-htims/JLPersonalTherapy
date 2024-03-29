import 'tailwindcss/tailwind.css';
import Head from 'next/head';

// Components
import Layout from '../components/Layout';

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
				<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
				<title>JL Therapy | Counselling &amp; Psychotherapy</title>
				<meta
					name="keywords"
					content="psychotherapy newquay,counselling newquay,counselling cornwall,therapy cornwall,psychotherapist mid cornwall,counselling,counsellor,psychotherapy,psychotherapist,therapy,therapist,depression,relationship,anxiety,bereavement,eating disorders,truro,mid cornwall,redruth,camborne"
				/>
				<meta
					name="description"
					content="Personal therapy based in Newquay, Cornwall. Online counselling with experienced psychotherapist Jen Schaub."
				/>
				<meta property="og:image" content="https://www.jltherapy.uk/Help.png" />
				<meta property="og:url" content="https://www.jltherapy.uk" />
				<meta
					property="og:title"
					content="JL Therapy | Counselling &amp; Psychotherapy"
				/>
				<meta
					property="og:description"
					content="Personal therapy based in Newquay, Cornwall. Online counselling with experienced psychotherapist Jen Schaub."
				/>
				<meta property="og:type" content="website" />
				<meta property="og:site_name" content="jltherapy" />
				<meta property="og:locale" content="en_GB" />
			</Head>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</>
	);
}

export default MyApp;
