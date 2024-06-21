const texts = [
	{ left: 'editorial design', right: 'through' },
	{ left: 'typography', right: "''" },
	{ left: 'educational illustration', right: "''" },
	{ left: 'illustration for children', right: "''" },
	{ left: 'press illustration', right: "''" },
	{ left: 'infographics', right: 'to' },
]

import styles from './AboutExperience.module.scss'

export default function AboutExperience() {
  return (
		<section className={styles.experience}>
			<p>My experience covers/ ranges from:</p>
   {texts.map(text => (
    <p className={styles.experienceRow} key={text.left}>
     <span>{text.left}</span><span>{text.right}</span>
    </p>
   ))}
			<p>branding.</p>
		</section>
	)
}
