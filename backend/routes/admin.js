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
        if(data !== null){
            let payload = {subject: req.body.email + req.body.password}
            let token = jwt.sign(payload,'secretKey')
            res.send({data,token})
        }else{
            res.send(null)
        }
        
    } catch (error) {
        console.log('admin login error', error);
    }
})


 
module.exports = router