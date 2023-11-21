const express = require('express')
const app = express();

const PORT = process.env.PORT || 3000;

//Mock profile
const mockProfile = {
    name: "Bootcamp",
    visitCount: 450
}

//MVC
//Views (API, HTML)

app.get('/api/profile', (req,res) => {
    res.json(mockProfile)
})

//HTML View
// app.get("/", (req,res) => res.send('HTML is under construction'))

// app.get('/css/app.css', (req,res) => {
//     res.sendFile(__dirname + `/public/css/app.css`)
// })

// app.get('/images/vite.svg', (req,res) => {
//     res.sendFile(__dirname + `/public/css/app.css`)
// })

app.use(express.static("public"))

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`))