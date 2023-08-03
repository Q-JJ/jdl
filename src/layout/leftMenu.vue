<template>
  <div class="menu_left cflex" :style="{ width: sidebar.width + 'px' }">
    <div class="menu_page_top rflex">
      <img
        :class="['logo', { closeLogo: !sidebar.opened }]"
        :src="logo"
        alt="嘉得利"
      />
      <span class="title" v-show="sidebar.opened"><i>嘉得利钢铁</i></span>
    </div>

    <div class="menu_page_bottom is-scroll-left">
      <el-menu
        mode="vertical"
        theme="dark"
        :show-timeout="200"
        :default-active="$route.path"
        :collapse="isCollapse"
        :background-color="menuObj.bgColor"
        :text-color="menuObj.textColor"
        :active-text-color="menuObj.activeTextColor"
        :style="{ width: sidebar.width + 'px' }"
        
      >
        <template v-for="(item, index) in permission_routers">
          <!--表示 有一级菜单-->
          <router-link
            v-if="!item.hidden && item.noDropdown"
            :to="item.path + '/' + item.children[0].path"
            :key="index"
          >
            <el-menu-item
              class="dropItem"
              :index="item.path + '/' + item.children[0].path"
            >
              <icon-svg v-if="item.meta.icon" :icon-class="item.meta.icon" />
              <span v-if="item.meta.title" slot="title">{{
                $t(`commons.${item.name}`)
              }}</span>
            </el-menu-item>
          </router-link>

          <!--表示 有二级或者多级菜单 -->
          <el-submenu
         
            v-if="
              item.children &&
              item.children.length >= 1 &&
              !item.hidden &&
              !item.noDropdown
            "
            :index="item.path"
            :key="index"
            
          >
            <template slot="title">
              <icon-svg v-if="item.meta.icon" :icon-class="item.meta.icon"  class="icon"/>
              <span v-if="item.meta.title" slot="title">{{
                $t(`commons.${item.name}`)
              }}</span>
            </template>
            <!--直接定位到子路由上，子路由也可以实现导航功能-->
            <router-link
              v-for="(citem, cindex) in item.children"
              :to="getIindex(citem, item, cindex)"
              :key="cindex"
            >
              <el-menu-item
                v-if="citem.meta.routerType != 'topmenu' && citem.meta.title"
                :index="getIindex(citem, item, cindex)"
                
              >
                <span slot="title"> {{ $t(`commons.${citem.name}`) }}</span>
              </el-menu-item>
            </router-link>
          </el-submenu>
        </template>
      </el-menu>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import * as mUtils from "@/utils/mUtils";
import logoImg from "@/assets/img/logo.png";

export default {
  name: "left-Menu",
  data() {
    return {
      menuObj: {
        bgColor: " #001529",
        textColor: "#666",
        activeTextColor: "#fff",
      },
      logo: logoImg,
    };
  },
  computed: {
    ...mapGetters(["permission_routers", "isCollapse", "sidebar", "menuIndex"]),
  },
  created() {},
  mounted() {},
  methods: {
    getIindex(citem, item, cindex) {
      return citem.meta.titleList
        ? item.path + "/" + citem.path + "/" + citem.meta.titleList[0].path
        : item.path + "/" + citem.path;
    },
  },
};
</script>

<style lang="less" scoped>
@left-bgColor: #324157; // 左侧菜单背景颜色;
@icon-link: #ff6c60;
.menu_left {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  background: @left-bgColor;
}
.menu_page_top {
  background: #001529;
  width: 100%;
  height: 60px;
  align-items: center;
  justify-content: left;
  text-transform: uppercase;
  box-sizing: border-box;
  .logo {
    height: 36px;
    width: 36px;
    margin-right: 10px;
    vertical-align: middle;
    display: inline-block;
  }
  .closeLogo {
    width: 30px;
    height: 30px;
  }
  .title {
    font-size: 22px;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    i {
      color: #fff;
    }
  }
}
.icon{
    margin-right: 10px;
}
.menu_page_bottom {
  width: 100%;
  overflow-y: hidden;
  overflow-x: hidden;
  flex: 1;
 
  z-index: 10;
}
/* 修改导航菜单栏悬浮时的背景颜色 */
/deep/.el-menu .el-menu-item:hover {
  outline: 0 !important;
  color: #fff !important;
  background: none !important;
}
/deep/.el-menu .el-menu-item.is-active {
  color: #fff !important;
  background: none !important;
}
.el-submenu /deep/.el-submenu__title:hover {
  color: #fff !important;
  background: none !important;
}
</style>
