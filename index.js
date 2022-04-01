const express = require('express');
const sayhi = require('./api/sayHi');
const app = express();
app.use(express.json({
    extend: false
}))
app.use('/api/product', sayhi);
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    `Server is running in port ${PORT}`
})