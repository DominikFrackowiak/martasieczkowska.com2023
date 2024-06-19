export default async function getAllPosts(slug) {
	const params = {
		query: `query SinglePostQuery {
  nodeByUri(uri: "${slug}") {
    id
    ... on Post {
      blocks(
        htmlContent: true
        dynamicContent: false
        postTemplate: false
        originalContent: false
								
      )
      slug
      title
    }
  }
}`,
	}
	const res = await fetch(process.env.WP_GRAPHQL_URL, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(params),
	})

	const post = await res.json()

	if (post.data.nodeByUri === null) return undefined
	return post
}
