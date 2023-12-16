import Navigation from './components/Navigation'
import Thumbnails from './components/Thumbnails'

import Image from 'next/image'

import styles from './page.module.css'

export default function Home({ searchParams }) {
	return (
		<>
			<Navigation searchParams={searchParams} />
			<div
				id='about'
				style={{
					transform: searchParams.about
						? `translateY(0)`
						: `translateY(-100vh)`,
					transitionDuration: 300,
				}}
			>
				<h2
					style={{
						display: searchParams.about ? `block` : `none`,
						transitionDuration: 300,
					}}
				>
					About me
				</h2>
				<Image
					src='/assets/logo_marta_big.svg'
					aspectratio={400 / 300}
					width={200}
					height={150}
					alt='logo Marta Sieczkowska'
					style={{
						display: searchParams.about ? `block` : `none`,
						transitionDuration: 300,
					}}
				/>
			</div>
			<main className={styles.main}></main>
			<Thumbnails category={searchParams.category} />
		</>
	)
}
