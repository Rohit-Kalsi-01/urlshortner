import express from "express";
import { redirectUrl, shortenUrl } from "../controllers/url.controller.js";


const router=express.Router();

router.post("/shorten", shortenUrl);
router.get("/:code", redirectUrl)


export default router;