'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

import { Roboto } from 'next/font/google'

const roboto = Roboto({
	weight: ['400', '700'],
	subsets: ['latin'],
	display: 'swap',
})

import styles from './Header.module.scss'

export default function Header({ searchParams }) {
	const router = useRouter()
	return (
		<div className='responsiveWrapper'>
			<div
				style={{
					display: 'flex',
					justifyContent: 'space-between',
					alignItems: 'center',
					width: '100%',
					// border: '1px solid red',
					marginBottom: '20px'
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
		</div>
	)
}
