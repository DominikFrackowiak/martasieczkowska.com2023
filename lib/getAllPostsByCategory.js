export default async function getAllPostsByCategory(categoryId) {
	const res = await fetch(
		`http://backend.martasieczkowska.com/wp-json/wp/v2/posts?categories=${categoryId}`,
		{ next: { revalidate: 60 } }
	)
	const posts = await res.json()
	return posts
}
