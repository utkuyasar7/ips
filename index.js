const express = require("express");
const app = express();

app.enable('trust proxy');

app.get("/sa", (req, res) => {
  const clientIP = req.headers['x-forwarded-for'] || req.connection.remoteAddress;

  res.send(`${clientIP}`);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
