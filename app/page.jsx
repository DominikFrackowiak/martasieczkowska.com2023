import { Suspense } from 'react'
import Header from './components/Header'
import Thumbnails from './components/Thumbnails'
import Loading from './loading'

import About from './components/About'

import Image from 'next/image'

import styles from './page.module.scss'

export default function Home({ searchParams }) {
	const category = searchParams.category

	return (
		<>
			{/* <Header searchParams={searchParams} /> */}
			<div className='responsiveWrapper'>
				<Suspense fallback={<Loading />}>
					{searchParams.about === 'true' && <About />}
				</Suspense>
			</div>
			{/* <main className={styles.main}></main> */}
			<Suspense fallback={<Loading />}>
				<Thumbnails category={category} />
			</Suspense>
		</>
	)
}
