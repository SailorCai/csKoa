/*
 * @Author: SailorCai
 * @Date: 2020-09-13 11:03:15
 * @LastEditors: SailorCai
 * @LastEditTime: 2020-09-13 17:33:58
 * @FilePath: /CsKoa/src/koa.js
 */
const http = require("http");

const context = require("./context.js");
const request = require("./request.js");
const response = require("./response.js");

class Koa {
  // 初始化中间件数组
  constructor() {
    this.middlewares = [];
  }

  listen(...args) {
    const server = http.createServer(async (req, res) => {
      // this.callback(req, res);

      // 创建上下文
      const ctx = this.createContext(req, res);
      // this.callback(ctx);

      // 中间件组合
      const fn = this.compose(this.middlewares);
      await fn(ctx);

      // 响应
      res.end(ctx.body);
    });

    server.listen(...args);
  }

  use(middleware) {
    this.middlewares.push(middleware);
  }

  /**
   * 构建上下文
   */
  createContext(req, res) {
    const ctx = Object.create(context);
    ctx.request = Object.create(request);
    ctx.response = Object.create(response);

    ctx.req = ctx.request = req;
    ctx.res = ctx.response = res;

    return ctx;
  }

  /**
   * 中间件组合
   * @param {*} middlewares
   */
  compose(middlewares) {
    return function (ctx) {
      return dispatch(0);
      function dispatch(i) {
        const fn = middlewares[i];
        if (!fn) {
          return Promise.resolve();
        }
        return Promise.resolve(
          fn(ctx, function next() {
            return dispatch(i + 1);
          })
        );
      }
    };
  }
}

module.exports = Koa;
