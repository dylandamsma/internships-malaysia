const { getJobPosts } = require('../../helpers/airtable')
const { serialize } = require('../../helpers/utilities')

module.exports = (req, res) => {
	Promise.resolve(getJobPosts())
		.then(data => {
			res.status(200, { 'Content-Type': 'application/json' })
			return res.end(serialize(data))
		})
		.catch(error => {
			console.log(error)
			res.status(200, { 'Content-Type': 'application/json' })
			return res.end(serialize({}))
		})
}
