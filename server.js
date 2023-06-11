/*
 * @Description: 
 * @version: 
 * @Author: zouwenqin
 * @Date: 2022-03-09 22:28:51
 * @LastEditors: zouwenqin
 * @LastEditTime: 2023-06-11 17:40:47
 */
const express = require('express');
const sayHi = require('./api/sayHi');
const product = require('./api/product');
async function constructorServer(){
    const app = express();
    app.use(express.json({ extended: false }));
    app.use('/api/sayHi', sayHi);
    app.use('/api/product', product)
    return app;
}
async function serveApi(options = {}){
    const port = Number(options.port || process.env.PORT || '8080')
    const host = options.host || process.env.HOST || ''
    const servePromise = constructorServer();
    const [app] = await Promise.all([servePromise]);
    const appExt = app;
    app.listen(port, host, () => {
        console.log(`server running @ http://${host ? host : 'localhost'}:${port}`);
    })
}
module.exports = {
    serveApi
}