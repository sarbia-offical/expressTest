/*
 * @Description: 
 * @version: 
 * @Author: zouwenqin
 * @Date: 2023-06-11 17:21:26
 * @LastEditors: zouwenqin
 * @LastEditTime: 2023-06-11 17:26:58
 */
const express = require('express');
const router = express.Router();
module.exports = router.get("/", async (req, res) => {
    try {
        res.json({
            status: 200,
            message: 'SUCCESS',
            obj: new Array(100).fill({}).map((ele, index) => ({name: `xxx${index}`, id: index}))
        })     
    } catch (error) {
        return res.status(500).send("Server error");
    }
});