import mongoose, { Schema } from "mongoose";

const cartSchema = new Schema({
  id: Number,
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  products: [{
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product'
    },
    id: Number,
    quantity: Number
  }],
}, {
  versionKey: false
});

const Cart = mongoose.model('Cart', cartSchema);

export default Cart;