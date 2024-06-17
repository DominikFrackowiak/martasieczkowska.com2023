'use client'

import { Suspense, useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useSearchParams, useRouter } from 'next/navigation'

import NavLink from './NavLink'

import { Roboto } from 'next/font/google'

import styles from './Header.module.scss'

const roboto = Roboto({
	weight: ['400', '700'],
	subsets: ['latin'],
	display: 'swap',
})

import navLinks from '../../constants/navigationConstants'

export default function Header() {
	const menu = useSearchParams().get('menu')
	const router = useRouter()
	const [isOpaque, setIsOpaque] = useState(0)

	useEffect(() => {
		menu !== null ? setTimeout(() => setIsOpaque(1), 100) : setIsOpaque(0)
	}, [menu])

	return (
		<Suspense fallback={<div>Loading...</div>}>
			<header className='responsiveWrapper'>
				<div className={styles.headerDesktop}>
					<Link href='/'>
						<Image
							src={'/assets/logo_marta_big.svg'}
							width={145}
							height={95}
							alt='Marta Sieczkowska logo'
						/>
					</Link>

					<nav className={styles.navigationMenu}>
						{navLinks.map(link => (
							<NavLink
								key={link.category}
								category={link.category}
								text={link.text}
								queryKey={link.queryKey}
								queryValue={link.queryValue}
							/>
						))}
					</nav>
				</div>
				<div className={styles.mobileHeader}>
					{menu === 'true' && (
						<nav className={styles.mobileNavigationMenu}>
							{navLinks.map((link, index) => (
								<NavLink
									key={link.category}
									category={link.category}
									text={link.text}
									queryKey={link.queryKey}
									queryValue={link.queryValue}
									styles={{
										transition: '.3s',
										transitionDelay: `${index * 0.2}s`,
										opacity: isOpaque,
										cursor: 'pointer',
									}}
								/>
							))}
						</nav>
					)}
					<div className={styles.mobileLogoContainer}>
						<button
							className={roboto.className}
							onClick={() => {
								router.push(menu !== 'true' ? '/?menu=true' : '/')
								router.refresh()
							}}
							style={{
								padding: '15px 0',
								letterSpacing: '3px',
								cursor: 'pointer',
							}}
						>
							MENU
						</button>
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
