const mongoose = require('mongoose');
const orderSchema = mongoose.Schema({
	product: {type: mongoose.Schema.Types.ObjectId, ref: 'Product'},
	user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}
	
});
module.exports=mongoose.model('Order', orderSchema);