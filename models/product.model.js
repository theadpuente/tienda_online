const { model, Schema } = require('mongoose');

const productSchema = new Schema({
    name: String,
    description: String,
    price: Number,
    department: String,
    stock: Number,
    available: Boolean,
    owner: {

        type: Schema.Types.ObjectId, ref: 'user'
    }
}, {

    toJSON: { virtuals: true },
    toObject: { virtuals: true },
    timestamps: true
});



productSchema.virtual('price_tax').get(function () {

    return this.price * 1.21;
});


productSchema.virtual('price_tax').set(function (newvalue) {

    this.price = newValue / 1.21;
});


productSchema.statics.actives = function () {

    return model('product').find({

        available: true,
        stock: { $gt: 0 }
        
    });
}

module.exports = model('product', productSchema);

