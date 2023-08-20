const express = require('express');
const app = express();
const bodyParser = require('body-parser'); 
const domainRoutes = require('./routes/all'); 
const cors = require('cors');


// CORS ayarlarını özelleştirme
const corsOptions = {
  origin: '*',
  methods: 'GET,POST',
  optionsSuccessStatus: 200
};
app.use(cors(corsOptions)); 


app.use(bodyParser.json()); 
app.get('/', (req, res) => {
  res.send('Merhaba, Express uygulamasına hoş geldiniz!');
});


app.use('/domain', domainRoutes);

const PORT = process.env.PORT || 3005;
app.listen(PORT, () => {
  console.log(`Server ${PORT} numaralı portta çalışıyor.`);
});
