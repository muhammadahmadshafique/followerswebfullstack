// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require("cors")

const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth');

const app = express();
const port = 3001;

app.use(bodyParser.json());

// app.use(cors({
//   origin: ['http://localhost:3000'],
//   credentials: true
// }));
require("dotenv").config();


// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>console.log("Database has been connected"))
.catch((error)=>console.log(`Error in database ${error}`))

const allowedOrigins = [
  'https://followerstudio.fr/',
  'http://followerstudio.fr/',
  // Add more origins as needed
];

const corsOptions = {
  origin: allowedOrigins,
  credentials: true, // Include credentials (e.g., cookies) in cross-origin requests
};

app.use(cors(corsOptions));

// Use the auth routes
app.use('/api/auth', authRoutes);

//write test api
app.get('/api/test', (req, res) => {
  res.json('Hello World!')
})
app.get('/api/ahmad', (req, res) => {
  res.send('Hello, World!');
});


// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ok ===> ${port}`);
});
