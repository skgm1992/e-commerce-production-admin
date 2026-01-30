import express from 'express'
import Path from 'path'

const app = express();
const root = Path.join(Path.resolve()+"/dist");


app.use(express.static(root));

app.get("/{*splat}",(req,res)=>{
    res.sendFile("index.html",{root})
})

const Port=process.env.PORT || 3000;

app.listen(Port,()=>console.log("Admin Server Running"));