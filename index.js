const express = require('express')
const app = express()
const port = process.env.PORT || 8070

app.use(express.static("./dist"))

app.listen(port)
