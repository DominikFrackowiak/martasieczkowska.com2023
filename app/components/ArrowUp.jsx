'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import styles from './ArrowUp.module.scss'

export default function ArrowUp({ smallerDevices }) {
	const [positionY, setPositionY] = useState(0)
	const [isVisible, setIsVisible] = useState(false)

	useEffect(() => {
		const updatePosition = () => {
			const position = (window.innerWidth - 1100) / 2
			setPositionY(position)
		}

		const toggleVisibility = () => {
			if (window.scrollY > 500) {
				setIsVisible(true)
			} else {
				setIsVisible(false)
			}
		}

		window.addEventListener('scroll', toggleVisibility)

		updatePosition()
		window.addEventListener('resize', updatePosition)
		return () => {
			window.removeEventListener('scroll', toggleVisibility)
			window.removeEventListener('resize', updatePosition)
		}
	}, [])

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		})
	}

	return (
		<div
			role='button'
			aria-label='Scroll to the top of the page'
			className={`${styles.arrowWrapper} ${
				smallerDevices ? styles.smallerDevices : styles.biggestDevices
			}`}
			style={{
				right: `${positionY}px`,
				visibility: isVisible ? 'visible' : 'hidden',
			}}
			onClick={scrollToTop}
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
