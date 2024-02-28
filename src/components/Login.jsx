function Login() {
  return (
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
        <button onclick={login}>Login</button>
      </form>
    </div>
  );
}

export default Login;
