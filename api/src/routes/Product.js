const { Router } = require("express");
const {  getAllProducts,findProduct,createProduct,editProduct,deleteProduct} = require('../controllers/Product')

const router = Router();

//Product Schema
/**
 * @swagger
 * components:
 *  schemas:
 *    Product:
 *      type: object
 *      properties:
 *        name:
 *          type: string
 *          description: the title of the product
 *        description:
 *          type: string
 *          description: the infomation about the product
 *        price:
 *          type: float
 *          description: the value of the product
 *        stock:
 *          type: integer
 *          description: the amount in DB of the product
 *      required: 
 *        - name
 *        - description
 *        - price
 *        - stock
 *      example:
 *        name: Agua
 *        description: its a bottle of water 
 *        price: 12.2
 *        stock: 2
 *        
 */

//get all Products
/**
 * @swagger
 * /product/all:
 *  get:
 *    summary: Return all products
 *    tags: [Product]
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
 *                    id: 1
 *                    name: agua
 *                    description: its a bottle of water
 *                    price: 12.2
 *                    stock: 12
 *                -
 *                    id: 2
 *                    name: pizza
 *                    description: its a little piece of pizza
 *                    price: 6.2
 *                    stock: 50
 */
router.get("/all", getAllProducts)

//view product
/**
 * @swagger
 * /product/view/{idProduct}:
 *  get:
 *    summary: Return the product by ID
 *    tags: [Product]
 *    parameters:
 *      - in: path
 *        name: idProduct
 *        schema:
 *          type: integer
 *        require: true
 *        example: 10
 *    responses:
 *      200:
 *        description: Product Found
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              example:
 *                id: 10
 *                name: agua
 *                description: its a bottle of water
 *                price: 12.2
 *                stock: 12
 *      404:
 *        description: Product Not Found
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                message:
 *                  type: string
 *                  description: message of process
 *                  example:  Product not found
 */
router.get("/view/:idProduct",findProduct)
//Product create
/**
 * @swagger
 * /product/create:
 *  post:
 *    summary: Create a new product
 *    tags: [Product]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            $ref: '#/components/schemas/Product'
 *    responses:
 *      200:
 *        description: Product Created
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              ref: '#/components/schema/Product'
 *            example:
 *              id: 10
 *              name: agua
 *              description: its a bottle of water
 *              price: 12.2
 *              stock: 12
 */
router.post("/create",createProduct)

//Product edit
/**
 * @swagger
 * /product/edit/{idProduct}:
 *  put:
 *    summary: Edit the Product
 *    tags: [Product]
 *    parameters:
 *      - in: path
 *        name: idProduct
 *        schema:
 *          type: integer
 *        require: true
 *        example: 10
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            $ref: '#/components/schemas/Product'
 *    responses:
 *      200:
 *        description: Product Created
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              ref: '#/components/schema/Product'
 *            example:
 *              id: 10
 *              name: agua
 *              description: its a bottle of water
 *              price: 12.2
 *              stock: 12
 *      404:
 *        description: Product Not Found
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                message:
 *                  type: string
 *                  description: message of process
 *                  example:  Product not found
 */
router.put("/edit/:idProduct",editProduct)

//Product delete
/**
 * @swagger
 * /product/edit/{idProduct}:
 *  delete:
 *    summary: Delete the Product
 *    tags: [Product]
 *    parameters:
 *      - in: path
 *        name: idProduct
 *        schema:
 *          type: integer
 *        require: true
 *        example: 10
 *    responses:
 *      200:
 *        description: Product Deleted Success
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                message:
 *                  type: string
 *                  description: message of process
 *                  example:  Product Deleted
 *      404:
 *        description: Product Not Found
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                message:
 *                  type: string
 *                  description: message of process
 *                  example:  Product Not Found
 */
router.delete("/delete/:idProduct",deleteProduct)

module.exports = router;
