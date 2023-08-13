require('dotenv').config()
const { verify } = require('jsonwebtoken')

const checkJWTSign = async (req,res,next) => {
    const { headers:{ authorization } } = req
    console.log(authorization);
    if (authorization){
        const token = authorization.split(' ')[1]

        verify(token, process.env.JWT_SECRET,(err) => {
            if(err){
                res.status(403).send({
                    message: "Пользователь не авторизован",
                })
                return next();
            }
        })
        return next()
    }

    return res.status(403).send({
        message: "Пользователь не найден"
    })


}
module.exports = checkJWTSign
