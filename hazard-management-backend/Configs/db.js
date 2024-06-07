const mongoose = require('mongoose');
const config = require('config');
//const jwtSecret = config.get('jwtSecret');



console.log('Config sources:', config.util.getConfigSources());

const db = config.get('mongoURI');

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
