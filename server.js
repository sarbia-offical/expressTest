/*
 * @Description: 
 * @version: 
 * @Author: zouwenqin
 * @Date: 2022-03-09 22:28:51
 * @LastEditors: zouwenqin
 * @LastEditTime: 2022-03-10 11:54:20
 */
const express = require('express');
const sayHi = require('./api/sayHi');
async function constructorServer(){
    const app = express();
    app.use(express.json({ extended: false }));
    app.use('/api/sayHi', sayHi);
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