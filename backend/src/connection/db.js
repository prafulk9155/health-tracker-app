const mongoose = require('mongoose');
require('dotenv').config();

if (!process.env.MONGODB_URI) {
    console.error("Error: MONGODB_URI is not defined in environment variables.");
    process.exit(1); // Exit the process with a failure code
  }
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Database connection successful");
}).catch((err) => {
    console.log(err);
})


console.log("MONGODB_URI:", process.env.MONGODB_URI);
