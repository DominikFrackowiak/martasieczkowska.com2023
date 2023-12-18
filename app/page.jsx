import Navigation from './components/Navigation'
import Thumbnails from './components/Thumbnails'

import About from './components/About'

import Image from 'next/image'

import styles from './page.module.css'

export default function Home({ searchParams }) {
	console.log(searchParams.about)
	return (
		<>
			<Navigation searchParams={searchParams} />
			<div className='responsiveWrapper'>
				{searchParams.about==='true' && <About/>}
			</div>
			<main className={styles.main}></main>
			<Thumbnails category={searchParams.category} />
		</>
	)
}
