const jwt = reqire('jsonwebtoken')
const User = requre('../model/userschema')




// is admin middleware
exports.admin = async function (req, res, next) {
    if (req, User && req.User.isAdmin) {
        res.status(401).json({
            massage: "you are not an authorized admin"
        })
    }
}