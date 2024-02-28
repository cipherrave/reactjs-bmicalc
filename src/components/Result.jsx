function Result() {
  function goToInfo() {
    window.location.href = url + "/info";
  }
  return (
    <div className="card" id="cardResult">
      <div className="cardTitle">
        <h2>⚖️ Your BMI is</h2>
      </div>
      <p id="resultBMI"></p>
      <p id="resultCategory"></p>
      <p id="resultComment"></p>
      <button onClick={goToInfo}>More Info</button>
    </div>
  );
}

export default Result;
