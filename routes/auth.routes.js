const User = require("../models/User.model");
const router = require("express").Router();
//const bcryptjs = require("bcryptjs");

/* GET home page */
router.get("/signup", (req, res, next) => {
  res.render("auth/signup.hbs");
});

router.post("/signup", (req, res, next) => {
    const {userName, password} = req.body
    //const hashedPassword = bcryptjs.hashSync(password);
    User.create({ username: userName, 
        password: password

    })
    .then(userCreated => {
        console.log(userCreated)
        res.redirect("/login")
    }) 
})
    router.get("/login", (req, res, next) => {
      res.render("auth/login.hbs");
      });
   
      router.post("/login", async (req, res, next) => {
        const { userName, password } = req.body;
        try {
          const foundUser = await User.findOne({ userName });
          res.redirect("/cocktails");

         // if (!foundUser) {
          //  res.redirect("/login");
          //}
          //const isValidPassword = bcryptjs.compareSync(password, foundUser.password);
          //if (!isValidPassword) {
           // res.redirect("/login");
          } catch (err) {
            console.log(err);
          }
        });
         // req.session.user = foundUser 
        

module.exports = router;
