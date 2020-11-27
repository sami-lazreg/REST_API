let express=require('express')
let app=express()
let mongoose=require('mongoose')

let person=require('./models/user')
require("dotenv").config();
let URL=process.env.URL

port=4000
app.use(express.json())




mongoose.connect(
    URL,
    { useNewUrlParser: true, useUnifiedTopology: true },
    (err) => {
      if (err) return console.error(err);
      console.log("Database connection successful");
    }
  );



  // GET :  RETURN ALL USERS 
app.get('/',(req,res)=>{
  person.find({},(err,data)=>{
    if(err) console.log(err)
    res.send(data)
  })
})
    


// POST :  ADD A NEW USER TO THE DATABASE 
app.post('/',(req,res)=>{
  per=new person({
    name:req.body.name
  })
  per.save()
  res.send(per)
})


// PUT : EDIT A USER BY ID 
app.put('/:id',(req,res)=>{
  person.findById(req.params.id,(err,doc)=>{
    if (err)console.log(err)
    doc.name="kamel"
    doc.save()
    res.send(doc)
  })
})


  // DELETE : REMOVE A USER BY ID 
  app.delete('/:id',(req,res)=>{
     person.findByIdAndRemove(req.params.id,(err,data)=>{
      if(err)console.log(err)
      res.send(data)
    })
  })

  



    
    app.listen(port,function(){
        console.log(' please, open your browser at http://localhost:%s', 
        port)
        
    })