import express from "express";
import fs from "fs";

const app = express();

const SECRET_HEADER = "X-Executor-Key";
const SECRET_VALUE = "gJ4i3b7PqL8s9XvZqHN2#tW3rE5uC^^^0yGis%ZfD1mA7oLkPpXcR";

app.get("/script", (req, res) => {
    const key = req.headers[SECRET_HEADER.toLowerCase()];

    if (key === SECRET_VALUE) {
        res.set("Content-Type", "text/plain");
        const code = fs.readFileSync("script.lua", "utf8");
        return res.send(code);
    }

    return res.send("nice try");
});

app.get("*", (_, res) => {
    res.send("nice try");
});

app.listen(3000, () => {
    console.log("KROT server for shegol started");
});
