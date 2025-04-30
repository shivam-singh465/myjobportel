// import express from 'express';
// import { register,login,updateProfile,logout } from '../controllers/user.controllers.js';
// import auth from '../middlewares/auth.js';

// const router = express.Router();

// router.route('/register').post(register)
// router.route('/login').post(login)
// router.route('/profile/update').post(auth,updateProfile)
// router.route('/logout').post(logout)

// export default router;


import express from 'express';
import multer from 'multer';
import { register, login, updateProfile, logout } from '../controllers/user.controllers.js';
import auth from '../middlewares/auth.js';

const router = express.Router();

// Setup multer (to store file in memory for now)
const upload = multer(); // You can also configure disk storage if needed

// Use multer on the /register route
router.route('/register').post(upload.single('file'), register);
router.route('/login').post(upload.single("file"),login);
router.route('/profile/update').post(auth, updateProfile);
router.route('/logout').post(logout);

export default router;
