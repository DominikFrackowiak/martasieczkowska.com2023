import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'

import { Roboto } from 'next/font/google'

const roboto = Roboto({
	weight: ['400', '700'],
	subsets: ['latin'],
	display: 'swap',
})

export default function NavLink({
	category,
	text,
	queryKey,
	queryValue,
	styles,
}) {
	// const router = useRouter()
	const searchParams = useSearchParams()
	const isActive = searchParams.get(queryKey) === queryValue

	// const handleClick = () => {
	// 	router.push(isActive ? '/' : `/?${queryKey}=${queryValue}`)
	// 	router.refresh()
	// }

	return (
		<Link
			href={isActive ? '/' : `/?${queryKey}=${queryValue}`}
			style={{ display: 'flex' }}
		>
			<button
				className={roboto.className}
				// onClick={handleClick}
				style={{ fontWeight: isActive ? 'bold' : 'normal', ...styles }}
			>
				{text}
			</button>
		</Link>
	)
}
