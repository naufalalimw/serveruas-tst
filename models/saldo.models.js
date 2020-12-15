const mongoose = require('mongoose')
// const autoIncrement = require('mongoose-auto-increment')

const saldoSchema = new mongoose.Schema({
    NIM : String,
    Nama : String,
    Saldo : Number 
});

var saldo = mongoose.model('saldo', saldoSchema) ;
module.exports = saldo