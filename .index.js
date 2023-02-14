require(`dotenv`).config()
const express = require(`express`)


const app = express()

app.use(`/places`, require (`./controllers/places`))

app.get(`/`, (req, res) => {
    res.send(`Hello World!`)
})

app.get(`*`, (req,res)=>{
    res.status(404).send(`<h1>404 page</h1>`)

})

const PORT = process.env.PORT || 3000

app.listen(process.env.PORT)