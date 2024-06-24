export default async function getMetadataForAllPosts(slug) {
	const params = {
		query: `query AllPostsMetadataQuery {
  nodeByUri(uri: "${slug}") {
    ... on Post {
      
      workAdditionalFields {
        metadescription
        metatitle
      }
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
	
	return {
		title: data.data.nodeByUri.workAdditionalFields.metatitle,
		description: data.data.nodeByUri.workAdditionalFields.metadescription,
	}
}

