import { Suspense } from 'react'

import Thumbnails from './components/Thumbnails'
import Loading from './loading'

export default function Home({ searchParams }) {
	const category = searchParams.category

	return (
		<>
			<Suspense fallback={<Loading />}>
				<Thumbnails category={category} />
			</Suspense>
		</>
	)
}
