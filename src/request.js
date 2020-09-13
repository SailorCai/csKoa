/*
 * @Author: SailorCai
 * @Date: 2020-09-13 11:14:34
 * @LastEditors: SailorCai
 * @LastEditTime: 2020-09-13 11:27:01
 * @FilePath: /CsKoa/src/request.js
 */
module.exports = {
  get url() {
    return this.req.url;
  },

  get method() {
    return this.req.method.toLowerCase();
  },
};
