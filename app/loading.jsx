import Image from 'next/image'

export default function Loading() {
	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				gap: '20px',
				height: '80vh',
				width: '100%',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<Image
				unoptimized
				src='/assets/loading.gif'
				width={40}
				height={40}
				alt='logo Marta Sieczkowska'
			/>
			<p>Please wait, loading...</p>
		</div>
	)
}
