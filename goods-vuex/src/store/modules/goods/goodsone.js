import axios from 'axios'
const state = {
  data: [],
  ab:'1'
}
const getters = {

}
const mutations = {
  getdata(state,res){
    state.data = res
    // console.log(state.data)
  }
}
const actions = {
  getdata (context) {
    axios.post('https://www.easy-mock.com/mock/5bf26de2a78cb61ecbaed73a/example/example')
    .then((res)=>{
      localStorage.setItem('data', res)
      context.commit('getdata',res.data.rspBody.addList)
    })
  }
}
export default {
  state,
  actions,
  getters,
  mutations,
  namespaced: true
}
