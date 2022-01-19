import express from "express";
import csv from "csvtojson";
import path from "path";
import fillJson from "./utilities/fillJsonData"

const app = express();
const port = 3000;
const uploadsPath = path.resolve(__dirname,"..", "uploads");
const filePath = path.join(uploadsPath, "users.csv")

app.get("/", (req, res) => res.end(filePath));

app.get("/convert", async (req, res) => {
    const data = await csv().fromFile(filePath);
    console.log(fillJson(data));
    res.send(fillJson(data));
})

app.listen(port, "127.0.0.1", () => console.log(`Listening to server on port ${port}`));