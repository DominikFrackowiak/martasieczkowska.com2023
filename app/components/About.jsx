import getAboutPage from '../../lib/getAboutPage'

export default async function About() {
 const data = await getAboutPage()
 const aboutContent = data[0].content.rendered.split('\n').filter(el => el !== '')
 const experienceContent = data[0].content.rendered.match(/<pre[\s\S]*?<\/pre>/)[0]
 console.log(aboutContent)
 
	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				gap: '15px',
				maxWidth: '550px',
    marginTop: '40px'
			}}
		>
			<div dangerouslySetInnerHTML={{ __html: aboutContent[0] }}></div>
			<div
				dangerouslySetInnerHTML={{ __html: experienceContent }}
				// style={{ fontFamily: 'Source Serif Pro' }}
			></div>
			<div dangerouslySetInnerHTML={{ __html: aboutContent[9] }}></div>
			<div dangerouslySetInnerHTML={{ __html: aboutContent[10] }}></div>
			<div
				dangerouslySetInnerHTML={{ __html: aboutContent[11] }}
				style={{ fontSize: '12px' }}
			></div>
			<div dangerouslySetInnerHTML={{ __html: aboutContent[12] }}></div>
		</div>
	)
}
