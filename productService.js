let products = [
    { id: 1, name: "Laptop", price: 1500 },
    { id: 2, name: "Phone", price: 800 },
    { id: 3, name: "Tablet", price: 600 }
];

const getAllProducts = () => {
    return products;
};

const getProductById = (id) => {
    return products.find(p => p.id === parseInt(id));
};

const addProduct = (product) => {
    products.push(product);
    return product;
};

module.exports = {
    getAllProducts,
    getProductById,
    addProduct
};
