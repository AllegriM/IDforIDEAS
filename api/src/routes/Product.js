const { Router } = require("express");
const { Product } = require("../db");

const router = Router();

router.post("/create", async (req, res, next) => {
  const { name,description,price,stock } = req.body;

  try {
    const newProduct = await Product.create({ name,description,price,stock });
    return res.send(newProduct);
  } catch (error) {
    next(error);
  }
});


router.get("/view/:idProduct", async (req, res, next) => {
  let { idProduct } = req.params;
  try {
    const productFound = await Product.findByPk(idProduct);
    if (!productFound) {
        return res.status(404).json({"message":"Product not found"})
    }
    return res.status(200).send(productFound);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
