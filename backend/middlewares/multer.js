const express = require('express');
const multer = require('multer');
const router = express.Router();

const upload = multer(); // or configure it to store files, if needed

router.post('/register', upload.single('file'), (req, res) => {
  console.log("req.body:", req.body); // ✅ Will now contain fullName, email, etc.
  console.log("req.file:", req.file); // ✅ Contains the uploaded file

  // Your user registration logic here

  res.json({ success: true, message: "User registered!" });
});
