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
			<p>Thank you for your patience, we are busy loading....</p>
			<Image
				src='/assets/logo_marta_big.svg'
				aspectratio={400 / 300}
				width={200}
				height={150}
				alt='logo Marta Sieczkowska'
			/>
		</div>
	)
}
