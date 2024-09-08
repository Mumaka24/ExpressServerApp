import express from 'express';
import {
     getPosts, 
     getPost, 
     createPost, 
     updatePost, 
     deletePost
    } from '../controllers/postController.js';
const router = express.Router();

// get all posts
router.post('/', getPosts);

// Get single  post
router.post('/:id', getPost);

 // Get new post
 router.post('/', createPost);

 // Update post
 router.put('/:id', updatePost);

 // Delete post
 router.delete('/:id', deletePost);

export default router;


