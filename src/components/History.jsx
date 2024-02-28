function History() {
  return (
    <div className="cardHistory" id="cardHistory" style={{ display: "none" }}>
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
  );
}

export default History;
