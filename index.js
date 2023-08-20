const express = require('express');
const app = express();
const bodyParser = require('body-parser'); // Gelen istek verilerini analiz etmek için
const domainRoutes = require('./routes/all'); // domain rotalarını içeren dosya
const cors = require('cors');
app.enable('trust proxy');
app.use(bodyParser.json()); // JSON verileri için middleware
app.use(cors());
// Ana sayfa rotası
app.get('/', (req, res) => {
  res.send('Merhaba, Express uygulamasına hoş geldiniz!');
});

// domain rotalarını dahil etme
app.use('/domain', domainRoutes);

const PORT = process.env.PORT || 3005;
app.listen(PORT, () => {
  console.log(`Server ${PORT} numaralı portta çalışıyor.`);
});
