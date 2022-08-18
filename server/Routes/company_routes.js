import express from "express";
import { AuthenticatedUser, verifyRole } from "../utils/verifyToken.js";
import {
  addCompany,
  updateCompany,
  deleteCompany,
  getCompany,
  getAllUserCompany,
  getallCompany,
  getsingleCompany,
} from "../Controllers/company_controller.js";
const router = express.Router();

router.post("/add", AuthenticatedUser, addCompany);
router.put("/:id", AuthenticatedUser, updateCompany);
router.delete("/:id", AuthenticatedUser, deleteCompany);
router.get("/:id", AuthenticatedUser, getCompany);
router.get("/user/Companys", AuthenticatedUser, getAllUserCompany);

// admin routes
router.get("/", verifyRole("admin"), getallCompany);
router.get("/admin/:id", verifyRole("admin"), getsingleCompany);

export default router;
