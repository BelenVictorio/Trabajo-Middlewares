const admin = ['Greta', 'Ada', 'Vim', 'Tim'];


const accessAdmin = (req,res,next) => {

    if(!req.query.user){
        return res.redirect('/login')
    }

    if(admin.includes(req.query.user)){
        next()
    }
    return res.redirect('/noEntry')
}

module.exports = accessAdmin