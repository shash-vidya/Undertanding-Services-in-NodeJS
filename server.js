const express = require('express');
const app = express();
const PORT = 4401;

app.use(express.json());

// Logger for debugging
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

// Correct import path
const productRoutes = require('./routes/productRoutes');
app.use('/products', productRoutes);

// 404 handler
app.use((req, res) => {
    res.status(404).send("Page not found");
});

app.listen(PORT, () => {
    console.log(`Server running on port http://localhost:${PORT}`);
});