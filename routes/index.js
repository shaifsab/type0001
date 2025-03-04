const express = require('express')
const router = express.Router()
const { homePage, registerPage, loginPage, logoutPage } = require('../controllers/authStaic')
const { registerUser, loginUser } = require('../controllers/authController')


// Test home route
router.get('/', homePage)

// Auth routes
router.get('/register', registerPage)
router.post('/register', registerUser)

router.get('/login', loginPage)
router.post('/login', loginUser)

router.get('/logout', logoutPage)


module.exports = router