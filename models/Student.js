const mongoose = require('mongoose');
const schema = mongoose.Schema;

const StudentSchema = new mongoose.Schema({
    rollNo:{type:Number},
    name:{type:String},
    fatherName:{type:String},
    adharCardNo:{type:String},
    mobileNo:{type:String}
})
module.exports = mongoose.model('Student',StudentSchema)