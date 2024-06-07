export default async function getAllPosts() {
	const params = {
		query: `query AllPostsQuery {
  posts {
    nodes {
      blocks(postTemplate: false)
      workAdditionalFields {
        justifycontent
        metadescription
        metatitle
        slug
      }
      title
    }
  }
}`

	}
	const res = await fetch(
		process.env.WP_GRAPHQL_URL, {
			method: 'POST', 
			headers: {'Content-Type': 'application/json'},
		 body: JSON.stringify(params)
		}
		// { next: { revalidate: 60 } }
	)
	const posts = await res.json()
	console.log(posts.data.posts.nodes)
	return posts.data.posts.nodes
}
