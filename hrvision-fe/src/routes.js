import React from "react";
import Dashboard from "components/Dashboard/default";
import Attendance from "components/attandance/index";
import EmployeeDetails from "components/employeeDetails";
import ViewFeedback from "views/admin/feedback";
import SignIn from "views/auth/SignIn";
import Leave from "components/leave/leaveApply/index";
import Engage from "components/engage/index";
// import Feedback from "./views/employee/feedback/index";

import {
  MdHome,
  MdOutlineWorkOff,
  MdHolidayVillage,
  MdAccountBalance,
  MdPersonAddAlt1,
  MdPersonSearch,
  MdFeedback,
  MdOutlineChat,
  MdOutlineManageSearch,
  MdSchedule,
} from "react-icons/md";
import Login from "views/auth/Login";
import Holidays from "components/holidays";
import Alleave from "components/AdminHrLeave";

export const routes = [
  {
    name: "Dashboard",
    layout: "/admin",
    path: "default",
    icon: <MdHome className="h-5 w-5" />,
    component: <Dashboard />,
  },
  {
    name: "Login",
    layout: "/auth",
    path: "login",
    icon: <MdHome className="h-6 w-6" />,
    component: <Login />,
  },
  {
    name: "Leave",
    layout: "/admin",
    path: "leave/*",
    // icon: <MdOutlineWorkOff className="h-6 w-6" />,
    component: <Leave />,
    secondary: true,
  },
  {
    name: "Attendance",
    layout: "/admin",
    path: "attendance/*",
    // icon: <MdAccountBalance className="h-6 w-6" />,
    component: <Attendance />,
  },
  {
    name: "Holidays",
    layout: "/admin",
    path: "holidays",
    // icon: <MdHolidayVillage className="h-6 w-6" /> ,
    component: <Holidays />,
  },
  {
    name: "Add User",
    layout: "/admin",
    path: "sign-in",
    // icon: <MdPersonAddAlt1   className="h-6 w-6" />,
    component: <SignIn />,
  },
  {
    name: "Employee Detail",
    layout: "/admin",
    path: "employee-detail/*",
    // icon: <MdPersonSearch className="h-6 w-6" />,
    component: <EmployeeDetails />,
  },
  // {
  //   name: "Feedback",
  //   layout: "/admin",
  //   path: "feedback",
  //   // icon: <MdFeedback className="h-6 w-6" />,
  //   component: <Feedback />,
  // },
];
export const sidebarRoutesAdmin = [
  {
    name: "Dashboard",
    layout: "/admin",
    path: "default",
    pathname: "default",
    icon: <MdHome className="h-6 w-6" />,
    component: <Dashboard />,
  },
  {
    name: "Events",
    layout: "/admin",
    path: "event",
    pathname: "event",
    icon: <MdOutlineChat className="h-6 w-6" />,
    component: <Engage />,
  },
  {
    name: "Add User",
    layout: "/admin",
    path: "add-user",
    pathname: "add-user",
    icon: <MdPersonAddAlt1 className="h-6 w-6" />,
    component: <SignIn />,
  },
  {
    name: "Holiday",
    layout: "/admin",
    path: "holiday",
    pathname: "holiday",
    icon: <MdHolidayVillage className="h-6 w-6" />,
    component: <Holidays />,
  },
  {
    name: "Employee Detail",
    layout: "/admin",
    path: "employee-detail/*",
    pathname: "employee-detail",
    icon: <MdPersonSearch className="h-6 w-6" />,
    component: <EmployeeDetails />,
  },
  // {
  //   name: "Regularization",
  //   layout: "/admin",
  //   path: "Regularization",
  //   pathname: "Regularization",
  //   icon: <MdSchedule className="h-6 w-6" />,
  //   component: <MyRegularization />,
  //   secondary: true,
  // },
  // {
  //   name: "Manage Leave",
  //   layout: "/admin",
  //   path: "manageleave",
  //   pathname: "manageleave",
  //   icon: <MdOutlineManageSearch className="h-6 w-6" />,
  //   component: <ManageLeaves />,
  // },
  {
    name: "Manage Leave",
    layout: "/admin",
    path: "allleave/*",
    pathname: "allleave",
    icon: <MdSchedule className="h-6 w-6" />,
    component: <Alleave />,
  },
  // {
  //   name: "Feedback",
  //   layout: "/admin",
  //   path: "feedback",
  //   pathname: "feedback",
  //   icon: <MdFeedback className="h-6 w-6" />,
  //   component: <ViewFeedback />,
  // },
];
export const sidebarRoutesHR = [
  {
    name: "Dashboard",
    layout: "/hr",
    path: "default",
    pathname: "default",
    icon: <MdHome className="h-6 w-6" />,
    component: <Dashboard />,
  },
  {
    name: "Events",
    layout: "/hr",
    pathname: "event",
    path: "event",
    icon: <MdOutlineChat className="h-6 w-6" />,
    component: <Engage />,
  },
  {
    name: "Leave",
    layout: "/hr",
    path: "leave/*",
    pathname: "leave",
    icon: <MdOutlineWorkOff className="h-6 w-6" />,
    component: <Leave />,
    secondary: true,
  },
  {
    name: "Attendance",
    layout: "/hr",
    path: "attendance/*",
    pathname: "attendance",
    icon: <MdAccountBalance className="h-6 w-6" />,
    component: <Attendance />,
  },
  {
    name: "Holiday",
    layout: "/hr",
    path: "holiday",
    pathname: "holiday",
    icon: <MdHolidayVillage className="h-6 w-6" />,
    component: <Holidays />,
  },
  {
    name: "Add User",
    layout: "/hr",
    path: "add-user",
    pathname: "add-user",
    icon: <MdPersonAddAlt1 className="h-6 w-6" />,
    component: <SignIn />,
  },
  {
    name: "Employee Detail",
    layout: "/hr",
    path: "employee-detail/*",
    pathname: "employee-detail",
    icon: <MdPersonSearch className="h-6 w-6" />,
    component: <EmployeeDetails />,
    secondary: true,
  },
  // {
  //   name: "Regularization",
  //   layout: "/hr",
  //   path: "Regularization",
  //   pathname: "Regularization",
  //   icon: <MdSchedule className="h-6 w-6" />,
  //   component: <MyRegularization />,
  // },
  // {
  //   name: "Manage Leave",
  //   layout: "/hr",
  //   path: "manageleave",
  //   pathname: "manageleave",
  //   icon: <MdOutlineManageSearch className="h-6 w-6" />,
  //   component: <ManageLeaves />,
  // },
  {
    name: "Manage Leave",
    layout: "/hr",
    path: "allleave/*",
    pathname: "allleave",
    icon: <MdOutlineManageSearch className="h-6 w-6" />,
    component: <Alleave />,
  },

  // {
  //   name: "Feedback",
  //   layout: "/hr",
  //   path: "feedback",
  //   pathname: "feedback",
  //   icon: <MdFeedback className="h-6 w-6" />,
  //   component: <Feedback />,
  // },
];
export const sidebarRoutesEmployee = [
  {
    name: "Dashboard",
    layout: "/employee",
    path: "default",
    pathname: "default",
    icon: <MdHome className="h-6 w-6" />,
    component: <Dashboard />,
  },
  {
    name: "Events",
    layout: "/employee",
    path: "event",
    pathname: "event",
    icon: <MdOutlineChat className="h-6 w-6" />,
    component: <Engage />,
  },
  {
    name: "Leave",
    layout: "/employee",
    path: "leave/*",
    pathname: "leave",
    icon: <MdOutlineWorkOff className="h-6 w-6" />,
    component: <Leave />,
    secondary: true,
  },
  {
    name: "Attendance",
    layout: "/employee",
    path: "/attendance/*",
    pathname: "attendance",
    icon: <MdAccountBalance className="h-6 w-6" />,
    component: <Attendance />,
  },
  {
    name: "Holiday",
    layout: "/employee",
    path: "holiday",
    pathname: "holiday",
    icon: <MdHolidayVillage className="h-6 w-6" />,
    component: <Holidays />,
  },
  // {
  //   name: "Feedback",
  //   layout: "/employee",
  //   path: "feedback",
  //   pathname: "feedback",
  //   icon: <MdFeedback className="h-6 w-6" />,
  //   component: <Feedback />,
  // },
];
export const sidebarRoutesProjectManager = [
  {
    name: "Dashboard",
    layout: "/employee",
    path: "default",
    pathname: "default",
    icon: <MdHome className="h-6 w-6" />,
    component: <Dashboard />,
  },
  {
    name: "Events",
    layout: "/employee",
    path: "event",
    pathname: "event",
    icon: <MdOutlineChat className="h-6 w-6" />,
    component: <Engage />,
  },
  {
    name: "Leave",
    layout: "/employee",
    path: "leave/*",
    pathname: "leave",
    icon: <MdOutlineWorkOff className="h-6 w-6" />,
    component: <Leave />,
    secondary: true,
  },
  {
    name: "Attendance",
    layout: "/employee",
    path: "/attendance/*",
    pathname: "attendance",
    icon: <MdAccountBalance className="h-6 w-6" />,
    component: <Attendance />,
  },
  {
    name: "Holiday",
    layout: "/employee",
    path: "holiday",
    pathname: "holiday",
    icon: <MdHolidayVillage className="h-6 w-6" />,
    component: <Holidays />,
  },
  // {
  //   name: "Regularization",
  //   layout: "/employee",
  //   path: "Regularization",
  //   pathname: "Regularization",
  //   icon: <MdSchedule className="h-6 w-6" />,
  //   component: <MyRegularization />,
  // },
  // {
  //   name: "Manage Leave",
  //   layout: "/employee",
  //   path: "manageleave",
  //   pathname: "manageleave",
  //   icon: <MdOutlineManageSearch className="h-6 w-6" />,
  //   component: <ManageLeaves />,
  // },
  {
    name: "Manage Leave",
    layout: "/employee",
    path: "allleave/*",
    pathname: "allleave",
    icon: <MdSchedule className="h-6 w-6" />,
    component: <Alleave />,
  },
  // {
  //   name: "Feedback",
  //   layout: "/employee",
  //   path: "feedback",
  //   pathname: "feedback",
  //   icon: <MdFeedback className="h-6 w-6" />,
  //   component: <Feedback />,
  // },
];
