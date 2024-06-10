export default async function getAllSlugs() {
	const params = {
		query: `query SlugsQuery {
  posts {
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
	const data = await res.json()

	return data.data.posts.nodes
}
