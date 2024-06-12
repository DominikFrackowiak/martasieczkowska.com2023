// import Image from 'next/image'
import styles from './Footer.module.scss'
import { FaRegEnvelope, FaBehance, FaInstagram } from 'react-icons/fa6'

const socials = [
	{
		id: 1,
		alt: 'Behance',
		url: 'https://www.behance.net/martasieczkowska',
		icon: <FaBehance/>,
	},
	{
		id: 2,
		alt: 'Email',
		url: 'mailto:marta.sieczkowska@vp.pl',
		icon: <FaRegEnvelope/>,
	},
	{
		id: 3,
		alt: 'Instagram',
		url: 'https://www.instagram.com/mm_sieczkowska/',
		icon: <FaInstagram/>,
	},
]

export default function Footer() {
	return (
		<footer className={styles.footer}>
			<div className={styles.footer_social}>
				{socials &&
					socials.map(social => (
						<a
							href={social.url}
							key={social.id}
							className={styles.footer__link}
							target='_blank'
						>
							{social.icon}
						</a>
					))}
			</div>
		</footer>
	)
}
