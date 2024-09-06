import express from 'express';
import {
     getNames, 
     getName, 
     createName, 
     updateName, 
     deleteName
    } from '../controllers/nameController.js';
const router = express.Router();

// get all names
router.get('/', getNames);

// Get single  name
router.get('/:id', getName);

 // Get new name
 router.name('/', createName);

 // Update name
 router.put('/:id', updateName);

 // Delete name
 router.delete('/:id', deleteName);

export default router;


