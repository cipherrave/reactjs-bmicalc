import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Calculator() {
  // Setting up navigation for Read More button
  const navigate = useNavigate();
  function navigateInfo() {
    navigate("/info");
  }

  function login() {
    event.preventDefault();
    let inputUsername = document.getElementById("inputUsername").value;

    if (!inputUsername) {
      alert("Please fill out the input fields!");
      return;
    } else {
      document.getElementById("cardLogin").style.display = "none";
      document.getElementById("cardCalc").style.display = "flex";
      document.getElementById("cardHistory").style.display = "flex";
      document.getElementById("logoutX").style.display = "flex";
      document.getElementById("userName").innerText = inputUsername;
      allData();
    }
  }

  function calcBMI() {
    let inputHeight = document.getElementById("inputHeight").value,
      inputWeight = document.getElementById("inputWeight").value;
    if (inputHeight == "" || inputWeight == "") {
      alert("Please fill out the input fields!");
      return;
    }
    // BMI = weight in KG / (height in m * height in m)
    let heightBMI = inputHeight / 100,
      BMI = inputWeight / (heightBMI * heightBMI);
    BMI = BMI.toFixed(2);
    document.getElementById("resultBMI").innerHTML = BMI;

    if (BMI < 18.5) {
      document.getElementById("cardResult").style.display = "flex";
      document.getElementById("cardResult").style.backgroundColor = "#118AB2";
      document.getElementById("cardResult").style.color = "white";
      document.getElementById("resultCategory").innerText = "😅 Underweight";
      document.getElementById("resultComment").innerHTML =
        "Based on your BMI, it seems you’re underweight.It’s essential to focus on balanced nutrition and consider consulting a healthcare professional.<br><br>Remember that being underweight can have health implications. Consider incorporating more nutrient-dense foods into your diet.";
    }
    if (BMI >= 18.5 && BMI < 25) {
      document.getElementById("cardResult").style.display = "flex";
      document.getElementById("cardResult").style.backgroundColor = "#06D6A0";
      document.getElementById("cardResult").style.color = "white";
      document.getElementById("resultCategory").innerText = "😊 Healthy";
      document.getElementById("resultComment").innerHTML =
        "Congratulations! Your BMI falls within the normal weight range. Keep up the healthy habits!<br><br>Maintaining a healthy weight is crucial for overall well-being.<br><br>Regular exercise and a balanced diet are key.";
    }
    if (BMI >= 25 && BMI < 30) {
      document.getElementById("cardResult").style.display = "flex";
      document.getElementById("cardResult").style.backgroundColor = "#FFB60C";
      document.getElementById("cardResult").style.color = "white";
      document.getElementById("resultCategory").innerText = "😦 Overweight";
      document.getElementById("resultComment").innerHTML =
        "Your BMI indicates that you’re in the overweight category.<br>Consider making lifestyle changes to manage your weight.<br><br>Being overweight can increase the risk of health conditions. Focus on portion control and physical activity.";
    }
    if (BMI >= 30 && BMI < 35) {
      document.getElementById("cardResult").style.display = "flex";
      document.getElementById("cardResult").style.backgroundColor = "#EF476F";
      document.getElementById("cardResult").style.color = "white";
      document.getElementById("resultCategory").innerText =
        "😖 Obese (Class 1)";
      document.getElementById("resultComment").innerHTML =
        "It appears that you’re in the obese category.<br>Prioritize your health by seeking professional guidance.<br><br>Obesity is associated with various health risks. <br><br>Consider a personalized plan to achieve a healthier weight.";
    }
    if (BMI >= 35 && BMI < 40) {
      document.getElementById("cardResult").style.display = "flex";
      document.getElementById("cardResult").style.backgroundColor = "#EF476F";
      document.getElementById("cardResult").style.color = "white";
      document.getElementById("resultCategory").innerText =
        "😖 Obese (Class 2)";
      document.getElementById("resultComment").innerHTML =
        "It appears that you’re in the obese category.<br>Prioritize your health by seeking professional guidance.<br><br>Obesity is associated with various health risks. <br><br>Consider a personalized plan to achieve a healthier weight.";
    }
    if (BMI > 40) {
      document.getElementById("cardResult").style.display = "flex";
      document.getElementById("cardResult").style.backgroundColor = "#EF476F";
      document.getElementById("cardResult").style.color = "white";
      document.getElementById("resultCategory").innerText =
        "😖 Obese (Class 3)";
      document.getElementById("resultComment").innerHTML =
        "It appears that you’re in the obese category.<br>Prioritize your health by seeking professional guidance.<br><br>Obesity is associated with various health risks. <br><br>Consider a personalized plan to achieve a healthier weight.";
    }

    const resultView = document.getElementById("cardResult");
    resultView.scrollIntoView(true);
    saveData();
  }

  function saveData() {
    let inputDataId = document.getElementById("inputDataId").value;
    let inputUsername = document.getElementById("inputUsername").value;
    let inputHeight = document.getElementById("inputHeight").value;
    let inputWeight = document.getElementById("inputWeight").value;

    let heightBMI = inputHeight / 100,
      BMI = inputWeight / (heightBMI * heightBMI);
    BMI = BMI.toFixed(2);

    let userData = JSON.parse(localStorage.getItem(inputUsername)) ?? [];

    const inputToday = new Date().toLocaleString();
    let id;
    userData.length != 0
      ? userData.findLast((item) => (id = item.id))
      : (id = 0);
    if (inputDataId) {
      userData.forEach((value) => {
        if (inputDataId == value.id) {
          (value.date = inputToday),
            (value.weight = inputWeight),
            (value.height = inputHeight),
            (value.bmi = BMI);
        }
      });
      document.getElementById("inputBookId").value = "";
    } else {
      let item = {
        id: id + 1,
        date: inputToday,
        weight: inputWeight,
        height: inputHeight,
        bmi: BMI,
      };
      userData.push(item);
    }
    localStorage.setItem(inputUsername, JSON.stringify(userData));

    allData();
    document.getElementById("form").reset();
  }

  function clearData() {
    document.getElementById("form").reset();
    document.getElementById("id").value = "";
  }

  function allData() {
    let inputUsername = document.getElementById("inputUsername").value;
    table.innerHTML = ``;
    let readUser = JSON.parse(localStorage.getItem(inputUsername)) ?? [];
    readUser.forEach(function (value, i) {
      let table = document.getElementById("table");
      table.innerHTML += `
            <tr>
                <td>${i + 1}</td>
                <td>${value.weight}</td>
                <td>${value.height}</td>
                <td>${value.bmi}</td>
                <td>
                <button style={{backgroundColor:"transparent"}} onClick={removeData(${
                  value.id
                })}>
               <p>❌</p></button>
                </td>
            </tr>`;
      // }
    });
  }

  return (
    <>
      <div className="divider">
        <div className="card" id="cardLogin">
          <div className="cardTitle">
            <h2>🙋 Welcome!</h2>
          </div>
          <p>Please enter your email</p>
          <form className="input">
            <input
              type="email"
              placeholder="Enter your email"
              className="form-control"
              id="inputUsername"
              required
            />
            <button onClick={login}>Login</button>
          </form>
        </div>
        <div className="card" id="cardResult" style={{ display: "none" }}>
          <div className="cardTitle">
            <h2>⚖️ Your BMI is</h2>
          </div>
          <p id="resultBMI"></p>
          <p id="resultCategory"></p>
          <p id="resultComment"></p>
          <button
            onClick={navigateInfo}
            style={{ backgroundColor: "white", color: "black" }}
          >
            More Info
          </button>
        </div>
        <div className="card" id="cardCalc" style={{ display: "none" }}>
          <div className="cardTitle">
            <h2>🔢 Calculator</h2>
          </div>
          <form className="input" id="form">
            <input type="hidden" name="id" id="inputDataId" />
            <p htmlFor="inputWeight">Weight (kg)</p>
            <input
              type="number"
              placeholder="Weight"
              className="form-control"
              id="inputWeight"
              required
            />
            <p htmlFor="inputHeight">Height (cm)</p>
            <input
              type="number"
              placeholder="Height"
              className="form-control"
              id="inputHeight"
              required
            />
            <div className="calcBtn">
              <button
                className="btn btn-sm btn-primary"
                type="button"
                onClick={calcBMI}
                style={{ backgroundColor: "#06d6a0" }}
              >
                Calculate
              </button>
              <button
                type="button"
                style={{
                  backgroundColor: "transparent",
                  color: "#ef476f",
                }}
                onClick={clearData}
              >
                Clear All
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="divider">
        <div
          className="cardHistory"
          id="cardHistory"
          style={{ display: "none" }}
        >
          <div className="cardTitle">
            <h2>⌚ History</h2>
          </div>
          <table>
            <thead>
              <tr>
                <th>No</th>
                <th>Weight (kg)</th>
                <th>Height (cm)</th>
                <th>BMI</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody id="table"></tbody>
          </table>
        </div>
      </div>
    </>
  );
}

function removeData(id) {
  let inputUsername = document.getElementById("inputUsername").value;

  let readUser = JSON.parse(localStorage.getItem(inputUsername)) ?? [];
  readUser = readUser.filter(function (value) {
    return value.id != id;
  });
  localStorage.removeItem(inputUsername, JSON.stringify(readUser));
  allData();
}
