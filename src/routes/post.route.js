import express from "express"

import authenticate from "../middlewares/authenitcation.js"


import {createPost , getPost , getPostByID , updatePostByID , deletePostByID} from "../controllers/post.controller.js"
const router = express.Router();


router.get('/posts' , getPost);

router.post('/posts' , authenticate , createPost);

router.get('/posts/:id' , getPostByID);

router.put('/posts/:id' , authenticate , updatePostByID);
router.delete('/posts/:id' ,authenticate , deletePostByID);




export default router;