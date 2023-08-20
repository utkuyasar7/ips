const express = require('express');
const app = express();
const bodyParser = require('body-parser'); 
const domainRoutes = require('./routes/all'); 
const cors = require('cors');

app.use(bodyParser.json()); 

// CORS ayarlarını özelleştirme
const corsOptions = {
  origin: 'http://localhost:3000',
  methods: 'GET,POST',
  optionsSuccessStatus: 200
};
app.use(cors(corsOptions)); 


app.get('/', (req, res) => {
  res.send('Merhaba, Express uygulamasına hoş geldiniz!');
});


app.use('/domain', domainRoutes);

const PORT = process.env.PORT || 3005;
app.listen(PORT, () => {
  console.log(`Server ${PORT} numaralı portta çalışıyor.`);
});
