import { useState } from "react";
import Sidebar from "../components/Sidebar";
import BMIinfo from "../components/BMIinfo";
import Tips from "../components/Tips";

function Info() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="titleBar" id="titleBar">
        <h1>BMI Calculator - Info</h1>
      </div>
      <Sidebar></Sidebar>
      <div className="main" id="main">
        <div className="content">
          <div className="divider">
            <BMIinfo></BMIinfo>
          </div>
          <div className="divider">
            <Tips></Tips>
          </div>
        </div>
      </div>
    </>
  );
}

export default Info;
