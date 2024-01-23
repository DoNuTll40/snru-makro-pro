
exports.register = (req, res, next) => {
    const {email, password} = req.body;

    // logic

    res.json({email, password, message: "Register"});
};

exports.login = (req, res, next) => {
    const {email, password} = req.body;
    res.json({ email, password });
};

exports.forgetPassword = (req, res, next) => {
    const {email} = req.body;
    res.json({email});
}

exports.varifyForgetPassword = (req, res, next) => {
    const { token } = req.params;
    res.json({ token });
}

exports.resetPassword = (req, res, next) => {
    const { token } = req.params;
    const { password } = req.body;
    res.json({ token, password});
}