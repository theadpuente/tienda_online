const router = require('express').Router();

const User = require('../../models/user.model');


router.get('/', async (req, res) => {
    try {
        const users = await User.find().populate('products');

        res.json(users);
    }

    catch (error) {
        res.json({ fatal: error.message })
    }
});

router.get('/:userId/cart/add/:productId', async (req, res) => {

    const { userId, productId } = req.params;

    try {
        const user = await User.findById(userId);
        user.products.push(productId)

        await user.save();
        res.json(user);


    } catch (error) {

        res.json({ fatal: error.message })
    }


})


router.get('/cart/userId', async (req, res) => {

    const { userId } = req.params;

    const user = await User.findById(userId).populate('products');

    res.json(user.products);

})



router.post('/', async (req, res) => {

    try {
        const user = await User.create(req.body);
        res.json(user);
    } catch (error) {
        res.json({ fatal: error.message });
    }
})


router.put('/:userId', async (req, res) => {

    const { userId } = req.params;

    try {

        const user = await User.findByIdAndUpdate(userId, req.body, { new: true })
        res.json(user);

    } catch {

        res.json({ fatal: error.message });
    }
})

router.delete('/:userId', async (req, res) => {

    const { userId } = req.params;

    try {

        const user = await User.findOneAndDelete(userId);
        res.json(user);

    } catch (error) {

        res.json({ error: error.message });
    }
})



module.exports = router;

