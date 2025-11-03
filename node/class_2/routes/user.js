import { Router } from 'express'
import { getUser } from '../controller/index.js';
const router = Router();

router.get('/', getUser);

// create a user here
router.post('/', (req, res) => {
    res.send('Creating a new user.');
});

/**
 * Complete CRUD operation for user
 * Complete CRUD operation for user/:id
 */

export default router;