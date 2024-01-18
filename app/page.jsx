import Navigation from './components/NavigationDesktop'
import NavigationMobile from './components/NavigationMobile'
import Thumbnails from './components/Thumbnails'

import About from './components/About'



import styles from './page.module.scss'

export default function Home({ searchParams }) {
	return (
		<>
			<NavigationMobile searchParams={searchParams} />
			<Navigation searchParams={searchParams} />
			<div className='responsiveWrapper'>
				{searchParams.about === 'true' && <About />}
			</div>
			<main className={styles.main}></main>
			<Thumbnails category={searchParams.category} />
		</>
	)
}
