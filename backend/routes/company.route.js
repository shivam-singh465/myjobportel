import express from "express"
import { registerCompany, getCompany, getCompanyById, updateCompany } from "../controllers/company.controllers.js"
import  auth  from "../middlewares/auth.js"
const router = express.Router()


router.route("/register").post(auth, registerCompany)
router.route("/getCompany").get(auth, getCompany)
router.route("/getCompany/:Id").get(auth, getCompanyById)
router.route("/updateCompany/:Id").put(auth, updateCompany)





export default router