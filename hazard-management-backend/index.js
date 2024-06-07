const express = require('express');
const connectDB = require('./Configs/db');
const users = require('./routes/users');
console.log('Users router:', users);
const auth = require('./routes/auth');
const register = require('./routes/register');
const hazards = require('./routes/hazards');
const risks = require('./routes/risks');
//const controls = require('./routes/controls');

const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: false }));


// Define Routes
app.use('/api/users', users);
app.use('/api/auth', auth);
app.use('/api/hazards', hazards);
app.use('/api/risks', risks);
//app.use('/api/controls', controls);
app.use('/api/register', register);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
