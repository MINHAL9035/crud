const loadLogin=async(req,res)=>{
    try {
        res.render('login')
    } catch (error) {
        console.log(error);
    }
}
const loadSignUp=async(req,res)=>{
    try {
        res.render('signUp')
    } catch (error) {
        console.log(error);
    }
}


module.exports={
    loadLogin,
    loadSignUp
}