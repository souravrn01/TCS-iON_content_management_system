const express = require('express')
const router = express.Router()
const userData = require('../models/authenticatedUser')
const jwt = require('jsonwebtoken')

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
         if(data !== null){
            let payload = {subject: req.body.email + req.body.password}
            let token = jwt.sign(payload,'secretKey')
            res.send({data,token})
        }else{
            res.send(null)
        }
    } catch (error) { 
        console.log('Login error:', error);
    }
})


module.exports = router