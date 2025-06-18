import React, { useState } from "react";
import { Layout, Menu, Input } from "antd";
import { Link, useLocation, Routes, Route } from "react-router-dom";
import menuRoutes from "../../config/routes";

const { Search } = Input;
const { Header, Content, Sider } = Layout;

// Recursively render Menu items
const renderMenuItems = (items) =>
    items
        .filter((item) => !item.hidden)
        .map((item) => ({
            key: item.path || item.key,
            icon: item.icon,
            label: item.path ? <Link to={item.path}>{item.label}</Link> : item.label,
            children: item.children ? renderMenuItems(item.children) : undefined,
        }));

// Flatten all routes for <Route />
const flattenRoutes = (items) => {
    let result = [];
    for (const item of items) {
        if (item.element && item.path) {
            result.push({
                path: item.path,
                element: item.element,
                index: item.index || false,
            });
        }
        if (item.children) {
            result = result.concat(flattenRoutes(item.children));
        }
    }
    return result;
};

// Find selected menu key based on pathname
const findSelectedKeys = (pathname, items) => {
    let matchKey = null;

    const dfs = (nodes) => {
        for (const item of nodes) {
            if (item.hidden) continue;

            if (item.path && pathname.startsWith(item.path)) {
                // Lưu lại path dài nhất phù hợp
                if (!matchKey || item.path.length > matchKey.length) {
                    matchKey = item.path;
                }
            }

            if (item.children) {
                dfs(item.children);
            }
        }
    };

    dfs(items);
    return matchKey ? [matchKey] : [];
};

const MainLayout = () => {
    const [collapsed, setCollapsed] = useState(false);
    const location = useLocation();
    const routes = flattenRoutes(menuRoutes);
    const selectedKeys = findSelectedKeys(location.pathname, menuRoutes);

    return (
        <Layout style={{ minHeight: "100vh" }}>
            <Sider collapsible collapsed={collapsed} onCollapse={setCollapsed}>
                <div
                    style={{ height: 32, margin: 16, background: "rgba(255,255,255,0.3)" }}
                />
                <Menu
                    theme="dark"
                    mode="inline"
                    selectedKeys={selectedKeys}
                    items={renderMenuItems(menuRoutes)}
                />
            </Sider>
            <Layout>
                <Header
                    style={{
                        height: 64,
                        padding: "0 16px",
                        background: "#001529",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    <h1 style={{ color: "white", margin: 0, fontSize: 20 }}>Welcome</h1>
                    <Search
                        placeholder="Nhập @id user, #id câu hỏi để tìm kiếm ..."
                        style={{ width: "400px" }}
                    />
                    <div style={{ paddingTop: "20px" }}>
                        <img
                            src="https://images.pexels.com/photos/31762658/pexels-photo-31762658.jpeg"
                            alt="Avatar"
                            style={{
                                width: 40,
                                height: 40,
                                borderRadius: "50%",
                                objectFit: "cover",
                            }}
                        />
                    </div>
                </Header>
                <Content style={{ margin: "16px" }}>
                    <div style={{ padding: 24, background: "#fff", minHeight: 360 }}>
                        <Routes>
                            {routes.map((route, index) => (
                                <Route
                                    key={index}
                                    path={route.path}
                                    element={route.element}
                                    index={route.index}
                                    caseSensitive
                                />
                            ))}
                        </Routes>
                    </div>
                </Content>
            </Layout>
        </Layout>
    );
};

export default MainLayout;
