const express = require('express')
const cors = require('cors')
const data = require('./data/students')
const port = process.env.PORT || 3000

function findById(data, id){
    for (let i = 0; i < data.length; i++){
        if(data[i].id == id){
            return data[i]
        }
    }
    return null
}

const app = express()
app.use(cors())

app.get("/", function (request, response) {
    response.json({data})
})

app.get("/:id", function (req, res) {
    var rec = findById(data, req.params.id)
    if(!rec){
        res.status(404)
        res.json({
            error: {
                message: "No Record Found"
            }
        })
    }
    res.json({data: rec})
})


app.listen(port)