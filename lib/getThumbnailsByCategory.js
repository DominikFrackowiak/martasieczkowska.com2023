export default async function getThumbnailsByCategory(category) {
	const params = {
		query: `query ThumbnailsByCategoryQuery {
  posts(where: {categoryName: "illustration"}) {
    edges {
      node {
        workAdditionalFields {
          thumbnail {
            id
            link
          }
          slug
          thumbnailDescription
        }
      }
    }
  }
}`,
	}
	const res = await fetch(
		process.env.WP_GRAPHQL_URL,
		{
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(params),
		}
		// { next: { revalidate: 60 } }
	)
	const posts = await res.json()

	return posts.data.posts.edges[0].node.workAdditionalFields
}
