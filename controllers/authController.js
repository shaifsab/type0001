const User = require('../models/UserSchema')
const validateEmail = require('../helpers/validateEmail')
const validatePassword = require('../helpers/validatePassword')
const bcrypt = require('bcrypt');
const saltRounds = 10;
var jwt = require('jsonwebtoken');



// registration session 

const registerUser = async (req , res)=> {
    const {fullName, email, password} = req.body

    
    
    try {
        if(!fullName) return res.status(400).send({error: 'Name is require'})

        if(!email) return res.status(400).send({error: 'Email is require'})
        
        if(!validateEmail(email)) return res.status(400).send({error: 'Email is invalid'})
    
        if(!password) return res.status(400).send({error: 'PassWord is require'})

        if(validatePassword(password)) return res.status(400).send({error: validatePassword(password)})

        const existingUser = await User.findOne({email})
        if(existingUser) return res.status(200).send({error: 'User already exist'})

        // password encryption 
        bcrypt.hash(password, saltRounds, function(err, hash) {
           const user = new User({
               fullName, email, password: hash
           })
   
           user.save()
           res.send('Successful registration!')
        });

    } catch (error) {
        console.error(error)
        res.status(500).send({error: 'server error from register...'})
    }

}



// login session 
const loginUser = async (req, res) => {
    const {email, password}  = req.body

    try {
        if(!email) return res.status(400).send({error: 'Email is require'})

        if(!validateEmail(email)) return res.status(400).send({error: 'Email is invalid'})

        if(!password) return res.status(400).send({error: 'PassWord is require'})


        const existingUser = await User.findOne({email})
        if(!existingUser) return res.status(200).send({error: 'User not found'})
        

        // password compare
        const matchPassword = await bcrypt.compare(password, existingUser.password);

        if(!matchPassword) return res.status(400).send({error: 'Password is invalid'})

        // jwt token conversion 
        const token = jwt.sign({
            data: {
                id: existingUser._id,
                email: existingUser.email
            }
          }, process.env.JWT_TOKEN , { expiresIn: '2h' });

        res.status(200).cookie('token', token).send({message: 'Login successful', token})

    } catch (error) {
        console.error(error)
        res.status(500).send({error: 'server error from login...'})
    }
}


module.exports = {registerUser, loginUser}