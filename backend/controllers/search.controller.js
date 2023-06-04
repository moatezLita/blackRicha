// controllers/searchController.js
const ProductService = require('../services/product.service');


exports.searchProducts = async (req, res) => {
    try {
        const searchTerm = req.query.term;
        if (!searchTerm) {
            return res.status(400).json({ message: "Search term is required." });
        }
        // call service method to fetch filtered results based on provided term from database
        const products = await ProductService.searchProducts(searchTerm);
        return res.json(products);
    } catch (error) {
        console.error(error.message);
        return res.status(500).json({ message: 'Something went wrong.' });
    }
};