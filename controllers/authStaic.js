const homePage        = (req, res) => res.render('home')
const loginPage       = (req, res) => res.render('login')
const registerPage    = (req, res) => res.render('register')

const logoutPage    = (req, res) => {
    res.clearCookie('token')
    res.redirect('./login')
}





module.exports = {homePage, loginPage, registerPage, logoutPage}