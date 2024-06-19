'use client'

import Image from 'next/image'
import Link from 'next/link'

import SwipeRight from './SwipeRight'
import SwipeLeft from './SwipeLeft'
import styles from './PageSwipeCloseMenu.module.scss'

export default function GallerySwipeCloseMenu({ images, index }) {
	// console.log(images, index)
	return (
		<div
			className={styles.pageSwipeCloseMenuWrapper}
			style={{ border: '1px solid red' }}
		>
			<SwipeLeft currentSlugIndex={index} allSlugs={images} />
			<Link href='/'>
				<Image
					src='/assets/back-to-main-icon.png'
					height={30}
					width={30}
					alt='icon back to main'
				/>
			</Link>
			<SwipeRight currentSlugIndex={index} allSlugs={images} />
		</div>
	)
}
