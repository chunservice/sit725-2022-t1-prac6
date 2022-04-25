const getUser = (req,res) =>{
    res.json({statusCode: 200, message:"Success", data: {"name": "Chun", "gender": "male"}})
}

module.exports = {
    getUser
} 