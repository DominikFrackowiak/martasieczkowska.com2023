export default async function getAllPosts() {
	const res = await fetch(
		'http://backend.martasieczkowska.com/wp-json/wp/v2/works?acf_format=standard&fields=id,title,acf',
		{ next: { revalidate: 60 } }
	)
	const posts = await res.json()
	return posts
}
