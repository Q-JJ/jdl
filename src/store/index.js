/*
 * @Descripttion: 
 * @version: 
 * @Author: JnannJ
 * @Date: 2023-07-31 17:35:49
 * @LastEditors: JnannJ
 * @LastEditTime: 2023-08-02 13:58:24
 */
import Vue from 'vue'
import Vuex from 'vuex'
if(process.env.NODE_ENV === "development"){
    Vue.use(Vuex) 
} 

import user from './modules/user'
import permission from './modules/permission'
import menu from './modules/menu'

export default new Vuex.Store({
    modules: {
        user,
        permission,
        menu
    }
});

