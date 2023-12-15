// import Image from 'next/image'
import styles from './Footer.module.scss'

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
// import { faBehance } from '@fortawesome/free-brands-svg-icons'
// import { faInstagram } from '@fortawesome/free-brands-svg-icons'

// const socials = [
// 	{
// 		id: 1,
// 		alt: 'Behance',
// 		url: 'https://www.behance.net/martasieczkowska',
// 		icon: faBehance,
// 	},
// 	{
// 		id: 2,
// 		alt: 'Email',
// 		url: 'mailto:marta.sieczkowska@vp.pl',
// 		icon: faEnvelope,
// 	},
// 	{
// 		id: 3,
// 		alt: 'Instagram',
// 		url: 'https://www.instagram.com/mm_sieczkowska/',
// 		icon: faInstagram,
// 	},
// ]

export default function Footer() {
	return (
		<footer className={styles.footer}>
			<div className={styles.footer_social}>
				{/* {socials &&
					socials.map(social => (
						<a
							href={social.url}
							key={social.id}
							className={styles.footer__link}
							target='_blank'
						>
							<FontAwesomeIcon
								className={styles.footer__socialIcon}
								icon={social.icon}
							/>
						</a>
					))} */}
			</div>
		</footer>
	)
}
