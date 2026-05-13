import express from "express";

const app = express();
const port = 3000;

import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));






app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});


app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
