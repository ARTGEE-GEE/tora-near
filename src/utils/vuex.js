import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

import state from '../store/state'
import mutations from '../store/mutations'
import nav from '../store/modules/nav'
import carousel from '../store/modules/carousel'

let store = new Vuex.Store({
    state,mutations,
    modules:{
        nav,carousel
    }
})

export default store