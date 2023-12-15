export default async function getAllPosts() {
	const res = await fetch(
		'http://backend.martasieczkowska.com/wp-json/wp/v2/posts',
		{ next: { revalidate: 60 } }
	)
	const posts = await res.json()
	return posts
}
