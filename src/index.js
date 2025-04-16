const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")

const port = process.env.PORT || 4000
const app = express()

app.use(cors())
app.use(bodyParser.json())

app.get("/", (req, res) => {
    res.send("Hello World!")
})

app.listen(port, () => {
    console.log(`Server running on ${port}`)
})