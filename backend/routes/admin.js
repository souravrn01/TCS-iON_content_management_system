const express = require('express')
const router = express.Router()
const userData = require('../models/authenticatedUser')
const jwt = require('jsonwebtoken')


router.post('/login', async (req, res)=>{
    try {
        let data = await userData.findOne({
            email: req.body.email, 
            password: req.body.password,
            isAdmin: true                            
        })
        res.send(data)
    } catch (error) {
        console.log('admin login error', error);
    }
})



module.exports = router