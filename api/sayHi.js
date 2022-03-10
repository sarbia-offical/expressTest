/*
 * @Description: 
 * @version: 
 * @Author: zouwenqin
 * @Date: 2022-03-10 11:51:10
 * @LastEditors: zouwenqin
 * @LastEditTime: 2022-03-10 11:53:33
 */
const express = require('express');
const router = express.Router();
router.get("/", async (req, res) => {
    try {
        res.json({
            status: 200,
            message: 'hello Vercel'
        })   
    } catch (error) {
        return res.status(500).send("Server error");
    }
})
module.exports = router;