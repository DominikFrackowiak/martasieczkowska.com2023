import { Suspense } from 'react'
import Header from './components/Header'
import Thumbnails from './components/Thumbnails'
import Loading from './loading'



export default function Home({ searchParams }) {
	const category = searchParams.category


	return (
		<>
			{/* <Header searchParams={searchParams} /> */}
			{/* <div className='responsiveWrapper'>
			
			</div> */}
			{/* <main className={styles.main}></main> */}
			<Suspense fallback={<Loading />}>
				<Thumbnails category={category} />
			</Suspense>
		</>
	)
}
