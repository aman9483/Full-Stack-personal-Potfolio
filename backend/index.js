const express = require('express');
const dotenv = require('dotenv').config();
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

const contactRoutes = require('./router/conatct'); 

const PORT = process.env.BACKENDPORT || 5000;
const mongoURI = process.env.MongoDBURL;

app.use(express.json());

app.use(cors());

app.get('/', (req, res) => {

  
  res.send("hello contact bro");
});

app.use('/api/contactMe', contactRoutes);

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB successfully');
  })
  .catch(err => {
    console.error('Error connecting to MongoDB:', err);
  });

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
