export default async function getAllThumbnails() {
	const params = {
		query: `query AllThumbnailsQuery {
  posts {
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
		},
		{ next: { revalidate: 60 } }
	)
	const posts = await res.json()
	const data = posts.data.posts.edges.map(
		thumb => thumb.node.workAdditionalFields
	)
 // console.log(data)
	return data
}
