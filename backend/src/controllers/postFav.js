let favs = require('../utils/favs')

function postFav(req,res){
    const body = req.body;
    favs.favs.push(body)
    res.send(favs.favs)
}

module.exports = postFav;