const Airtable = require('airtable');

Airtable.configure({
	apiKey: process.env.AIRTABLE_KEY,
});

const base = Airtable.base(process.env.AIRTABLE_BASE);

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
						const company = {}

						records.forEach(record => {

							base('companies').find(record.get('company'), function(err, comprecord) {
								if (err) { console.error(err); return; }

									
								company['id'] = comprecord.id,
								company['company'] = comprecord.get('name'),
								company['brandname'] = comprecord.get('brand_name'),
								company['logo'] = comprecord.get('logo'),
								company['description'] = comprecord.get('description')
							});
							
							console.log(company);

							const post = {
								id: record.id,
                                title: record.get('title'),
                                slug: record.get('slug'),
								company: 'Test company',
								company_id: record.get('company'),
                                location: record.get('location'),
                                description: record.get('description'),
								short_desc: record.get('short_description'),
								skills: record.get('skills'),
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