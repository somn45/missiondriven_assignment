import express from "express";
import path from "path";

const app = express();

const PORT = 3000;
const staticPath = path.join(__dirname, "..", "public");

app.use(express.static(staticPath));

app.listen(PORT, () => console.log("✅ Express connect successed!"));
