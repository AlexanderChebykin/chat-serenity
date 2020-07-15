import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export const state = () => ({
  token: null,
  login: null
})

export const mutations = {
  setToken(state, params) {
    state.token = params.token;
    state.login = params.login;
    console.log('state', state);
  },
  clearToken(state) {
    state.token = null
  }
}

export const actions = {
  nuxtServerInit({dispatch}) {
    console.log('nuxtServerInit')
  },
 login(ctx, login) {
    console.log(login);
    ctx.commit('setToken', {token:'truetoken', login})
  },
  logout({commit}) {
    commit('clearToken')
  },
}

export const getters = {
  hasToken: s => !!s.token,
}
