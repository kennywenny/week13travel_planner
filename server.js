require('dotenv').config()
const express = require('express')
const sequelize = require('./db/connection')
const routes = require('./route')
require('./model')

const app = express()
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes)

const port = process.env.PORT

sequelize.sync({ force: false }).then(() => {
  app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
  })
})