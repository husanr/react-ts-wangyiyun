// service统一出口
import APIRequest from './request'
import { BASE_URL, TIME_OUT } from './request/config'
// import localCache from '@/utils/cache'
// 每个实例可以创建不同的拦截器
const apiRequest = new APIRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptor: (config) => {
      // console.log('请求成功的拦截', config)
      // token拦截
      // const token = localCache.getCache('token')
      // if (token) {
      //   if (config && config?.headers) {
      //     config.headers.Authorization = `Bearer ${token}`
      //   }
      // }
      if (process.env.NODE_ENV === 'production') {
        config.url +=
          (config.url.indexOf('?') > 0 ? '&' : '?') + 'realIP=116.25.146.177'
      }
      return config
    },
    requestInterceptorCatch: (err) => {
      console.log('请求失败的拦截', err)
      return err
    },
    responseInterceptor: (res) => {
      // console.log('响应成功的拦截')
      return res
    },
    responseInterceptorCatch: (err) => {
      console.log('响应失败的拦截', err)
      return err
    }
  }
})

export default apiRequest
