const express = require('express')
const app = express()
const port = 5000
const cors = require("cors")

app.use(cors());

const catagoriesData = require("./data/catagories.json");
const newsData = require("./data/news.json");

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get("/catagories", (req, res) => {
    res.send(catagoriesData)
})

app.get("/news", (req, res) => {
    res.send(newsData)
})

app.get("/news/:id", (req, res) => {
    const id = req.params.id;
    // console.log(id)
    const getData = newsData.find(n => n._id === id);
    res.send(getData);
})

app.get("/catagories/:id", (req, res) => {
    const id = parseInt(req.params.id);
    // console.log(id)
    if (id === 0) {
        res.send(newsData)
    } else {
        const cataData = newsData.filter(data => parseInt(data.category_id) === id);
        res.send(cataData);
    }
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

