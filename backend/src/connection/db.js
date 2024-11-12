const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/health-tracker', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Database connection successful");
}).catch((err) => {
    console.log(err);
})