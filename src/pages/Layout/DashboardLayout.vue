<template>
  <div class="wrapper">
    <!-- <div class="wrapper" :class="{'nav-open': $sidebar.showSidebar}"> -->

    <side-bar :background-color="backgroundColor">
      <!-- <mobile-menu slot="content"></mobile-menu> -->

      <sidebar-link to="/dashboard">
        <i class="tim-icons icon-chart-pie-36"></i>

        <template v-if="!isRTL">
          <p>Dashboard</p>
        </template>

      </sidebar-link>

      <sidebar-link to="/table">
        <i class="tim-icons icon-atom"></i>

        <template v-if="!isRTL">
          <p>Opportunity Tool</p>
        </template>


      </sidebar-link>

      <sidebar-link to="/activetenders">
        <i class="tim-icons icon-check-2"></i>

        <template v-if="!isRTL">
          <p>Active Tenders</p>
        </template>


      </sidebar-link>


      <sidebar-link to="/contractoverview">
        <i class="tim-icons icon-paper"></i>

        <template v-if="!isRTL">
          <p>Contract Overview </p>
        </template>


      </sidebar-link>

      <sidebar-link to="/completedtenders">
        <i class="tim-icons icon-money-coins"></i>

        <template v-if="!isRTL">
          <p>Completed Tenders</p>
        </template>
      </sidebar-link>

      <sidebar-link to="/archive">
        <i class="tim-icons icon-single-copy-04"></i>

        <template v-if="!isRTL">
          <p>Archive > 7 Days</p>
        </template>


      </sidebar-link>
      
      <!-- // Icons
      <sidebar-link to="/icons" >
        <i class="tim-icons icon-single-02"></i>

        <template v-if="!isRTL">
          <p>Icons</p>
        </template>
      </sidebar-link>  -->

      <sidebar-link to="/user" class="active-pro">
        <i class="tim-icons icon-single-02"></i>

        <template v-if="!isRTL">
          <p>User Profile</p>
        </template>

               
      </sidebar-link>
     

     
    </side-bar>

    <sidebar-share :background-color.sync="backgroundColor"></sidebar-share>

    <div class="main-panel" :data="backgroundColor">
      <top-navbar></top-navbar>

      <dashboard-content @click.native="toggleSidebar"></dashboard-content>

      <content-footer></content-footer>
    </div>
  </div>
</template>

<style lang="scss">

 .sidebar-wrapper {
  background-color: #888;
 }

.nav p {
  font-size: small;
}


</style>

<script>
import TopNavbar from "./TopNavbar.vue";
import ContentFooter from "./ContentFooter.vue";
import DashboardContent from "./DashboardContent.vue";
import SidebarShare from "./SidebarSharePlugin.vue";
import MobileMenu from "./MobileMenu.vue";
import SideBar from "@/components/SidebarPlugin/SideBar.vue";
import SidebarLink from "@/components/SidebarPlugin/SidebarLink.vue";

export default {
  components: {
    TopNavbar,
    DashboardContent,
    ContentFooter,
    // eslint-disable-next-line vue/no-unused-components
    MobileMenu,
    SideBar,
    SidebarLink,
    SidebarShare,
  },
  data() {
    return {
      backgroundColor: "green",
    };
  },
  computed: {
    isRTL() {
      return this.$rtl.isRTL;
    },
  },
  methods: {
    toggleSidebar() {
      if (this.$sidebar.showSidebar) {
        this.$sidebar.displaySidebar(false);
      }
    },
  },
};
</script>
