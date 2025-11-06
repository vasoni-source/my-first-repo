import { Router } from 'express'
import { getUser , addUser,updateUser,deleteUser,getUserById,loginUser} from '../controller/index.js';
import verifyToken from '../middleware/authMiddleware.js';
import errorValidation from '../middleware/validation/errorValidationMiddleware.js';
import userValidationRules from '../middleware/validation/validationMiddleware.js';
const router = Router();

router.get('/',verifyToken, getUser);

// create a user here
router.get('/:id',getUserById)
router.post('/',userValidationRules ,errorValidation,addUser);
router.post('/login',loginUser)
router.put('/:id',updateUser)
router.delete('/:id',deleteUser)
/**
 * Complete CRUD operation for user
 * Complete CRUD operation for user/:id
 */

export default router;