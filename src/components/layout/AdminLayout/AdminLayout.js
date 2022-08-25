import { AppstoreTwoTone } from "@ant-design/icons";
import { Button, Layout, Menu } from "antd";
import React, { useState } from "react";
import "./AdminLayout.css";
const { Header, Sider, Content } = Layout;

function AdminLayout() {
    return (
        <Layout className="admin-layout">
            <Sider className="admin-sidebar" width="250px">
                <div className="admin-group-actions">
                    <Button type="primary">Add Group</Button>
                    <Button type="primary" danger>
                        Delete Group
                    </Button>
                </div>
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={["1"]}
                    items={[
                        {
                            key: "1",
                            icon: <AppstoreTwoTone />,
                            label: "Group1",
                        },
                        {
                            key: "2",
                            icon: <AppstoreTwoTone />,
                            label: "Group2",
                        },
                        {
                            key: "3",
                            icon: <AppstoreTwoTone />,
                            label: "Group3",
                        },
                    ]}
                />
            </Sider>
            <Layout className="site-layout">
                <Header
                    className="site-layout-background"
                    style={{
                        padding: 0,
                    }}
                ></Header>
                <Content className="admin-content">Content</Content>
            </Layout>
        </Layout>
    );
}

export default AdminLayout;
