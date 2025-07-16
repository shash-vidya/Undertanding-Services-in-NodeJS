// controllers/productController.js

const productService = require('../services/productService');

exports.getAllProducts = (req, res) => {
    const products = productService.getAllProducts();
    res.json(products);
};

exports.getProductById = (req, res) => {
    const { id } = req.params;
    const product = productService.getProductById(id);
    if (!product) {
        return res.status(404).send("Product not found");
    }
    res.json(product);
};

exports.addProduct = (req, res) => {
    const newProduct = req.body;
    const addedProduct = productService.addProduct(newProduct);
    res.status(201).json({
        message: "Product added successfully",
        product: addedProduct
    });
};
