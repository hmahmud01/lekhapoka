module.exports = app => {
    const express = require("express")
    const { v4: uuidv4 } = require("uuid")
    const bcrypt = require("bcrypt")
    const db = require("../../models")
    const { hashSync } = require("bcrypt")
    const User = db.user

    const authRoute = express.Router();

    authRoute.post('/register', async(req, res, next) => {
        console.log(req.body)

        try {
            const { phone, name, password, usertype } = req.body
            const status = true
            let data = {
                phone: phone,
                name: name, 
                password: hashSync(password, 12),
                usertype: usertype,
                status: status
            }

            const user = await User.create(data)
            let msg = "User Created Successfully"
            res.json({
                status: "success",
                message: msg
            })
        } catch (err) {
            console.log(err)
            res.json({
                status: "failed",
                message: "ERROR IN USER CREATING"
            })
        }
    })

    authRoute.post('/login', async(req, res, next) => {
        try {
            const { phone, password } = req.body

            const user = await User.findOne({
                where: {
                    phone: phone
                }
            })

            const validatepassword = await bcrypt.compare(password, user.password)

            if (!validatepassword) {
                res.status(403).json({
                    status: "failed",
                    message: "INVALID PASSORD"
                })
            }else{
                console.log("LOGIN SUCCESS")
                res.json({
                    status: "success",
                    phone: phone,
                    uuid: user.uuid,
                    name: user.name
                })
            }

        } catch (err) {
            console.log(err)
            res.json({
                status: "failed",
                message: "ERROR LOGIN WITH THE PHONE NUMBER"
            })
        }
    })

    app.use('/', authRoute)
}