require('dotenv').config()
const express = require('express')
const sequelize = require('./db/connection')

const app = express()
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = process.env.PORT

sequelize.sync({ force: false }).then(() => {
  app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
  })
})