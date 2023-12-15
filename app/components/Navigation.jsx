'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

import styles from './Navigation.module.scss'

export default function Navigation() {
	const router = useRouter()
	return (
		<div className='responsiveWrapper'>
			<div style={{}}>
				<Link href='/'>
					<Image
						src={'/assets/logo_marta_big.svg'}
						width={145}
						height={95}
						alt='Marta Sieczkowska logo'
					/>
				</Link>
				<div className={styles.navigationMenu}>
					{/* <Link href={'/?category=graphic-design'}>graphic design</Link>
					<Link href={'/?category=illustration'}>illustration</Link>
					<Link href='/#about'>about</Link> */}
					<p
						onClick={() => {
							router.push('/?category=graphic-design')
							router.refresh()
						}}
					>
						graphic design
					</p>
					<p
						onClick={() => {
							router.push('/?category=illustration')
							router.refresh()
						}}
					>
						illustration
					</p>
					<p onClick={() => router.push('/#about')}>about</p>
				</div>
			</div>
		</div>
	)
}
