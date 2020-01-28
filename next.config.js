const webpack = require("webpack");
require("dotenv").config();

module.exports = {
  env: {
    'AIRTABLE_KEY': process.env.AIRTABLE_KEY,
    'AIRTABLE_BASE': process.env.AIRTABLE_BASE,
    'AIRTABLE_POST_TABLE': process.env.AIRTABLE_POST_TABLE,
    'SITE_URL': process.env.SITE_URL
  },
}