export default async function getPost(slug) {
	const data = await fetch(
		`http://backend.martasieczkowska.com/wp-json/wp/v2/works?acf_format=standard&fields=id,title,acf&slug=${slug}`,
		{ next: { revalidate: 60 } }
	)
	const res = await data.json()
	return res
}
