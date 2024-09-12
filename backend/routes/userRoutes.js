const express = require('express');
const { registerUser, getAllusers,deleteUser,updateUser, loginUser } = require('../controllers/userController');
const router = express.Router();


router.post('/register',registerUser)
router.get('/getAllUser',getAllusers)
router.delete("/deleteUser/:_id",deleteUser)
router.put("/update/:_id",updateUser)
router.post("/login",loginUser)
router.put("/updateUser/:_id", updateUser)


module.exports=router

