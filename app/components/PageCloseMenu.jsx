import Image from 'next/image'
import Link from 'next/link'

import styles from './PageSwipeCloseMenu.module.scss'

export default function PageCloseMenu() {
	const contentToDisplay = (
		<div className={styles.pageSwipeCloseMenuWrapper}>
			<Link href='/'>
				<Image
					src='/assets/back-to-main-icon.png'
					height={30}
					width={30}
					alt='icon back to main'
				/>
			</Link>
		</div>
	)

	return contentToDisplay
}
