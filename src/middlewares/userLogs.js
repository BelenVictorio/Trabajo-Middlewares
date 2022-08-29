const fs = require('fs');
const path = require('path');

// El usuario ingresó a la ruta: ____
const userLogs = (req,res,next) => {
    fs.appendFileSync(
        path.resolve(__dirname, '..', 'logs', 'userLogs.txt'), "El usuario ingresó a la ruta " + req.url  + '\n')
        next()
}


module.exports = userLogs