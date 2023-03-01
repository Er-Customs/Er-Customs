const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const schema = mongoose.schema

const paymentSchema = new mongoose.Schema({
    selectionofcardtype: {
        type: String,
    },
    cardno: {
        type: String,
        required: true
    },
    expirydate: {
        type: String,
    },
    cvv: {
        type: String,
        required: true
    }
})

paymentSchema.pre('save', async function (next) {
    const user = this;
    if (!user.isModified('cardno')) {
        return next();
    }
    const salt = await bcrypt.genSalt(10);
    const hashedcardno = await bcrypt.hash(user.cardno, salt);
    user.cardno = hashedcardno;
    next();
});
paymentSchema.pre('save', async function (next) {
    const user1 = this;
    if (!user1.isModified('cvv')) {
        return next();
    }
    const salt = await bcrypt.genSalt(10);
    const hashedcvv = await bcrypt.hash(user1.cvv, salt);
    user1.cvv = hashedcvv;
    next();
});
const payment = mongoose.model('payment_details', paymentSchema)
module.exports = payment;