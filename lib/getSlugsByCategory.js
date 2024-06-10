export default async function getSlugsByCategory(category) {
	const params = {
		query: `query SlugsQuery {
  posts(where: {categoryName: "graphic-design"}) {
    nodes {
      slug
    }
  }
}`,
	}
	const res = await fetch(process.env.WP_GRAPHQL_URL, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(params),
	})
	const posts = await res.json()
	const data = posts.data.posts.nodes
	return data
}
