import Header from './components/Header'
import Thumbnails from './components/Thumbnails'

import About from './components/About'

import Image from 'next/image'

import styles from './page.module.scss'

export default function Home({ searchParams }) {
 
	return (
		<>
			<Header searchParams={searchParams} />
			<div className='responsiveWrapper'>
				{searchParams.about==='true' && <About/>}
			</div>
			<main className={styles.main}></main>
			<Thumbnails category={searchParams.category} />
		</>
	)
}
