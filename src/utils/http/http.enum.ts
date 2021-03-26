/** 请求方法枚举 */
export enum HttpMethodEnum {
  /** GET */
  GET = 'GET',
  /** POST */
  POST = 'POST',
  /** PUT */
  PUT = 'PUT',
  /** PATCH */
  PATCH = 'PATCH',
  /** DELETE */
  DELETE = 'DELETE',
}

/** ContentType类型 */
export enum HttpContentTypeEnum {
  /** json(JSON字符串) */
  JSON = 'application/json;charset=utf-8',
  /** xml(XML媒体格式) */
  XML = 'application/xml',
  /** 名称/值(转成字符) */
  URLENCAODED = 'application/x-www-form-urlencoded',
  /** 文件上传(转成二进制) */
  FORDATA = 'multipart/form-data',
}
