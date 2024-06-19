import Link from 'next/link'
import { useSearchParams } from 'next/navigation'

import { Roboto } from 'next/font/google'

const roboto = Roboto({
	weight: ['400', '700'],
	subsets: ['latin'],
	display: 'swap',
})

export default function NavLink({ text, queryKey, queryValue, styles }) {
	const searchParams = useSearchParams()
	const isActive = searchParams.get(queryKey) === queryValue

	return (
		<button
			className={roboto.className}
			style={{ fontWeight: isActive ? 'bold' : 'normal', ...styles }}
		>
			<Link href={isActive ? '/' : `/?${queryKey}=${queryValue}`}>{text}</Link>
		</button>
	)
}
