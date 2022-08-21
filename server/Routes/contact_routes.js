import express from "express";
import { addContact } from "../Controllers/contact_controller.js";

const router = express.Router();

router.post("/contactus", addContact);

export default router;