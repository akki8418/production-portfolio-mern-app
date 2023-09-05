const express = require('express');
const { sendEmailController } = require('../controllers/portfolioController');

// router object
const router = express.Router()

//router

router.post('/sendEmail', sendEmailController)

//exports
module.exports= router
