const { Router } = require("express");
const {  getAllProducts,findProduct,createProduct,editProduct,deleteProduct} = require('../controllers/Product')

const router = Router();

router.get("/all", getAllProducts)
router.get("/view/:idProduct",findProduct)
router.post("/create",createProduct)
router.put("/edit/:idProduct",editProduct)
router.delete("/delete/:idProduct",deleteProduct)

module.exports = router;
