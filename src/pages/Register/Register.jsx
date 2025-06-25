import React from "react";
import { Link } from "react-router";

const Register = () => {
  return (
    <div className="card mx-auto bg-base-100 w-full max-w-sm shrink-0 mt-24 shadow-2xl">
      <h2 className="text-3xl font-bold text-center">Register your account</h2>
      <div className="card-body">
        <fieldset className="fieldset">
          <label className="label">Your Name</label>
          <input type="text" className="input" placeholder="Enter your name" />
          <label className="label">Photo URL</label>
          <input type="email" className="input" placeholder="Photo Url" />
          <label className="label">Email</label>
          <input type="email" className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" className="input" placeholder="Password" />

          <button className="btn btn-neutral mt-4">Register</button>
          <p className="text-sm font-medium">
            Already Have An Account ?{" "}
            <Link className="text-red-500" to="/auth/login">
              Login
            </Link>
          </p>
        </fieldset>
      </div>
    </div>
  );
};

export default Register;
