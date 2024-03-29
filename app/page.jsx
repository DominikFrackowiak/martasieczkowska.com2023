import Navigation from './components/Navigation'
import Thumbnails from './components/Thumbnails'

import About from './components/About'

import Image from 'next/image'

import styles from './page.module.scss'

export default function Home({ searchParams }) {
 
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
