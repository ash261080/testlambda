const express = require('express')
const sls = require('serverless-http')
const app = express() // create the app

// Just an API to display Hello World!
app.get('/', async (req, res, next) => {
    res.status(200).send('Hello World!')
})

module.exports.server = sls(app)