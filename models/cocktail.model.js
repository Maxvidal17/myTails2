const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const cocktailSchema = new Schema(
  {
    name:  String,
      // unique: true -> Ideally, should be unique, but its up to you
    
    preparation: String,
  
    // this second object adds extra properties: `createdAt` and `updatedAt`
    ingredient: String,
  

  });

const Cocktail = model("Cocktail", cocktailSchema);

module.exports = Cocktail;
