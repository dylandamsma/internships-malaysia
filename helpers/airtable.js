const Airtable = require('airtable');

Airtable.configure({
	apiKey: process.env.airtableKey,
});

const base = Airtable.base(process.env.airtableBase);

module.exports = {
	// Get all Job Posts
	getJobPosts: () => {

		return new Promise((resolve, reject) => {
			const allJobPosts = []

			base('posts')
				.select({
					sort: [
						{
							field: 'created_at',
							direction: 'desc',
						},
					],
				})
				.eachPage(
					(records, fetchNextPage) => {
						// Get the fields
						records.forEach(record => {
						
							const post = {
								id: record.id,
                                title: record.get('title'),
                                slug: record.get('slug'),
								company: record.get('company'),
								company_id: record.get('company'),
                                duration: record.get('duration'),
                                description: record.get('description'),
                                short_desc: record.get('short_description'),
                                featured: record.get('featured'),
                                publish_date: record.get('created_at'),
                                uuid: record.get('uuid')
							}

							// Push post to
							allJobPosts.push(post)
						})

						fetchNextPage()
					},
					error => {
						if (error) {
							console.error(error)
							reject({ error })
						}
						resolve(allJobPosts)
					},
				)
		})
	},

	// Get a single Job post
	getJobPost: recordId => {

		return new Promise((resolve, reject) => {
			base('posts').find(
				recordId,
				(error, record) => {
					if (error) {
						console.error(error)
						reject({ error })
					}

					const jobPost = {
						// id: record.id,
                        title: record.get('title'),
                        slug: record.get('slug'),
                        company: record.get('brand_name'),
						company_id: record.get('company'),
                        duration: record.get('duration'),
                        description: record.get('description'),
                        featured: record.get('featured'),
                        publish_date: record.get('created_at'),
                        uuid: record.get('uuid')
					}

					resolve(jobPost)
				},
			)
		})
	},
}