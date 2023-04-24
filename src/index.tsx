import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// 引入配置函数
import { registerMicroApps, start } from "qiankun";

//配置两个子应用
registerMicroApps([
  {
    // 子应用名字
    name: "qk-micro-react",
    // 子应用容器id 需要在父应用中创建相关元素
    container: "#qk-micro-react",
    // 子应用进入地址
    // entry: 'http://localhost:3011', // 本地启用
    entry: "https://onehulu.github.io/qiankun-mirco-react/", //github
    // 激活子应用的路由
    activeRule: "/qk-micro-react",
  },
  {
    name: "qk-micro-vue",
    container: "#qk-micro-vue",
    // entry: "http://localhost:3012/",// 本地启用
    entry: "https://onehulu.github.io/qiankun-mirco-vue/", //github
    activeRule: "/qk-micro-vue",
  },
]);

//启动 qiankun
start({
  sandbox: {
    // 样式隔离特性
    experimentalStyleIsolation: true,
  },
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
