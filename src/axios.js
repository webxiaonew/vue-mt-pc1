import axios from 'axios'
axios.defaults.baseURL = 'http://api.duyiedu.com'
axios.interceptors.request.use(function (config) {
  // 在发送请求前做些什么
  console.log(config)

  config.params = {
    ...config.params,
    appkey: '1726771086_1547726200787'
  }
  return config
}, function (error) {
  return Promise.reject(error)
})

export default axios
