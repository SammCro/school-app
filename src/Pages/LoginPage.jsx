import React from "react";

export default function LoginPage() {
  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-header">
          <h3>Login</h3>
        </div>
        <div className="card-body">
          <form>
            <label className="mb-2 d-block" htmlFor="mailG">
              Email
            </label>
            <input
              className="mb-3 form-control"
              type={"email"}
              name="mailG"
              id="mailG"
              placeholder="Email"
            ></input>

            <label className="mb-2 d-block" htmlFor="passwordG">
              Password
            </label>
            <input
              className="mb-3 form-control"
              type={"password"}
              name="passwordG"
              id="passwordG"
              placeholder="Password"
            ></input>
            <a href="/">
              <button type="submit" className="btn w-100 btn-primary">
                Login
              </button>
            </a>
          </form>
        </div>
      </div>
    </div>
  );
}
