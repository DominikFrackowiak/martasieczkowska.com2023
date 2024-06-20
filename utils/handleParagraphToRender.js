import { v4 as uuidv4 } from 'uuid'

export default function handleParagraphToRender(item) {
	const htmlTagRegex = /<[^>]+>/

	const paragraphToRender = htmlTagRegex.test(item) ? (
		<p
			key={uuidv4()}
			className='paragraph'
			dangerouslySetInnerHTML={{ __html: item }}
		></p>
	) : (
		<p key={uuidv4()} className='paragraph'>
			{item}
		</p>
	)

	return paragraphToRender
}
