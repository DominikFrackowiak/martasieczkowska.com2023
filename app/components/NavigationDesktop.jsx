import Link from 'next/link'
import Image from 'next/image'

import { Roboto } from 'next/font/google'

const roboto = Roboto({
	weight: ['400', '700'],
	subsets: ['latin'],
	display: 'swap',
})

import styles from './NavigationDesktop.module.scss'

export default function NavigationDesktop({ searchParams }) {
	return (
		<header className={styles.headerDesktop}>
			<div className='responsiveWrapper'>
				<nav
					style={{
						display: 'flex',
						justifyContent: 'space-between',
						alignItems: 'center',
						width: '100%',
					}}
				>
					<Link href='/'>
						<Image
							src={'/assets/logo_marta_big.svg'}
							width={145}
							height={95}
							alt='Marta Sieczkowska logo'
						/>
					</Link>
					<div className={styles.navigationMenu}>
						<Link
							className={roboto.className}
							href={
								searchParams.category !== 'graphic-design'
									? '/?category=graphic-design'
									: '/'
							}
							style={{
								fontWeight:
									searchParams.category !== 'graphic-design'
										? 'normal'
										: 'bold',
							}}
						>
							graphic design
						</Link>
						<Link
							className={roboto.className}
							href={
								searchParams.category !== 'illustration'
									? '/?category=illustration'
									: '/'
							}
							style={{
								fontWeight:
									searchParams.category !== 'illustration' ? 'normal' : 'bold',
							}}
						>
							illustration
						</Link>
						<Link
							className={roboto.className}
							href={searchParams.about !== 'true' ? '/?about=true' : '/'}
							style={{
								fontWeight: searchParams.about !== 'true' ? 'normal' : 'bold',
							}}
						>
							about
						</Link>
					</div>
				</nav>
			</div>
		</header>
	)
}
