// src/config/routes.js
import {
  PieChartOutlined,
  DesktopOutlined,
  UserOutlined,
  TeamOutlined,
  FileOutlined,
} from "@ant-design/icons";

import { MdOutlineSecurity, MdAdminPanelSettings } from "react-icons/md";

import { Link } from "react-router-dom";

import GroupRole from "../pages/Security/GroupRole";
import ListUserSystem from "../pages/Security/ListUserSystem";

const Option1 = () => <div>📊 Option 1 Content</div>;
const Option2 = () => <div>🖥 Option 2 Content</div>;
const UserTom = () => <div>👤 User: Tom
  <Link to="/user/tom/detail">Xem chi tiết</Link>
</div>;
const UserBill = () => <div>👤 User: Bill</div>;
const UserAlex = () => <div>👤 User: Alex</div>;
const Team1 = () => <div>👥 Team 1</div>;
const Team2 = () => <div>👥 Team 2</div>;
const Files = () => <div>📁 Files Content</div>;
const UserTomDetail = () => <div>📋 Chi tiết User: Tom</div>;

const menuRoutes = [
  {
    key: "1",
    label: "Option 1",
    icon: <PieChartOutlined />,
    path: "/",
    element: <Option1 />,
    index: true,
  },
  {
    key: "2",
    label: "Option 2",
    icon: <DesktopOutlined />,
    path: "/option2",
    element: <Option2 />,
  },
  {
    key: "sub1",
    label: "User",
    icon: <UserOutlined />,
    children: [
      {
        key: "3",
        label: "Tom",
        path: "/user/tom",
        element: <UserTom />,
      },
      {
        key: "3-1",
        path: "/user/tom/detail",
        element: <UserTomDetail />,
        hidden: true,
      },
      {
        key: "4",
        label: "Bill",
        path: "/user/bill",
        element: <UserBill />,
      },
      {
        key: "5",
        label: "Alex",
        path: "/user/alex",
        element: <UserAlex />,
      },
    ],
  },
  {
    key: "sub2",
    label: "Team",
    icon: <TeamOutlined />,
    children: [
      {
        key: "6",
        label: "Team 1",
        path: "/team/1",
        element: <Team1 />,
      },
      {
        key: "8",
        label: "Team 2",
        path: "/team/2",
        element: <Team2 />,
      },
    ],
  },
  {
    key: "9",
    label: "Files",
    icon: <FileOutlined />,
    path: "/files",
    element: <Files />,
  },
  {
    key: "security",
    label: "Security",
    icon: <MdOutlineSecurity />,
    children: [
      {
        key: '10',
        label: 'Group Role Admin',
        icon: null,
        path: '/group-role',
        element: <GroupRole />
      },
      {
        key: "11",
        label: "Admin",
        icon: <MdAdminPanelSettings />,
        path: "/admin-permission",
        element: <ListUserSystem />,
      }
    ]
  }
];

export default menuRoutes;
