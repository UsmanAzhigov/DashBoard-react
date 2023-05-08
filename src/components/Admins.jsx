import React from "react";
import "../App.css";

const Admins = () => {
  return (
    <>
      <h1>Авторизация</h1>
      <div className="block">
        <form>
          <div className="form-group">
            {/* <label className="form-label" for="username">
            Username
          </label> */}
            <input
              placeholder="Username"
              name="username"
              autocomplete="username"
              required
              id="username"
              className="form-control"
            />
          </div>
          <br />
          <div className="form-group">
            {/* <label className="form-label" for="password">
            Password
          </label> */}
            <input
              placeholder="Password"
              name="password"
              autocomplete="current-password"
              required
              id="password"
              className="form-control"
              type="password"
            />
          </div>
          <br />
          <button type="submit" className=" btn-outline-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};
export default Admins;
