import { useState, useEffect } from 'react'

function useWindowWidth() {
	const [windowWidth, setWindowWidth] = useState('')

	useEffect(() => {
		const handleResize = () => setWindowWidth(window.innerWidth)
		window.addEventListener('resize', handleResize)
		handleResize() // Initialize width

		return () => {
			window.removeEventListener('resize', handleResize)
		}
	}, [])

	return windowWidth
}

export default useWindowWidth
