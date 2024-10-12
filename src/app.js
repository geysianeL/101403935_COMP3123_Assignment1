const express = require('express');
const mongoose = require('mongoose');
const app = express();
const userRoutes = require('./routes/userRoutes');
const employeeRoutes = require('./routes/employeeRoutes');
const healthRoutes = require('./routes/healthRoutes');

app.use(express.json());

app.use('/api', userRoutes); //user routes
app.use('/api', employeeRoutes); //employee routes
app.use('/api', healthRoutes); // health check routes 

const port = 3000; // default port for nodejs

// consider if the app is running on docker compose or as dev machine 
// when running docker compose, the env variable MONGO_URI will be filled
// when run `npm run dev` or `npm start`, the env MONGO_URI variable will not exists
const mongoUri = process.env.MONGO_URI || "mongodb://localhost:27017/comp3123Employees";

// check if mongo db is running and connected
mongoose.connect(mongoUri)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB', err));

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});