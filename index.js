const express = require("express");
const app = express();
const ipInfo = require("./utils/ipinfoHelper")
app.enable('trust proxy');

app.get("/sa", (req, res) => {
  const clientIP = req.headers['x-forwarded-for'] || req.connection.remoteAddress;

  ipInfo.getIPDetail(clientIP)

  res.send( ipInfo.getIPDetail(clientIP));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
