const express = require('express');
const app = express();
<<<<<<< HEAD
const bodyParser = require('body-parser'); // Gelen istek verilerini analiz etmek için
const domainRoutes = require('./routes/domainRoutes'); // domain rotalarını içeren dosya

=======
const ipInfo = require("./utils/ipinfoHelper");
>>>>>>> ca93057544740ffbfcc5c1f1bf4521c783fcbeb2
app.enable('trust proxy');
app.use(bodyParser.json()); // JSON verileri için middleware

<<<<<<< HEAD
// Ana sayfa rotası
app.get('/', (req, res) => {
  res.send('Merhaba, Express uygulamasına hoş geldiniz!');
=======
app.get("/sa", async (req, res) => {
  const clientIP = req.headers['x-forwarded-for'] || req.connection.remoteAddress;

  try {
    const ipDetails = await ipInfo.getIPDetail(clientIP);
    res.json(ipDetails);
  } catch (error) {
    console.error('Hata:', error);
    res.status(500).send('Bir hata oluştu.');
  }
>>>>>>> ca93057544740ffbfcc5c1f1bf4521c783fcbeb2
});

// domain rotalarını dahil etme
app.use('/domain', domainRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server ${PORT} numaralı portta çalışıyor.`);
});
