'use client'

import { Suspense } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter, usePathname, useSearchParams } from 'next/navigation'
import { motion } from 'framer-motion'

import Loading from '../loading'

import { Roboto } from 'next/font/google'

const roboto = Roboto({
	weight: ['400', '700'],
	subsets: ['latin'],
	display: 'swap',
})

import styles from './Header.module.scss'

export default function Header() {
	const router = useRouter()
	const pathname = usePathname()
 const searchParams = useSearchParams() 

	const category = searchParams.get('category')
	const about = searchParams.get('about')


	// console.log(pathname)
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<header className='responsiveWrapper'>
				<div
					style={{
						justifyContent: 'space-between',
						alignItems: 'center',
						width: '100%',
						// border: '1px solid red',
						marginBottom: '20px',
					}}
					className={styles.headerDesktop}
				>
					<Link href='/'>
						<Image
							src={'/assets/logo_marta_big.svg'}
							width={145}
							height={95}
							alt='Marta Sieczkowska logo'
						/>
					</Link>

					<nav className={styles.navigationMenu}>
						{/* <Link href={'/?category=graphic-design'}>graphic design</Link>
					<Link href={'/?category=illustration'}>illustration</Link>
					<Link href='/#about'>about</Link> */}

						<p
							className={roboto.className}
							onClick={() => {
								if (category !== 'graphic-design') {
									router.push('/?category=graphic-design')
								} else {
									router.push('/')
								}
								router.refresh()
							}}
							style={{
								fontWeight: category !== 'graphic-design' ? 'normal' : 'bold',
							}}
						>
							graphic design
						</p>
						<p
							className={roboto.className}
							onClick={() => {
								if (category !== 'illustration') {
									router.push('/?category=illustration')
								} else {
									router.push('/')
								}
								router.refresh()
							}}
							style={{
								fontWeight: category !== 'illustration' ? 'normal' : 'bold',
							}}
						>
							illustration
						</p>
						<p
							className={roboto.className}
							onClick={() => {
								if (about !== 'true') {
									router.push('/?about=true')
								} else {
									router.push('/')
								}
								router.refresh()
							}}
							style={{
								fontWeight: about !== 'true' ? 'normal' : 'bold',
							}}
						>
							about
						</p>
					</nav>
				</div>
				<div className={styles.mobileHeader}>
					{searchParams?.menu === 'true' && (
						<motion.div
							initial={{ opacity: 0, y: '100%', zIndex: 0 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: '100%', zIndex: 1 }}
							transition={{ delay: 0.5, duration: 0.7 }}
						>
							<nav className={styles.mobileNavigationMenu}>
								<p
									className={roboto.className}
									onClick={() => {
										if (category !== 'graphic-design') {
											router.push('/?category=graphic-design')
										} else {
											router.push('/')
										}
										router.refresh()
									}}
									style={{
										fontWeight:
											category !== 'graphic-design' ? 'normal' : 'bold',
									}}
								>
									graphic design
								</p>
								<p
									className={roboto.className}
									onClick={() => {
										if (category !== 'illustration') {
											router.push('/?category=illustration')
										} else {
											router.push('/')
										}
										router.refresh()
									}}
									style={{
										fontWeight: category !== 'illustration' ? 'normal' : 'bold',
									}}
								>
									illustration
								</p>
								<p
									className={roboto.className}
									onClick={() => {
										if (about !== 'true') {
											router.push('/?about=true')
										} else {
											router.push('/')
										}
										router.refresh()
									}}
									style={{
										fontWeight: about !== 'true' ? 'normal' : 'bold',
									}}
								>
									about
								</p>
							</nav>
						</motion.div>
					)}
					<div
						style={{
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'space-around',
							alignItems: 'center',
							width: '100%',
							backgroundColor: '#fff',
							zIndex: '400',
						}}
					>
						<p
							className={roboto.className}
							onClick={() => {
								if (searchParams.menu !== 'true') {
									router.push('/?menu=true')
								} else {
									router.push('/')
								}
								router.refresh()
							}}
							style={{
								padding: '15px 0',
								letterSpacing: '3px',
								cursor: 'pointer',
							}}
						>
							MENU
						</p>

						<Link href='/'>
							<Image
								src={'/assets/logo_marta_big.svg'}
								width={145}
								height={95}
								alt='Marta Sieczkowska logo'
								className={styles.mobileLogo}
							/>
						</Link>
					</div>
				</div>
			</header>
		</Suspense>
	)
}
