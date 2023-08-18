const express = require('express');
const app = express();
const bodyParser = require('body-parser'); // Gelen istek verilerini analiz etmek için
const domainRoutes = require('./routes/domainRoutes'); // domain rotalarını içeren dosya

app.enable('trust proxy');
app.use(bodyParser.json()); // JSON verileri için middleware

// Ana sayfa rotası
app.get('/', (req, res) => {
  res.send('Merhaba, Express uygulamasına hoş geldiniz!');
});

// domain rotalarını dahil etme
app.use('/domain', domainRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server ${PORT} numaralı portta çalışıyor.`);
});
