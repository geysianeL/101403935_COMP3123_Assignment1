const express = require('express');
const mongoose = require('mongoose');
const app = express();
const userRoutes = require('./routes/userRoutes');
const employeeRoutes = require('./routes/employeeRoutes');

app.use(express.json());

app.use('/api', userRoutes);
app.use('/api', employeeRoutes);

const port = 3000;
const mongoUri = process.env.MONGO_URI;

mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB', err));
  
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});