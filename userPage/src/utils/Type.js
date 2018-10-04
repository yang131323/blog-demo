import kindOf from 'kind-of'

export const type = kindOf

export const isNumber = (arg) => {
  return type(arg) === 'number'
}

export const isUndefined = (arg) => {
  return type(arg) === 'undefined'
}

export const isNull = (arg) => {
  return type(arg) === 'null'
}

export const isNAN = (arg) => {
  /* eslint-disable no-self-compare */
  return arg !== arg
}

export const isNullOrUnderfind = (arg) => {
  return isNull(arg) || isUndefined(arg)
}

export const isNullOrUnderfindOrNaN = (arg) => {
  return isNull(arg) || isUndefined(arg) || isNAN(arg)
}

export const isBoolean = (arg) => {
  return type(arg) === 'boolean'
}

export const isBuffer = (arg) => {
  return type(arg) === 'buffer'
}

export const isString = (arg) => {
  return type(arg) === 'string'
}

export const isEmptyString = (arg) => {
  return type(arg) === 'string' && arg === ''
}

export const isArguments = (arg) => {
  return type(arg) === 'arguments'
}

export const isObject = (arg) => {
  return type(arg) === 'object'
}

export const isDate = (arg) => {
  return type(arg) === 'date'
}

export const isArray = (arg) => {
  return type(arg) === 'array'
}

export const isRegexp = (arg) => {
  return type(arg) === 'regexp'
}

export const isError = (arg) => {
  return type(arg) === 'error'
}

export const isFunction = (arg) => {
  return type(arg) === 'function'
}

export const isGeneratorfunction = (arg) => {
  return type(arg) === 'generatorfunction'
}

export const isSymbol = (arg) => {
  return type(arg) === 'symbol'
}

export const isWeakmap = (arg) => {
  return type(arg) === 'weakmap'
}

export const isSet = (arg) => {
  return type(arg) === 'set'
}

export const isWeakset = (arg) => {
  return type(arg) === 'weakset'
}

export const isHttpMethod = (arg) => {
  let METHODS = ['get', 'post', 'put', 'options', 'patch', 'delete']
  return isString(arg) && (METHODS.indexOf(arg.toLocaleLowerCase()) !== -1)
}

export const isDevelopment = (arg) => {
  return process.env.NODE_ENV === 'development'
}

export const isProduction = (arg) => {
  return process.env.NODE_ENV === 'production'
}

export const isTest = (arg) => {
  return process.env.NODE_ENV === 'test'
}
