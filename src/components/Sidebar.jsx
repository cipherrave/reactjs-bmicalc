import { useNavigate } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate();
  function navigateHome() {
    navigate("/");
  }

  function navigateInfo() {
    navigate("/info");
  }

  function toggleSideBar() {
    if (document.getElementById("toggleSideBar").value == "CLOSED") {
      document.getElementById("toggleSideBar").value = "OPEN";
      document.getElementById("sidebar").style.width = "200px";
      document.getElementById("main").style.marginLeft = "165px";
      document.getElementById("titleBar").style.paddingLeft = "235px";
      document.getElementById("madeBy").style.display = "block";
    } else {
      document.getElementById("toggleSideBar").value = "CLOSED";
      document.getElementById("sidebar").style.width = "35px";
      document.getElementById("main").style.marginLeft = "0px";
      document.getElementById("titleBar").style.paddingLeft = "70px";
      document.getElementById("madeBy").style.display = "none";
    }
  }

  function logout() {
    goToCalculator();
    document.getElementById("cardLogin").style.display = "flex";
    document.getElementById("cardCalc").style.display = "none";
    document.getElementById("cardHistory").style.display = "none";
    document.getElementById("cardResult").style.display = "none";
    document.getElementById("userName").innerText = "";
    document.getElementById("logoutX").style.display = "none";
  }

  return (
    <div className="sidebar" id="sidebar">
      <div className="sidebarTop">
        <img src="src/assets/icons/logo.svg" alt="" />
        <img
          src="src/assets/icons/list.svg"
          id="toggleSideBar"
          onClick={toggleSideBar}
          style={{ cursor: "pointer" }}
        />
        <div
          className="sidebarList"
          style={{ justifyContent: " space-between" }}
        >
          <div style={{ display: "flex", flexDirection: "row", gap: "1pc" }}>
            <p>👤</p>
            <p
              id="userName"
              style={{
                width: "100px",
                textOverflow: "ellipsis",
                overflow: "hidden",
              }}
            ></p>
          </div>
          <button
            style={{ all: "unset", display: "none" }}
            id="logoutX"
            onClick={logout}
          >
            ❌
          </button>
        </div>
        <div className="sidebarList" id="calculator" onClick={navigateHome}>
          <p>🔢</p>
          <p>Calculator</p>
        </div>
        <div className="sidebarList" id="info" onClick={navigateInfo}>
          <p>📖</p>
          <p>Info</p>
        </div>
      </div>
      <div className="madeBy" id="madeBy">
        <h5>made by cipherrave</h5>
      </div>
    </div>
  );
}

export default Sidebar;
