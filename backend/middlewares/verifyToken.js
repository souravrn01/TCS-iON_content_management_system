const jwt = require('jsonwebtoken')

function verifyToken(req, res, nxt){
    if (!req.headers.Authorization) {
        return res.status(401).send('Unauthorized request'); 
    }
    let token = req.headers.Authorization.split(' ')[1];
    if (token == 'null') {
        return res.status(401).send('Unauthorized request');
    }
    let payload = jwt.verify(token , 'secretKey');
    console.log("payload=", payload);
    if (!payload) {
        return res.status(401).send('Unauthorized request');
    }
    console.log("payload.subject=", payload.subject);

    req.userId = payload.subject;
    next();

}
module.exports = verifyToken