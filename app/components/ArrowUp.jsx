'use client'

import Image from "next/image"
import styles from './ArrowUp.module.scss'

export default function ArrowUp({smallerDevices}) {
	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		})
	}
	return (
		<div
			className={`${styles.arrowWrapper} ${
				smallerDevices ? styles.smallerDevices : styles.biggestDevices
			}`}
		>
			<Image
				src={'/icons/arrow.svg'}
				alt='arrow icon'
				width={35}
				height={46.6}
				className={styles.arrowIcon}
			/>
		</div>
	)
}
