export default async function getPost(slug) {
	const data = await fetch(
		`http://backend.martasieczkowska.com/wp-json/wp/v2/posts?slug=${slug}`,
		{ next: {revalidate: 60}}
	)
	const res = await data.json()
	return res
}
