import { nanoid } from "nanoid";
import { Url } from "../models/url.models.js";

export const shortenUrl = async (req, res) => {
 const { originalUrl } = req.body;

  const shortCode = nanoid(6);

 const newUrl = await Url.create({
    originalUrl,
    shortCode,
  });

   res.json({
    shortUrl: `http://localhost:5000/${shortCode}`,
     });
};


export const redirectUrl = async (req, res) => {
const { code } = req.params;

  const url = await Url.findOne({ shortCode: code });
    if (!url) return res.status(404).json({ message: "URL not found" });

     res.redirect(url.originalUrl);
};