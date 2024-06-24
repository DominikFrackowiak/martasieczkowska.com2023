// import type { Metadata } from 'next'
import { Source_Serif_4 } from 'next/font/google'
import './globals.scss'

import { Suspense } from 'react'

import Header from './components/Header'
import Footer from './components/Footer'
import ResponsiveWrapper from './components/ResponsiveWrapper'

const SourceSerif = Source_Serif_4({ subsets: ['latin'] })

export const metadata = {
	title: 'Marta Sieczkowska | Illustration | Graphic design',
	description:
		'Marta Sieczkowska - graphic designer and illustrator. Specialized in editorial design, typography, educational illustration, illustration for children, press illustration, infographics, branding.',
}

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body className={SourceSerif.className}>
				<ResponsiveWrapper>
					<Suspense fallback={<p>Loading ...</p>}>
						<Header />
					</Suspense>
					{children}
					<Suspense fallback={<p>Loading ...</p>}>
						<Footer />
					</Suspense>
				</ResponsiveWrapper>
			</body>
		</html>
	)
}
