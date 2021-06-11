const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    id: { type: Number, required: true },
    name: { type: String, required: true },
    role: { type: Number, required: true },
});
module.exports = mongoose.model('User', userSchema);
