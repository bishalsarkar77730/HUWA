import express from "express";
import {
  update,
  deleteUser,
  getUser,
  getsingleUser,
  getAllusers,
  editUserRole,
} from "../Controllers/user_controller.js";
import { AuthenticatedUser, verifyRole } from "../utils/verifyToken.js";

const router = express.Router();

router.put("/:id", AuthenticatedUser, update);
router.delete("/:id", AuthenticatedUser, deleteUser);
router.get("/:id", AuthenticatedUser, getUser);

// Admin routes
router.get("/admin/singleuser/:id", verifyRole("admin"), getsingleUser);
router.get("/", verifyRole("admin"), getAllusers);
router.put("/admin/:id", verifyRole("admin"), editUserRole);

export default router;
