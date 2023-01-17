const mongoose = require('mongoose');
const productSchema = mongoose.Schema({
	name: String,
	price: Number,
	type: String
});
module.exports=mongoose.model('Product', productSchema);