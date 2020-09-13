/*
 * @Author: SailorCai
 * @Date: 2020-09-13 11:14:41
 * @LastEditors: SailorCai
 * @LastEditTime: 2020-09-13 11:28:23
 * @FilePath: /CsKoa/src/response.js
 */
module.exports = {
  get body() {
    return this._body;
  },

  set body(val) {
    this._body = val;
  },
};
