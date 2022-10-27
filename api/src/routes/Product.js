const { Router } = require("express");
const { Product } = require("../db");

const router = Router();

router.get("/all", async (req, res, next) => {
  try {
    const allProducts = await Product.findAll();
    return res.status(200).json({ result: allProducts });
  } catch (error) {
    next(error);
  }
});

router.get("/view/:idProduct", async (req, res, next) => {
  let { idProduct } = req.params;
  try {
    const productFound = await Product.findByPk(idProduct);
    if (!productFound) {
      return res.status(404).json({ result: "Product Not Found" });
    }
    return res.status(200).json({ result: productFound });
  } catch (error) {
    next(error);
  }
});

router.post("/create", async (req, res, next) => {
  const { name, description, price, stock } = req.body;

  try {
    const newProduct = await Product.create({
      name,
      description,
      price,
      stock,
    });
    return res.status(201).json({ result: newProduct });
  } catch (error) {
    next(error);
  }
});

router.put("/edit/:idProduct", async (req, res, next) => {
  const { idProduct } = req.params;
  const { stock, name, description, price } = req.body;

  try {
    let productFound = await Product.findByPk(idProduct);
    if (productFound) {
      await productFound.set({ stock, name, description, price });
      productFound.save();
      return res.json({ result: productFound });
    } else {
      return res.json({ result: "Product Not Found" });
    }
  } catch (error) {
    next(error);
  }
});

router.delete("/delete/:idProduct", async (req, res, next) => {
  const { idProduct } = req.params;

  try {
    const productFound = await Product.findByPk(idProduct);
    if (productFound) {
      await productFound.destroy();
      return res.json({ result: "Product Deleted" });
    } else {
      return res.json({ result: "Product Not Found" });
    }
  } catch (error) {
    next(error);
  }
});

module.exports = router;
