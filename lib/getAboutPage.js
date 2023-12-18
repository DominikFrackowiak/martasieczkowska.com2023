export default async function getAboutPage() {
	const res = await fetch(
		'http://backend.martasieczkowska.com/wp-json/wp/v2/pages?slug=about',
		{ next: { revalidate: 60 } }
	)
	const posts = await res.json()
	return posts
}
