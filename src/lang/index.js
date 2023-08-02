/*
 * @Descripttion: 
 * @version: 
 * @Author: JnannJ
 * @Date: 2023-07-31 17:35:49
 * @LastEditors: JnannJ
 * @LastEditTime: 2023-08-01 18:41:46
 */

// 引入i18n国际化插件
import { getToken} from '@/utils/auth'
import Vue from 'vue'
import VueI18n from 'vue-i18n'
process.env.NODE_ENV === "development" ? Vue.use(VueI18n) : null;

import enLocale from './en'
import zhLocale from './zh'
 
// 注册i18n实例并引入语言文件，文件格式等下解析
const i18n = new VueI18n({
  // locale: getToken('lang') || 'en',
  locale: 'zh',
  messages: {
    zh: {
      ...zhLocale
    },
    en: {
      ...enLocale
    },
  }
});

export default i18n;