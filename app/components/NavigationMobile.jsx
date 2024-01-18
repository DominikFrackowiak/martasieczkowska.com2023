'use client' 
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

import { Roboto } from 'next/font/google'

const roboto = Roboto({
	weight: ['400', '700'],
	subsets: ['latin'],
	display: 'swap',
})

import styles from './NavigationMobile.module.scss'

export default function NavigationMobile({ searchParams }) {
 const [state, setState] = useState(false)
	return (
		<header className={styles.headerMobile}>
			<div className='responsiveWrapper'>
				<nav
					style={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						width: '100%',
						border: '1px solid red',
					}}
				>
					<motion.div
						// initial={{ opacity: 0, x: '-100vw' }}
						// animate={{ opacity: 1, x: 0 }}
						// exit={{ opacity: 0, x: '100vw' }}
						key={state}
						initial='hide'
						animate={'show'}
						className={styles.navigationMenu}
					>
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
					</motion.div>
					<p className={roboto.className} style={{ cursor: 'pointer' }}>
						MENU
					</p>
					<Link href='/' style={{ width: '20%' }}>
						<Image
							src={'/assets/logo_marta_big.svg'}
							width={145}
							height={95}
							alt='Marta Sieczkowska logo'
							style={{ width: '100%' }}
						/>
					</Link>
				</nav>
			</div>
		</header>
	)
}
