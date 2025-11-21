import { Router } from 'express'
import { getUser,updateUser,deleteUser,getUserById,loginUser,sendOtp,verifyOtpAndCreateUser, loginUserWithOtp, forgotPassword, passwordResetToken, updatePasswordField,updateUserField, addUser} from '../controller/index.js';
import verifyToken from '../middleware/authMiddleware.js';
import errorValidation from '../middleware/validation/errorValidationMiddleware.js';
import userValidationRules from '../middleware/validation/validationMiddleware.js';
// import verifyToken from '../middleware/authMiddleware.js';
const router = Router();

router.get('/', getUser);

// create a user here
router.get('/:id',getUserById)
// router.post('/',userValidationRules ,errorValidation,addUser);
router.post("/register/send-otp",sendOtp);
router.post("/register/verify-otp",userValidationRules,errorValidation, verifyOtpAndCreateUser);
router.post("/registerByAdmin",userValidationRules,errorValidation,addUser);
router.post('/login',loginUser);
router.post('/login_with_otp',sendOtp);
router.post('/login_verification',loginUserWithOtp)
router.put('/:id',updateUser)
router.patch('/update',verifyToken,updateUserField)
router.delete('/:id',deleteUser)
router.post('/forgot-password',forgotPassword)
router.get('/reset-password/:token',passwordResetToken)
router.patch('/reset-password',updatePasswordField)
/**
 * Complete CRUD operation for user
 * Complete CRUD operation for user/:id
 */

export default router;