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
import EditGroupRole from "../pages/Security/GroupRole/EditGroupRole";
import ErrorPage from "../pages/ErrorPage";

const Option1 = () => <div>📊 Option 1 Content</div>;
const Option2 = () => <div>🖥 Option 2 Content</div>;
const UserTom = () => (
  <div>
    👤 User: Tom <br />
    <Link to="/user/tom/detail">Xem chi tiết</Link>
  </div>
);
const UserBill = () => <div>👤 User: Bill</div>;
const UserAlex = () => <div>👤 User: Alex</div>;
const Team1 = () => <div>👥 Team 1</div>;
const Team2 = () => <div>👥 Team 2</div>;
const Files = () => <div>📁 Files Content</div>;
const UserTomDetail = () => <div>📋 Chi tiết User: Tom</div>;

const menuRoutes = [
  {
    key: "/",
    label: "Option 1",
    icon: <PieChartOutlined />,
    path: "/",
    element: <Option1 />,
    index: true,
    key_permissions: 'option1',
  },
  {
    key: "/option2",
    label: "Option 2",
    icon: <DesktopOutlined />,
    path: "/option2",
    element: <Option2 />,
    key_permissions: 'option2',
  },
  {
    key: "user",
    label: "User",
    icon: <UserOutlined />,
    key_permissions: 'user',
    children: [
      {
        key: "/user/tom",
        label: "Tom",
        path: "/user/tom",
        element: <UserTom />,
        key_permissions: 'user-tom',
      },
      {
        key: "/user/tom/detail",
        path: "/user/tom/detail",
        element: <UserTomDetail />,
        hidden: true,
        key_permissions: 'user-tom-detail',
      },
      {
        key: "/user/bill",
        label: "Bill",
        path: "/user/bill",
        element: <UserBill />,
        key_permissions: 'user-bill',
      },
      {
        key: "/user/alex",
        label: "Alex",
        path: "/user/alex",
        element: <UserAlex />,
        key_permissions: 'user-alex',
      },
    ],
  },
  {
    key: "team",
    label: "Team",
    icon: <TeamOutlined />,
    key_permissions: 'team',
    children: [
      {
        key: "/team/1",
        label: "Team 1",
        path: "/team/1",
        element: <Team1 />,
        key_permissions: 'team-1',
      },
      {
        key: "/team/2",
        label: "Team 2",
        path: "/team/2",
        element: <Team2 />,
        key_permissions: 'team-2',
      },
    ],
  },
  {
    key: "/files",
    label: "Files",
    icon: <FileOutlined />,
    path: "/files",
    element: <Files />,
    key_permissions: 'files'
  },
  {
    key: "security",
    label: "Security",
    icon: <MdOutlineSecurity />,
    key_permissions: 'security',
    children: [
      {
        key: "/group-role",
        label: "Group Role Admin",
        path: "/group-role",
        element: <GroupRole />,
        key_permissions: 'group-role',
      },
      {
        key: "/group-role/edit",
        label: "Edit Group Role",
        path: "/group-role/edit",
        element: <EditGroupRole />,
        key_permissions: 'group-role-edit',
        hidden: true,
      },
      {
        key: "/admin-permission",
        label: "Admin",
        icon: <MdAdminPanelSettings />,
        path: "/admin-permission",
        element: <ListUserSystem />,
        key_permissions: 'admin-permission',
      },
    ],
  },
  {
    key: "not-found",
    path: "/*",
    element: <ErrorPage />,
    hidden: true,
  },
];

export default menuRoutes;
