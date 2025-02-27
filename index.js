import express from "express"

const app = express()
app.get("/",(req,res)=>{
    res.send("Server is Ready")
})
const port = process.env.PORT || 3000

app.listen(port,()=>{
    console.log('serve at http://localhost:3000')
})