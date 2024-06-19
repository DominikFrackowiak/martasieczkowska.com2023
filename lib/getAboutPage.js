export default async function getAboutPage() {
	const params = {
		query: `query AboutQuery {
  pageBy(uri: "about") {
    blocks(
htmlContent: true
        dynamicContent: false
        postTemplate: false
        originalContent: false)
     title
  }
}`,
	}
	const res = await fetch(process.env.WP_GRAPHQL_URL, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(params),
	})

	const data = await res.json()

	return { data: data.data.pageBy.blocks, title: data.data.pageBy.title }
}
