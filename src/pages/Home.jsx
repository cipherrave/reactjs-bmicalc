import { useState } from "react";
import Login from "../components/Login";
import Sidebar from "../components/Sidebar";
import Calculator from "../components/Calculator";
import Result from "../components/Result";

function Home() {
  const [count, setCount] = useState(0);

  function clearData() {
    document.getElementById("form").reset();
    document.getElementById("id").value = "";
  }

  return (
    <>
      <div className="titleBar" id="titleBar">
        <h1>BMI Calculator</h1>
      </div>
      <Sidebar></Sidebar>
      <div className="main" id="main">
        <div className="content">
          <div className="divider">
            <Login></Login>
            <Result></Result>
            <Calculator></Calculator>
          </div>
          <div className="divider">
            <History></History>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
