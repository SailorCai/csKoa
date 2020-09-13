/*
 * @Author: SailorCai
 * @Date: 2020-09-13 11:14:46
 * @LastEditors: SailorCai
 * @LastEditTime: 2020-09-13 11:30:24
 * @FilePath: /CsKoa/src/context.js
 */
module.exports = {
  get url() {
    return this.request.url;
  },
  get body() {
    return this.response.body;
  },
  set body(val) {
    this.response.body = val;
  },
  get method() {
    return this.request.method;
  },
};
