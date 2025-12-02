import express from "express";
import fs from "fs";

const app = express();

function isBrowser(req) {
    const ua = req.headers["user-agent"] || "";
    const secFetch = req.headers["sec-fetch-mode"];
    const accept = req.headers["accept"] || "";

    if (
        ua.includes("Mozilla") ||
        ua.includes("Chrome") ||
        ua.includes("Firefox") ||
        secFetch |
        accept.includes("text/html")
    ) {
        return true;
    }

    return false;
}

app.get("/script", (req, res) => {
    if (isBrowser(req)) {
        return res.send("nice try");
    }

    const code = fs.readFileSync("script.lua", "utf8");
    res.set("Content-Type", "text/plain");
    return res.send(code);
});

app.get("*", (_, res) => {
    res.send("nice try");
});

app.listen(6969, () => console.log("крот запущен"));
