const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    const host = req.headers.host || "unknown-host";

    const userAgent = req.headers["user-agent"]?.toLowerCase() || "";

    const isBrowser =
        userAgent.includes("chrome") ||
        userAgent.includes("firefox") ||
        userAgent.includes("safari") ||
        userAgent.includes("edge");

    if (isBrowser) {
        return res.send("nice try");
    }

    res.setHeader("Content-Type", "text/plain");

    const script = `

print("Loaded from host: ${host}")

`;

    res.send(script);
});

app.listen(PORT, () => {
    console.log("Щегольский сервер запущен на порту " + PORT);
});
