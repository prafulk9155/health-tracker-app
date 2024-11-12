const express = require('express');
const app = express();
const db = require('./src/connection/db');
const userRoute = require('./src/router/userRouter');
const morgan = require('morgan');




app.use(express.json());
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
 res.send("Hello World");
});

//-----------------routes defines-------------------------//
app.use('/user', userRoute);


app.listen(3000, () => {
 console.log("Server running on port 3000");
});
