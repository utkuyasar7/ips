const express = require('express');
const app = express();
const bodyParser = require('body-parser'); 
const domainRoutes = require('./routes/all'); 
const cors = require('cors');

app.use(bodyParser.json()); 
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
