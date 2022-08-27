const { Router } = require('express');
const User = require('../../models/user');


const router = require('express').Router();

// Contain the auth routes


//login
router.get('/login', (req, res) => {


    res.render("login")

});

//post login
router.post('/login', async (req, res) => {

    try {
        const userData = await User.findOne({ where: { email: req.body.email } });
    
        if (!userData) {
          res.status(400).render('login', {
            error: "Email or password is not valid. Please try again"
          })
            
          return;
        }
    
        const validPassword = await userData.checkPassword(req.body.password);
    
        if (!validPassword) {
          res.status(400).render('login', {
            error: "Email or password is not valid. Please try again"
          });            
          return;
        }
    
        req.session.save(() => {
          req.session.user_id = userData.id;
          req.session.logged_in = true;
          
          res.redirect('/');
        });
    
      } catch (err) {
        res.status(400).render('login', {
            error: "Email or password is not valid. Please try again"
          });
      }
})

//sign up

//post (for user to sign up)

module.exports = router;