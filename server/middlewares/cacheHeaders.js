// middlewares/cacheHeaders.js

import path from "path";
import express from "express";

const cacheControlStatic = express.static(path.join(path.resolve(), "public"), {
  setHeaders: (res, filePath) => {
    if (filePath.endsWith(".html") || filePath.endsWith(".css")) {
      res.setHeader("Cache-Control", "no-store, no-cache, must-revalidate");
    } else if (filePath.match(/\.(jpg|jpeg|png|gif|webp|svg)$/)) {
      res.setHeader("Cache-Control", "public, max-age=31536000"); // 1 year
    } else if (filePath.endsWith(".js")) {
      res.setHeader("Cache-Control", "public, max-age=3600"); // 1 hour
    }
  },
});

export default cacheControlStatic;
