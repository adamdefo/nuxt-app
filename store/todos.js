const state = () => ({
  list: [],
  label: 'hhhh'
})

const mutations = {
  changeLabel (state, text) {
    console.log(text)
    state.label = text;
    state.list.push(text)
  }
}

export default {
  namespaced: true,
  state,
  mutations
}