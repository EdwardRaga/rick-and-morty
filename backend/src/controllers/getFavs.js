const favs = require('../utils/favs')

function getFav(req,res){
    res.send(favs.favs)
}

module.exports = getFav;