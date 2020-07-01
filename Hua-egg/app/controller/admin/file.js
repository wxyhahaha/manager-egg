'use strict';

const Controller = require('egg').Controller;
const fs = require('fs');
const path = require('path');
const awaitWriteStream = require('await-stream-ready').write;
const sendToWormhole = require('stream-wormhole');

class FileController extends Controller {
    async get(){
        const ctx = this.ctx;
        const stream = await ctx.getFileStream();
        // 文件名:随机数+时间戳+原文件后缀
        // path.extname(stream.filename).toLocaleLowerCase()为后缀名（.jpg,.png等）
        console.log(stream)
        const filename = Math.random().toString(36).substr(2) + new Date().getTime() + path.extname(stream.filename).toLocaleLowerCase();
        // 图片存放在静态资源public/img文件夹下
        console.log(filename)
        const target = path.join(this.config.baseDir, 'app/public/img', filename);
        
        // const target = path.join('http://47.100.57.39:7001', 'app/public/img', filename);
        // 生成一个文件写入 文件流
        const writeStream = fs.createWriteStream(target);
        try {
            // 异步把文件流 写入
            await awaitWriteStream(stream.pipe(writeStream));
        } catch (err) {
            // 如果出现错误，关闭管道
            await sendToWormhole(stream);
            throw err;
        }
        this.ctx.body = {
          code: 0,
          data: filename,
          msg: ''
        };
    }
}

module.exports = FileController;
