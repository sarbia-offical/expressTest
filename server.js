/*
 * @Description: 
 * @version: 
 * @Author: zouwenqin
 * @Date: 2022-03-09 22:28:51
 * @LastEditors: zouwenqin
 * @LastEditTime: 2022-03-09 22:51:04
 */
const express = require('express');
async function constructorServer(){
    const app = express();
    app.get('/api/show', (req, res) => {
        res.writeHead(200, { 'Content-type': 'application/json' });
        res.end(JSON.stringify({
            code: 200,
            result: 'Hello Vercel'
        }))
    })
    return app;
}
async function serveApi(options){
    const port = Number(options.port || process.env.PORT || '3000')
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