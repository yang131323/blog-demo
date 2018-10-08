import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

const host = 'http://localhost:3600'

export const HOME_MESSAGE = 'HOME_MESSAGE'

const instance = axios.create({
  baseURL: host,
  timeout: 15000
})

const store =  {
  state: {
    person: {},
    article: [],
    personLink: []
  },
  mutations: {},
  actions: {
    async [HOME_MESSAGE] ({commit}) {
      const Data = await instance.get('/')
      return Data.data
    }
  },
}

Vue.use(Vuex)

export default new Vuex.Store ({
  strict: process.env.NODE_ENV !== 'production',
  ...store
})