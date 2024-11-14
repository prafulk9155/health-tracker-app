const express = require('express');
const router = express.Router();

const userController = require('../controller/userController');

// routes/auth.js
// const express = require('express');
// const router = express.Router();
// const userController = require('../controllers/userController');

/**
 * @swagger
 * components:
 *   schemas:
 *     UserData:
 *       type: object
 *       required:
 *         - username
 *         - email
 *         - password
 *         - role
 *       properties:
 *         username:
 *           type: string
 *           description: User's username
 *           example: admin
 *         email:
 *           type: string
 *           format: email
 *           description: User's email address
 *           example: admin@test.com
 *         password:
 *           type: string
 *           format: password
 *           description: User's password
 *           example: Shared@123
 *         role:
 *           type: string
 *           description: User's role
 *           example: user
 *           enum: [user, admin]
 *     RegisterRequest:
 *       type: object
 *       required:
 *         - data
 *       properties:
 *         data:
 *           $ref: '#/components/schemas/UserData'
 */

/**
 * @swagger
 * tags:
 *   name: Authentication
 *   description: User authentication endpoints
 */

/**
 * @swagger
 * /user/register:
 *   post:
 *     tags: [Authentication]
 *     summary: Register a new user
 *     description: Create a new user account with the provided credentials
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/RegisterRequest'
 *           example:
 *             data:
 *               username: "test"
 *               password: "Shared@123"
 *               email: "test1@test.com"
 *               role: "user"
 */
router.post('/register', userController.register);

// module.exports = router;
router.post('/login', userController.login);

module.exports = router;