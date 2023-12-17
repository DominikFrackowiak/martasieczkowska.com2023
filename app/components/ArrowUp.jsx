'use client'

export default function ArrowUp() {
	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		})
	}
	return <div onClick={scrollToTop}>Up</div>
}
