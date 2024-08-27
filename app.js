const express = require("express")
const app = express()           //storing it in app

 app.set("view engiene" , "ejs")

 //post ko lagi

 app.use(express.json())
 app.use(express.urlencoded({extended:true}))


app.get('/' ,(req,res)=>{
  //  res.send("<h1> From Hello World </h1>")
      res.render("home.ejs")
})


app.get('/about' ,(req,res)=>{
    //res.send("<h1>About Page</h1>")
    res.render("about.ejs")
})

app.get('/createBlog' ,(req,res)=>{
    //res.send("<h1>Services</h1>")
    res.render("createBlog.ejs")
})

app.post('/createBlog' ,(req,res)=>{
    //res.send("<h1>Services</h1>")
    console.log(req.body.title)
    res.send("form submitted")
})

app.listen(3000, function(){
    console.log("Node is running in port 3000")
})