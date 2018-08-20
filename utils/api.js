// api.js

const URL = 'https://blog.csdn.net/qq_40143330/article'  //需要接入的api接口
const fetch = require('./fetch.js')

function getApi(type, params) {  // get请求
  return fetch(URL, type, params, 'Get')
}

function fetApi(type, params) {  // post请求
  return fetch(URL, type, params, 'POST')
}

module.exports = { getApi, fetApi }
