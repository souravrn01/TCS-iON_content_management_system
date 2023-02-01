const express = require('express')
const router = express.Router()

const authUser = require('./authenticated-user');
router.use('/authUser', authUser)

const rootUser = require('./rootUser')
router.use('/rootUser', rootUser)

const admin = require('./admin')
router.use('/admin', admin)






module.exports = router;