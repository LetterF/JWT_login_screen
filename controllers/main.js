
const jwt = require("jsonwebtoken")
const {BadRequestError} = require("../errors")

const login = async (req, res) => {
const {username,password} = req.body

//mongoose validation
//joi
//check in the controller

if(!username || !password) {
    throw new BadRequestError("Please don't leave the field blanks")
}


const id = new Date().getDate()

const token = jwt.sign({id, username}, process.env.JWT_SECRET,{expiresIn:"30d"})

    res.status(200).json({msg:"user created", token})
}

const dashboard = async (req, res) =>{
    console.log(req.user);

    const luckyNumber = Math.floor(Math.random() * 100)
        
        res.status(200).json({msg:`testing`, secret: `Hello ${req.user.username}! Here is your authorized data, your lucky number is ${luckyNumber}`})

     
}

module.exports = {
    login, dashboard
}