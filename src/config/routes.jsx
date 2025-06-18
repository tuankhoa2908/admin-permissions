// src/config/menuRoutes.js
import {
  PieChartOutlined,
  DesktopOutlined,
  UserOutlined,
  TeamOutlined,
  FileOutlined,
} from "@ant-design/icons";

// Component inline hoặc import đều được
const Option1 = () => <div>📊 Option 1 Content</div>;
const Option2 = () => <div>🖥 Option 2 Content</div>;
const UserTom = () => <div>👤 User: Tom</div>;
const UserBill = () => <div>👤 User: Bill</div>;
const UserAlex = () => <div>👤 User: Alex</div>;
const Team1 = () => <div>👥 Team 1</div>;
const Team2 = () => <div>👥 Team 2</div>;
const Files = () => <div>📁 Files Content</div>;

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
];

export default menuRoutes;
