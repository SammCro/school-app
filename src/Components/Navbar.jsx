import React from "react";

export default function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">
            <h3 className="text-white">Student App</h3>
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div>
            <a href="/register">
              <button className="btn btn-primary" style={{ margin: "10px" }}>
                Register
              </button>
            </a>
            <a href="/login">
              <button className="btn btn-primary"> Login</button>
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}
