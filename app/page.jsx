import Navigation from './components/Navigation'
import Thumbnails from './components/Thumbnails'

import styles from './page.module.css'

export default function Home({ searchParams }) {
	return (
		<>
			<Navigation />
			<main className={styles.main}></main>
			<Thumbnails category={searchParams.category} />
		</>
	)
}
