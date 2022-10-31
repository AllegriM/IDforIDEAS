const { Router } = require("express");
const {
  registerUser,
  loginUser,
  resetPassword,
  getAllUsers,
} = require("../Controllers/User");
const router = Router();

//User Schema
/**
 * @swagger
 * components:
 *  schemas:
 *    User:
 *      type: object
 *      properties:
 *        email:
 *          type: string
 *          description: The user email
 *        password:
 *          type: string
 *          description: The user password(will be encrypted)
 *        isAdmin:
 *          type: boolean
 *          description: The user have admin permission(default in false)
 *      required:
 *        - email
 *        - password
 *      example:
 *        email: Alan@email.com
 *        password: alanpassword
 *        isAdmin: false
 */

//User Register
/**
 * @swagger
 * /user/register:
 *  post:
 *    summary: Register a new user
 *    tags: [User]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            $ref: '#/components/schemas/User'
 *            example:
 *              email: Alan@email.com
 *              password: alanpassword
 *              isAdmin: false
 *    responses:
 *      201:
 *        description: Product Found
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                email:
 *                  type: string
 *                  description: Email of the user
 *                  example: Alan@email.com
 *                isAdmin:
 *                  type: string
 *                  description: The user is Admin?
 *                  example: false
 *
 */
router.post("/register", registerUser);

//User Login
/**
 * @swagger
 * /user/login:
 *  post:
 *    summary: User Login
 *    tags: [User]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            $ref: '#/components/schemas/User'
 *            example:
 *              email: Alan@email.com
 *              password: alanpassword
 *    responses:
 *      200:
 *        description: User logged
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                email:
 *                  type: string
 *                  description: Email of the user
 *                  example: Alan@email.com
 *                isAdmin:
 *                  type: boolean
 *                  description: The user is Admin?
 *                  example: false
 *                accessToken:
 *                  type: string
 *                  description: token of jwt (is lacking implementation)
 *                  example: asdetgasd1iwnasdfoije-sdliwan
 *      400:
 *        description: Invalid Password
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                message:
 *                  type: string
 *                  description: message of process
 *                  example:  Invalid Password
 *      404:
 *        description: Email Not found
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                message:
 *                  type: string
 *                  description: message of process
 *                  example:  Email not found
 */
router.post("/login", loginUser);

//User reset password
/**
 * @swagger
 * /user/resetpassword:
 *  put:
 *    summary: Reset password of the user
 *    tags: [User]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              email:
 *                type: string
 *                description: User email
 *              password:
 *                type: string
 *                description: User new password
 *            example:
 *              email: Alan@email.com
 *              password: newpassword
 *    responses:
 *      200:
 *        description: Password changed
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                message:
 *                  type: string
 *                  description: the result of the operation
 *                  example: Password changed
 *      404:
 *        description: Email Not found
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                message:
 *                  type: string
 *                  description: message of process
 *                  example:  Email not found
 */
router.put("/resetpassword/", resetPassword);

//Get all Users
/**
 * @swagger
 * /user/all:
 *  get:
 *    summary: Return all users
 *    tags: [User]
 *    responses:
 *      200:
 *        description: All Users
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                type: object
 *              example:
 *                -
 *                    email: test@mail.com
 *                    isAdmin: false
 *                -
 *                    email: test2@mail.com
 *                    isAdmin: true
 *
 */
router.get("/all", getAllUsers);

module.exports = router;
