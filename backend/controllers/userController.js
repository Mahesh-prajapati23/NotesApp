// register a user
var bcrypt = require('bcryptjs');
var salt = bcrypt.genSaltSync(10);
let UserCollection = require('../models/User')

const registerUser = async(req,res)=>{
    const {name,email,password} = req.body;
    if(!name){
        return res.json({msg:"name is required",success:false});
    }
    if(!email){
        return res.json({msg:"email is required",success:false});
    }
    if(!password){
        return res.json({msg:"password is required",success:false});
    }
  

    try {
        let existingUser = await UserCollection.findOne({email:email})
        if(!existingUser){
            let hashedPassword = bcrypt.hashSync(password, salt);
            console.log(hashedPassword) 
            let data = await UserCollection.create({
                name:name,
                email:email,
                password:hashedPassword
            })
    
            return res.json({msg:"data saved successfully", success:true,data})
        }
        else{
            return res.json({msg:"user already registerd", success:false})
        }
        

    } catch (error) {
        return res.json({msg:"error in creating user", success:false,error:error.message})
    }
}

const loginUser = async(req,res)=>{
    const {email, password} = req.body;
    if(!email){
        return res.json({msg:"email is required",success:false});
    }
    if(!password){
        return res.json({msg:"password is required",success:false});
    }

   try {
    let existingUser = await UserCollection.findOne({email:email})
    console.log(existingUser)
    if(existingUser){
        let comparePassword = bcrypt.compareSync(password, existingUser.password );
        if(comparePassword){
            return res.json({msg:"login successfull",success:true,existingUser})
        }
        else{
            return res.json({msg:"wrong password",success:false})
        }
    }
    else{
        return res.json({msg:"user not found",success:false})
    }
   } catch (error) {
    res.json({msg:"error in login user",success:false,error:error.message})
   }

}

const updateUser = async(req,res)=>{
    let id = req.params._id;
    let {name,password} = req.body;
    try {
       let hashedPassword;

    if(password){
       hashedPassword = bcrypt.hashSync(password, salt);
    }
    
    let data = await UserCollection.findByIdAndUpdate(id, {$set:{name:name,password:hashedPassword}},{new:true})

    res.json({msg:"user updated successfull",success:true,data})
   } catch (error) {
    res.json({msg:"error in updating user",success:false,error:error.message})
   }
}


const getAllusers = async(req, res)=>{
    let data = await UserCollection.find();

    try {
        return res.json({msg:"user fetched successfully", success:true,data})
    } catch (error) {
        return res.json({msg:"error in getting user", success:false,error:error.message})
    }
}

const deleteUser = async(req,res)=>{
    let id = req.params._id
    let data = await UserCollection.findByIdAndDelete(id);

    try {
        return res.json({msg:"user deleted successfully",success:true})
    } catch (error) {
        return res.json({msg:"error in deleting user",success:false})
    }
}


module.exports = {
    registerUser,
    getAllusers,
    deleteUser,
    loginUser,
    updateUser
}