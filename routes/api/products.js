const router = require('express').Router();

const Product = require('../../models/product.model');

router.get('/', async (req, res) => {
    try {
        const result = await Product.find().populate('owner');
        res.json(result);
    } catch (error) {
        res.json({ fatal: error.message });
    }
});

router.get('/actives', async (req, res) => {


    try {
        const products = await Product.actives();
        res.json(products);

    } catch (error) {

        res.json({ fatal: error.message })
    }



});

router.get('/:productId', async (req, res) => {
    const { productId } = req.params;

    try {
        // const result = await Product.find({ _id: productId });
        const result = await Product.findById(productId);

        res.json(result);
    } catch (error) {
        res.json({ fatal: error.message });
    }
});

router.post('/', async (req, res) => {
    try {
        const result = await Product.create(req.body);
        res.json(result);
    } catch (error) {
        res.json(error.message);
    }
});

router.put('/:productId', async (req, res) => {
    const { productId } = req.params;

    const result = await Product.findByIdAndUpdate(productId, req.body, { new: true });
    res.json(result);
});

router.delete('/:productId', async (req, res) => {
    const { productId } = req.params;

    try {
        const result = await Product.findByIdAndDelete(productId);
        res.json(result);
    } catch (error) {
        res.json({ fatal: error.message });
    }
});


module.exports = router;