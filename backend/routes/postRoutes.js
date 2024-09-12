const express = require('express');
const { createPost, updatePost, deletePost, getAllPost, getUserPost } = require('../controllers/postController');
const router = express.Router()


router.post('/create',createPost)
router.put('/update/:_id',updatePost)
router.delete('/delete/:_id',deletePost)
router.get('/all',getAllPost)
router.get('/user/:_id',getUserPost)


module.exports = router