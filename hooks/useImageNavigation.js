import { useState, useEffect } from 'react'
import { useRouter, usePathname } from 'next/navigation'

function useImageNavigation(initialIndex = -1) {
	const [clickedImageIndex, setClickedImageIndex] = useState(initialIndex)
	const router = useRouter()
	const path = usePathname()

	useEffect(() => {
		const newPath =
			clickedImageIndex >= 0 ? `${path}?imageIndex=${clickedImageIndex}` : path
		router.push(newPath)
	}, [clickedImageIndex, path, router])

	return [clickedImageIndex, setClickedImageIndex]
}

export default useImageNavigation
