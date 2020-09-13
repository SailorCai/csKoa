/*
 * @Author: SailorCai
 * @Date: 2020-09-13 11:07:37
 * @LastEditors: SailorCai
 * @LastEditTime: 2020-09-13 16:41:23
 * @FilePath: /CsKoa/test/test.js
 */
const Koa = require("../src/koa.js");

const app = new Koa();

app.use(async (ctx, next) => {
  ctx.body = "1";
  await next();
  ctx.body += "5";
});

app.use(async (ctx, next) => {
  ctx.body += "2";
  await next();
  ctx.body += "4";
});

const sleep = () => new Promise((resolve, reject) => setTimeout(resolve, 2000));

app.use(async (ctx, next) => {
  await sleep();
  ctx.body += "3";
  next();
});

app.listen(3000, (err) => {
  console.log("server run in port: 3000");
});
