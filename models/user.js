let mongoose=require('mongoose')

let person = new mongoose.Schema({
    name: {
      type: String,
      required: true
    }
    });

  
  module.exports= mongoose.model('person',person)

  