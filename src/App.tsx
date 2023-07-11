import React, { useState } from "react";
// router
import { BrowserRouter } from "react-router-dom";
// antd
import { Layout, Menu, theme } from "antd";
// tab 配置项
import HeadMenuItemsList from "./menu/menu-item-head";
// 自定义组件
import HomeIndex from "./page/home";
// style
import "./App.css";

const { Header, Content } = Layout;

const App: React.FC = () => {
  // andt 颜色
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  // 保存当前选择中微应用 key
  const [menuKey, setMenuKey] = useState(0);

  // 判断当前是否为主应用
  const isInMainProject = ["/", "/qiankun-base", "/qiankun-base/"].includes(
    window.location.pathname
  );

  return (
    <div className="App">
      <BrowserRouter>
        <Layout className="layout">
          <Header
            style={{ position: "sticky", top: 0, zIndex: 1, width: "100%" }}
          >
            <div className="logo" />
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={[menuKey + ""]}
              items={HeadMenuItemsList.map((item, index) => {
                return {
                  key: index,
                  label: item?.label,
                };
              })}
              onSelect={(e: any) => {
                // 保存选中的 key
                setMenuKey(e.key);
                // 路由跳转
                window.history.pushState(
                  null,
                  "",
                  HeadMenuItemsList[e.key].hrefPath
                );
              }}
            />
          </Header>

          <Content>
            <div
              className="site-layout-content"
              style={{ background: colorBgContainer }}
            >
              {/* 根据路径判断当前是否在主应用中 */}
              {isInMainProject ? (
                <HomeIndex />
              ) : (
                <div id={HeadMenuItemsList[menuKey]?.id} /> // id 要与 registerMicroApps 当中的 container 保持一致
              )}
            </div>
          </Content>
        </Layout>
      </BrowserRouter>
    </div>
  );
};

export default App;
