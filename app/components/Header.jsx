'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useRouter, usePathname } from 'next/navigation'
import { motion } from 'framer-motion'

import { Roboto } from 'next/font/google'

const roboto = Roboto({
	weight: ['400', '700'],
	subsets: ['latin'],
	display: 'swap',
})

import styles from './Header.module.scss'

export default function Header({ searchParams }) {
	const router = useRouter()
	const pathname = usePathname()

	console.log(pathname)
	return (
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
							if (searchParams.category !== 'graphic-design') {
								router.push('/?category=graphic-design')
							} else {
								router.push('/')
							}
							router.refresh()
						}}
						style={{
							fontWeight:
								searchParams.category !== 'graphic-design' ? 'normal' : 'bold',
						}}
					>
						graphic design
					</p>
					<p
						className={roboto.className}
						onClick={() => {
							if (searchParams.category !== 'illustration') {
								router.push('/?category=illustration')
							} else {
								router.push('/')
							}
							router.refresh()
						}}
						style={{
							fontWeight:
								searchParams.category !== 'illustration' ? 'normal' : 'bold',
						}}
					>
						illustration
					</p>
					<p
						className={roboto.className}
						onClick={() => {
							if (searchParams.about !== 'true') {
								router.push('/?about=true')
							} else {
								router.push('/')
							}
							router.refresh()
						}}
						style={{
							fontWeight: searchParams.about !== 'true' ? 'normal' : 'bold',
						}}
					>
						about
					</p>
				</nav>
			</div>
			<div className={styles.mobileHeader}>
				{searchParams.menu === 'true' && (
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
									if (searchParams.category !== 'graphic-design') {
										router.push('/?category=graphic-design')
									} else {
										router.push('/')
									}
									router.refresh()
								}}
								style={{
									fontWeight:
										searchParams.category !== 'graphic-design'
											? 'normal'
											: 'bold',
								}}
							>
								graphic design
							</p>
							<p
								className={roboto.className}
								onClick={() => {
									if (searchParams.category !== 'illustration') {
										router.push('/?category=illustration')
									} else {
										router.push('/')
									}
									router.refresh()
								}}
								style={{
									fontWeight:
										searchParams.category !== 'illustration'
											? 'normal'
											: 'bold',
								}}
							>
								illustration
							</p>
							<p
								className={roboto.className}
								onClick={() => {
									if (searchParams.about !== 'true') {
										router.push('/?about=true')
									} else {
										router.push('/')
									}
									router.refresh()
								}}
								style={{
									fontWeight: searchParams.about !== 'true' ? 'normal' : 'bold',
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
						style={{ padding: '15px 0', letterSpacing: '3px', cursor: 'pointer' }}
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
	)
}
