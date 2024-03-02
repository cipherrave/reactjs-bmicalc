import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Calculator from "../components/Calculator";

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
          <Calculator></Calculator>
        </div>
      </div>
    </>
  );
}

export default Home;
