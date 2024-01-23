
exports.register = (req, res, next) => {
    const {email, password} = req.body;

    // logic

    res.json({email, password, message: "Register"});
};

exports.login = (req, res, next) => {
    res.json({message : "Login"});
};

exports.forgetPassword = (req, res, next) => {
    res.json({message : "Forget Password"});
}

exports.varifyForgetPassword = (req, res, next) => {
    res.json({message : "Varify Forget Password"});
}

exports.resetPassword = (req, res, next) => {
    res.json({message : "Reset Password"});
}