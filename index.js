/*
 * @Description: 
 * @version: 
 * @Author: zouwenqin
 * @Date: 2023-06-11 17:01:23
 * @LastEditors: zouwenqin
 * @LastEditTime: 2023-06-11 17:10:20
 */
// const express = require('express');
// const sayhi = require('./api/sayHi');
// const app = express();
// app.use(express.json({
//     extended: false
// }))
// app.use('/api/sayhi', sayhi);
// const PORT = process.env.PORT || 8080;
// app.listen(PORT, () => {
//     `Server is running in port ${PORT}`
// })
const {serveApi} = require('./server');
serveApi();