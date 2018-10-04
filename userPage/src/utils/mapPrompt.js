import { isNullOrUnderfindOrNaN } from  './Type'

/**
 * 根据prompt和value安全取出相应属相，并转化为字符串
 * @param {Object} prompt 数据对象
 * @param {String} value 相应属性
 * @param {String} dfs 默认值
 * @param {String} sign 默认标志
 * @returns {String} 结果
 */
const promptConvert = function (prompt, value, dfs = '无', sign = '：') {
  if (isNullOrUnderfindOrNaN(prompt) || isNullOrUnderfindOrNaN(value)) { throw new Error('prompt对象或者value未传入') }
  let val = (prompt && prompt[value]) || dfs
  return `${val}${sign}`
}

export default promptConvert