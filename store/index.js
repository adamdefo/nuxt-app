import Vuex from 'vuex'
import * as remote from 'axios'

const store = (app) => new Vuex.Store({
  state: {
    posts: null,
    label: '',
    hello: 'Fuck',
    shit: 'Shit',
    res: ''
  },
  getters: {
    notes (state) {
      return state.notes
    },
    posts (state) {
      return state.posts
    }
  },
  mutations: {
    HELLO (state, txt) {
      state.hello = txt
    },
    receivePosts(state, posts) {
      state.posts = posts;
    }
  },
  actions: {
    async getPosts ({ commit }) {
      console.log('get posts')
      const posts = await remote.get('http://jsonplaceholder.typicode.com/posts')
      commit('receivePosts', posts.data)
    },
    greet ({ commit }, txt) {
      commit('HELLO', txt)
    },
    // async nuxtServerInit({ commit }, { app }) {
    //   const todo = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
    //   console.log(todo);
    //   commit('receiveTodo', todo);
    // }
  },
  modules: {}
})

export default store