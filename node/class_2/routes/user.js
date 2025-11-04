import { Router } from 'express'
import { getUser , addUser,updateUser,deleteUser,getUserById,loginUser} from '../controller/index.js';
import verifyToken from '../middleware/authMiddleware.js';
const router = Router();

router.get('/',verifyToken, getUser);

// create a user here
router.get('/:id',getUserById)
router.post('/', addUser);
router.post('/login',loginUser)
router.put('/:id',updateUser)
router.delete('/:id',deleteUser)
/**
 * Complete CRUD operation for user
 * Complete CRUD operation for user/:id
 */

export default router;