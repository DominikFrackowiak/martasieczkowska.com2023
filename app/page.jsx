import { Suspense } from 'react'

import Thumbnails from './components/Thumbnails'
import Loading from './loading'

export default function Home({ searchParams }) {
	const category = searchParams.category

	return (
		<main>
			<Suspense fallback={<Loading />}>
				<Thumbnails category={category} />
			</Suspense>
		</main>
	)
}
