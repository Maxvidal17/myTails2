const router = require("express").Router();
const cocktails = require("../bar.json")
const Cocktail = require("../models/cocktail.model");
/* GET home page */
router.get("/cocktails", (req, res, next) => {
   Cocktail.find().then(allCocktails =>{
    console.log(allCocktails.ingredients)
    //console.log(allCocktails)
   allCocktails.forEach(cocktail =>{
   console.log(cocktail.ingredients)
   })
    res.render("cocktails.hbs", {allCocktails});
   } )
   
    // console.log(cocktails.cocktails) 
    //const myCocktails = cocktails.cocktails
  
  
})
router.get("/createCocktail",(req, res, next) => {
   
    res.render("createCocktail.hbs");
  })
router.post("/createCocktail",(req, res, next) => {
    const {name, preparation,ingredient, } = req.body
    Cocktail.create({ name : name, 
        preparation: preparation,
        ingredient: ingredient

    })
    .then(cocktailCreated => {
        console.log(cocktailCreated)
        res.redirect("/cocktails")
        
    }) .catch(error => console.log(error)) 
 
})



module.exports = router