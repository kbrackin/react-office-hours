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
app.get("/", (req,res) => res.send('HTML is under construction'))

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`))