import DashboardLayout from "@/pages/Layout/DashboardLayout.vue";

import Dashboard from "@/pages/Dashboard.vue";
import ActiveTenders from "@/pages/ActiveTenders.vue";
import Notifications from "@/pages/Notifications.vue";
import UserProfile from "@/pages/UserProfile.vue";
import TableList from "@/pages/TableList.vue";
import Typography from "@/pages/Typography.vue";
import Archive from "@/pages/Archive.vue";
import TableList3 from "@/pages/TableList3.vue";
import Icons from "@/pages/Icons.vue";
import TableListOpen from "@/pages/TableListOpen.vue";
import TableListOpenAt from "@/pages/TableListOpenAt.vue";
import CompletedTenders from "@/pages/CompletedTenders.vue";
import ContractOverview from "@/pages/ContractOverview.vue";


const routes = [
  {
    path: "/",
    component: DashboardLayout,
    redirect: "dashboard",
    children: [
      {
        path: "dashboard",
        name: "Dashboard",
        component: Dashboard,
      },
      {
        path: "tableopen",
        name: "TableListOpen",
        component: TableListOpen,
      },
      {
        path: "tableopenat",
        name: "TableListOpenAt",
        component: TableListOpenAt,
      },
      {
      path: "completedtenders",
      name: "CompletedTenders",
      component: CompletedTenders,
      },
      {
        path: "icons",
        name: "Icons",
        component: Icons,
      },
      {
        path: "contractoverview",
        name: "ContractOverview",
        component: ContractOverview,
      },
      {
        path: "activetenders",
        name: "ActiveTenders",
        component: ActiveTenders,
      },
      {
        path: "notifications",
        name: "Notifications",
        component: Notifications,
      },
      {
        path: "user",
        name: "User Profile",
        component: UserProfile,
      },
      {
        path: "table",
        name: "Table List",
        component: TableList,
      },
      {
        path: "typography",
        name: "Typography",
        component: Typography,
      },
      {
        path: "archive",
        name: "Archive",
        component: Archive,
      },
      {
        path: "table2",
        name: "TableList3",
        component: TableList3,
      },
    ],
  },
];

export default routes;
