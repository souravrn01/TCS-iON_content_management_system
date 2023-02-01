const express = require('express')
const router = express.Router()
const userData = require('../models/authenticatedUser')

router.post('/signup', async(req, res)=>{        // user registration
    try { 
        let data = {
            name: req.body.name,
            phone: req.body.phone,
            email: req.body.email,
            password: req.body.password
        }
        const newUser = new userData(data)
        const saved = await newUser.save()
        res.send(saved)
    } catch (error) {
        console.log('signup error:', error);
    }
})


router.post('/login', async(req, res)=>{               // user login 
    
    try {
         let data = await userData.findOne({email: req.body.email, password: req.body.password})
        res.send(data)
    } catch (error) {
        console.log('Login error:', error);
    }
})


module.exports = router