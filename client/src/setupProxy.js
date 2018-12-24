const proxy = require('http-proxy-middleware');
 
module.exports = function(app) {
    app.use(proxy('/auth/google', { target: 'http://localhost:5000' }))
}

//"http-proxy-middleware": "^0.19.1", - under package.json dependencies