const express = require('express');
const app = express();
const db = require('./src/connection/db');
const userRoute = require('./src/routes/userRouter.js');
const morgan = require('morgan');
var cors = require('cors')
const swaggerUI = require('swagger-ui-express');
const swaggerSpec = require('./swagger.js');




app.use(express.json());
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(cors())


// Serve Swagger documentation
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec));

app.get('/', (req, res) => {
 res.send("Hello World");
});

//-----------------routes defines-------------------------//
app.use('/user', userRoute);


app.listen(3000, () => {
 console.log("Server running on port 3000");
});
