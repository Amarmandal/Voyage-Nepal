 const User = require('../models/userModel');

 exports.userSignup = (req, res) => {
     const {email} = req.body;
     User.findOne({email: email})
        .then(doc => {
            if(doc) {
                return res.json({error: 'User with this Email Already exist'})
            }
        })

    const user = new User(req.body);

     user.save()
        .then(doc => {
            res.status(200).json(doc);
        })
        .catch(err => {
            console.log(err);
        })
 }