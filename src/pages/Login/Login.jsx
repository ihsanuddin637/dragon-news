import React from "react";
import { Link } from "react-router";

const Login = () => {
  return (
    <div className="card mx-auto bg-base-100 w-full max-w-sm shrink-0 mt-24 shadow-2xl">
      <h2 className="text-3xl font-bold text-center">Login your account</h2>
      <div className="card-body">
        <fieldset className="fieldset">
          <label className="label">Email</label>
          <input type="email" className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" className="input" placeholder="Password" />
          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>
          <button className="btn btn-neutral mt-4">Login</button>
          <p className="text-sm font-medium">
            Dont’t Have An Account ?{" "}
            <Link className="text-red-500" to="/auth/register">
              Register
            </Link>
          </p>
        </fieldset>
      </div>
    </div>
  );
};

export default Login;
