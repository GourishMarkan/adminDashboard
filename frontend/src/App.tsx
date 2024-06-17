// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";

import "./App.css";
import { Sidebar, Navbar } from "./components/index";
import { Outlet } from "react-router-dom";
function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <div className="h-[60px] w-full border-b">
          <Navbar />
        </div>
        <div className="flex">
          <div className="basis-[15%] h-100vh">
            <Sidebar />
          </div>
          <div className="basis-[80%]">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
