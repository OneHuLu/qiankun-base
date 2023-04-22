import React from "react";
import { Link, BrowserRouter } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* // 先做一个简单的路由跳转 */}
      <BrowserRouter>
        <h3>
          <Link to="/qk-micro-react">微前端React</Link>
        </h3>
        <h3>
          <Link to="/qk-micro-vue">微前端Vue</Link>
        </h3>
      </BrowserRouter>
      {/* id 要与 registerMicroApps 当中的 container 对齐 */}
      {/* react子应用挂载容器 id=qk-micro-react */}
      <div id="qk-micro-react" />
      {/* vue子应用挂在容器 id=qk-micro-vue  */}
      <div id="qk-micro-vue" />
    </div>
  );
}

export default App;
