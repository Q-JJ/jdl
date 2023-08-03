<template>
  <header
    class="head-nav rflex"
    :style="{ width: headNavWidth + 'px' }"
    id="header_container"
  >
    <div class="right-nav" ref="rightNav">
      <div class="userinfo-right rflex">
        <div class="notify-row">
          <ul class="top-menu">
            <li class="li-badge"></li>
          </ul>
        </div>
        <div class="userinfo">
          <el-menu
            class="el-menu-demo"
            mode="horizontal"
            background-color="#324157"
          >
            <el-submenu index="2" popper-class="infoItem">
              <template slot="title">
                <div class="welcome">
                  <span class="name">{{ $t("commons.hi") }},</span>
                  <span class="name avatarname">
                    {{ $t(`commons.${name}`) }}</span
                  >
                </div>
                <img src="../assets/img/logo.png" class="avatar" alt="" />
              </template>
              <el-menu-item index="2-1" @click="setDialogInfo('info')">{{
                $t("commons.infoShow")
              }}</el-menu-item>
              <el-menu-item index="2-2" @click="setDialogInfo('pass')">{{
                $t("commons.infoModify")
              }}</el-menu-item>
              <el-menu-item index="2-3" @click="setDialogInfo('logout')">{{
                $t("commons.quit")
              }}</el-menu-item>
            </el-submenu>
          </el-menu>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { mapGetters } from "vuex";
import logoImg from "@/assets/img/logo.png";
export default {
  name: "head-nav",
  data() {
    return {
      logo: logoImg,
    };
  },
  components: {},
  computed: {
    ...mapGetters(["name", "avatar", "sidebar"]),
    headNavWidth() {
      return document.body.clientWidth - this.sidebar.width;
    },
  },
  created() {},
  mounted() {
    console.log('this  :>> ', this.avatar);
  },
  methods: {
    logout() {
      this.$store.dispatch("LogOut").then(() => {
        location.reload();
      });
    },
    /**
     * 弹出框-修改密码或者系统设置
     * @param {string} cmditem 弹框类型
     */
    setDialogInfo(cmditem) {
      switch (cmditem) {
        case "info":
          this.$router.push("/infoManage/infoShow/infoShow1");
          break;
        case "pass":
          this.$router.push("/infoManage/infoModify/infoModify1");
          break;
        case "logout":
          this.logout();
          break;
      }
    },
  },
};
</script>

<style scoped lang="less">
.head-nav {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 29;
  transition: width 0.2s;
  justify-content: space-between;
  height: 60px;
  box-sizing: border-box;
  background: #324157;
  .right-nav {
    display: flex;
    flex: 1;
    width: calc(100% - 180px);
    padding-right: 15px;
    justify-content: right;
    box-shadow: 0px 2px 5px 0px rgba(237, 233, 233, 0.5);
    .userinfo-right {
      width: 320px;
      padding: 0 10px;
      justify-content: space-between;
      .notify-row {
        line-height: 60px;
        flex: 1;
        ul {
          display: flex;
          justify-content: space-around;
        }
        ul.top-menu > li {
          position: relative;
        }
      }
      .userinfo {
        line-height: 60px;
        text-align: right;
        .welcome {
          display: inline-block;
          vertical-align: middle;
          padding: 0 5px;
          .name {
            line-height: 20px;
            text-align: center;
            font-size: 12px;
            color: #fff;
          }
          .avatarname {
            color: #2a8cc3;
            font-weight: bolder;
            font-size: 13px;
          }
        }
        .avatar {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          vertical-align: middle;
          display: inline-block;
        }
      }
    }
  }
   
}
</style>
