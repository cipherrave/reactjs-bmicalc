function BMIinfo() {
  return (
    <div>
      <div className="card">
        <p>
          Let’s dive into Body Mass Index (BMI) calculations and explore some
          healthy habits for overall well-being.
        </p>
        <h1>Body Mass Index (BMI) Calculation:</h1>
        <p>
          BMI is a measure of a person’s leanness or corpulence based on their
          height and weight. It quantifies tissue mass and is widely used to
          determine whether a person has a healthy body weight for their height.
        </p>
        <p>You can calculate BMI using the following formula:</p>
        <div
          className="infoBox"
          style={{
            backgroundImage: "url(src/assets/pics/bmimetric.png)",
            backgroundColor: "white",
            backgroundSize: "contain",
            backgroundPosition: "center",
            width: "80%",
            height: "100px",
            alignSelf: "center",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        <p>Alternatively, for US units:</p>
        <div
          className="infoBox"
          style={{
            backgroundImage: "url(src/assets/pics/bmiimperial.png)",
            backgroundSize: "contain",
            backgroundColor: "white",
            backgroundPosition: "center",
            width: "80%",
            height: "100px",
            alignSelf: "center",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        <p>The resulting BMI value falls into different categories:</p>
        <div className="infoBox">
          <p>
            <b>Underweight:</b> BMI less than 18.5
          </p>
          <p>
            <b>Normal weight:</b> BMI 18.5 - 25
          </p>
          <p>
            <b>Overweight:</b> BMI 25 - 30
          </p>
          <p>
            <b>Obese</b>
          </p>
          <li>(Class I) BMI 30 - 35</li>
          <li>(Class II) BMI 35 - 40</li>
          <li>(Class III): BMI more than 40</li>
        </div>
        <p>
          Remember that BMI has limitations and doesn’t account for muscle mass,
          bone density, or other factors. Consult a healthcare professional for
          a comprehensive assessment
        </p>
      </div>
    </div>
  );
}

export default BMIinfo;
