let favs = require('../utils/favs')

function deleteFav(req,res){
    const id = req.params.id
    favs.favs = favs.favs.filter(ele => ele.id != id)
    res.send(favs.favs)
}

module.exports = deleteFav;
