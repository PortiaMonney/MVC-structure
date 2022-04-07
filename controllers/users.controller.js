
const userLogin = (req, res)=> {
    res.send("<h1>Login Successful</h1>")
};

const userRegister = (req, res) =>{
    res.send("<h1>Resgistration Successful</h1>")
}

module.exports ={
    userLogin,
    userRegister,
};