function Calculator() {
  return (
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
            onclick={calcBMI}
            style={{ backgroundColor: "#06d6a0" }}
          >
            Calculate
          </button>
          <button
            className="btn btn-sm btn-primary"
            type="button"
            onClick={{ clearData }}
          >
            Clear All
          </button>
        </div>
      </form>
    </div>
  );
}

export default Calculator;
