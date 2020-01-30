const Airtable = require('airtable')

Airtable.configure({
  apiKey: process.env.AIRTABLE_KEY
})

const base = Airtable.base(process.env.AIRTABLE_BASE)

const getCompany = record => {
  return new Promise(async (resolve, reject) => {
    base('companies').find(record.get('company'), async (err, comprecord) => {
      if (err) {
        console.error(err)
        return
      }
      resolve(comprecord)
    })
  })
}

module.exports = {
  getJobPosts: () => {
    const allJobPosts = []
    return new Promise((resolve, reject) => {
      base('posts')
        .select({
          sort: [
            {
              field: 'created_at',
              direction: 'desc'
            }
          ]
        })
        .eachPage(
          async (records, fetchNextPage) => {
            const result = records.map(async record => {

              const company = await getCompany(record)

              allJobPosts.push({
                id: record.id,
                title: record.get('title'),
                slug: record.get('slug'),
                location: record.get('location'),
                description: record.get('description'),
                short_desc: record.get('short_description'),
                skills: record.get('skills'),
                featured: record.get('featured'),
                publish_date: record.get('created_at'),
                uuid: record.get('uuid'),

                company_id: company.id,
                company_name: company.get('name'),
                company_brandname: company.get('randname'),
                company_logo: company.get('logo')
              })
            })

            // wait for all the posts to get pushed into allJobPosts first
            await Promise.all(result)

            // then only fetch the next page
            fetchNextPage()
          },
          error => {
            if (error) {
              console.error(error)
              reject({ error })
            }
            resolve(allJobPosts)
          }
        )
    })
  },

  // Get a single Job post
  getJobPost: recordId => {
    return new Promise((resolve, reject) => {
      base('posts').find(recordId, (error, record) => {
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
      })
    })
  }
}
