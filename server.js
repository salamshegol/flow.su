const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

const htmlPage = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Nice Try</title>
    <style>
        body {
            background: #0f0f0f;
            color: #fff;
            font-family: Arial;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            font-size: 40px;
        }
    </style>
</head>
<body>
    nice try 🐦
</body>
</html>
`;

const luaScript = `
print("Щегольский картель активирован. Крот обижен.")

local function init()
    print("Lua script executed successfully.")
end

init()
`;

app.get("/", (req, res) => {
    const ua = (req.headers["user-agent"] || "").toLowerCase();

    const isBrowser =
        ua.includes("chrome") ||
        ua.includes("firefox") ||
        ua.includes("safari") ||
        ua.includes("edge") ||
        ua.includes("mozilla");

    if (isBrowser) {
        res.setHeader("Content-Type", "text/html");
        return res.send(htmlPage);
    }

    res.setHeader("Content-Type", "text/plain");
    res.send(luaScript);
});

app.listen(PORT, () => {
    console.log("Щегол-сервер запущен на порту " + PORT);
});
