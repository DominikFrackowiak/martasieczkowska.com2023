import Link from 'next/link'
import { useSearchParams, usePathname } from 'next/navigation'

import { Roboto } from 'next/font/google'

const roboto = Roboto({
	weight: ['400', '700'],
	subsets: ['latin'],
	display: 'swap',
})

export default function NavLink({ text, queryKey, queryValue, slug, styles }) {
	const searchParams = useSearchParams()
	const pathname = usePathname()

	const isActive = searchParams.get(queryKey) === queryValue
	const isAboutActive = pathname === '/about'

	const contentToDisplay = !slug ? (
		<Link
			href={isActive ? '/' : `/?${queryKey}=${queryValue}`}
			style={{ display: 'flex' }}
		>
			<button
				className={roboto.className}
				style={{ fontWeight: isActive ? 'bold' : 'normal', ...styles }}
			>
				{text}
			</button>
		</Link>
	) : (
		<Link href={isAboutActive ? '/' : `/${slug}`} style={{ display: 'flex' }}>
			<button
				className={roboto.className}
				style={{ fontWeight: isAboutActive ? 'bold' : 'normal', ...styles }}
			>
				{text}
			</button>
		</Link>
	)

	return contentToDisplay
}
