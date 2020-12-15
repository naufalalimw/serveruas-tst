const { 
    createUser,
    getSaldo,
    deleteAkun,
    tambahSaldo
 } = require("../helper/saldo.helper")

//create user baru
exports.createUser = (req, res) => {
    console.log(req.body.NIM, req.body.nama, req.body.saldo)
    if (
        req.body.NIM && req.body.nama && req.body.saldo
    ) {
        createUser(
            req.body.NIM,
            req.body.nama,
            req.body.saldo
        )
        .then(
            result => {
                // res.status(201).send({
                //     message : 'User created!'
                // })
                res.status(201).json({
                    "message" : 'User created!'
                })
            },
            err => {
                res.status(500).send({
                  message: err.message
                })
              }
        )
        .catch(err => {
            res.status(500).send({
              message: err.message
            })
          })
    } else {
        res.status(400).send({
            message :'Required body not found'
        })
    }
}

//get saldo
exports.getSaldoUser = (req,res) => {
    var NIM = req.params.nim;
    var Nama = req.params.nama
    console.log(NIM,Nama)
    // res.json('jancok')
    if (
        NIM && Nama
        // req.body.NIM && req.body.Nama
    ) { 
        getSaldo(
            NIM, Nama
            // req.body.NIM, req.body.Nama
        )
        .then(
            saldo => {
                if (JSON.stringify(saldo) !== 'null') {
                    res.status(200).json(saldo.Saldo)
                } else {
                    res.status(404).send({
                        message : 'User Not Found, Please Register First!'
                    })
                }
            },
            err => {
                res.status(500).send({
                    message : err.message
                })
            }
        )
        .catch(err => {
            res.status(500).send({
              message: err.message
            })
          })
    }
}

//delete akun
exports.deleteUser = (req, res) => {
    if (
        req.body.NIM && req.body.nama
    ) {
        deleteAkun(
            req.body.NIM,
            req.body.nama,
        )
        .then(
            result => {
                res.status(201).send({
                    message : 'User deleted!'
                })
            },
            err => {
                res.status(500).send({
                  message: err.message
                })
              }
        )
        .catch(err => {
            res.status(500).send({
              message: err.message
            })
          })
    } else {
        res.status(400).send({
            message :'Required body not found'
        })
    }
}

//tambah saldo
exports.addSaldoUser = (req,res) => {
    if (
        req.body.NIM && req.body.nama && req.body.saldo
    ) { 
        tambahSaldo(
            req.body.NIM,
            req.body.nama,
            req.body.saldo
        )
        .then(
            sisa => {
                if (JSON.stringify(sisa) !== 'null') {
                    res.status(200).send({
                        message : 'SAldo Updated!'
                    })
                } else {
                    res.status(404).send({
                        message : 'User Not Found, Please Register First!'
                    })
                }
            },
            err => {
                res.status(500).send({
                    message : err.message
                })
            }
        )
        .catch(err => {
            res.status(500).send({
              message: err.message
            })
          })
    }
}
