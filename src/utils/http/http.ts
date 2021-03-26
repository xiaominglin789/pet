/**
 * axios ts封装
 */
import axios, { AxiosRequestConfig, AxiosError, AxiosResponse } from 'axios'

/** 默认配置 */
axios.defaults.baseURL = process.env.VUE_APP_BASEURL || ''
axios.defaults.timeout = Number(process.env.VUE_APP_TIMEOUT) || 8000
axios.defaults.withCredentials = false
axios.defaults.headers['Content-Type'] = 'application/json;charset=UTF-8'

const http = axios.create()

/** 请求拦截 */
http.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    return config
  },
  (error: AxiosError) => {
    return Promise.reject(error)
  },
)

/** 响应拦截 */
http.interceptors.response.use(
  (response: AxiosResponse) => {
    // 2xx、 3xx、4xx、5xx
    const status = response.status
    if (status.toString().charAt(0) == '2') {
      // 2xx
      return response.data
    }
    // TODO
    // 非2xx的其他
    // 4xx 5xx
    return Promise.reject(response)
  },
  (error: AxiosError) => {
    if (error?.response) {
      // 处理正常请求返回的异常
      // TODO
      const status = error?.response.status
      console.log('异常status: ', status)
    }
    // TODO
    console.log(error)
    if (error.code === 'ECONNABORTED' && error.message.includes('timeout')) {
      // TODO
      // 请求超时特殊处理
      // console.log('请求超时')
    }
    return Promise.reject(error)
  },
)

/**
 * get
 * @param url 请求地址
 * @param params query参数对象: key-value
 * @param config 其他配置
 * @returns
 */
export function get<T>(
  url: string,
  params?: Record<string, any>,
  config?: AxiosRequestConfig,
): Promise<T> {
  return http.get(url, {
    params,
    ...config,
  })
}

/**
 * post
 * @param url 请求地址
 * @param data body参数, key-value
 * @param config 其他配置
 * @returns
 */
export function post<T>(
  url: string,
  data?: Record<string, any>,
  config?: AxiosRequestConfig,
): Promise<T> {
  return http.post(url, data, config)
}

/**
 * put
 * @param url 请求地址
 * @param data body参数对象, key-value
 * @param config 其他配置
 * @returns
 */
export function put<T>(
  url: string,
  data?: Record<string, any>,
  config?: AxiosRequestConfig,
): Promise<T> {
  return http.put(url, data, config)
}

/**
 * delete
 * @param url 请求地址
 * @param params query参数对象, key-value
 * @param config 其他配置
 * @returns
 */
export function _delete<T>(
  url: string,
  params?: Record<string, any>,
  config?: AxiosRequestConfig,
): Promise<T> {
  return http.delete(url, config)
}

export default http
