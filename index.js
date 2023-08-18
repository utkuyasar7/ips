const express = require("express");
const app = express();
const ipInfo = require("./utils/ipinfoHelper");
app.enable('trust proxy');

app.get("/sa", async (req, res) => {
  const clientIP = req.headers['x-forwarded-for'] || req.connection.remoteAddress;

  try {
    const ipDetails = await ipInfo.getIPDetail(clientIP);
    res.json(ipDetails);
  } catch (error) {
    console.error('Hata:', error);
    res.status(500).send('Bir hata oluştu.');
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
