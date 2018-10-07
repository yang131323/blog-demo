import axios from 'axios'
import * as type from '@/utils/Type'
import md5 from 'md5'
import { autobind } from 'core-decorators'
import Qs from 'qs'

export const AUTH_NAME = 'auth' // storage中存储的名字
export const AUTH = {}

export const TIME_STAMP = 'Timestamp' // 时间戳
export const NONCE = 'Nonce' // 随机数
export const STAFFID = 'Staffid' // 用户名
export const SIGNATURE = 'Signature' // MD5签名
export const MAX_NONCE = 9999999999 // 随机数最大值
export const MIN_NONCE = 1000000000 // 随机数最小值
export const TOKEN_NAME = 'token'
export const USER_NAME = 'username'