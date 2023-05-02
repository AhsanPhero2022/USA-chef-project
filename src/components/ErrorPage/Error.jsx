import React from "react";
import { Link } from "react-router-dom";
import img from "../../assets/error.jpg";

const ErrorPage = () => {
  return (
    <section className="">
      <div className="text-center mt-5">
        <img src={img} alt="" />
      </div>
      <div className="text-center mt-3">
        <h1>404</h1>
        <p>page not found</p>
        <Link to="/">Back to Home</Link>
      </div>
    </section>
  );
};

export default ErrorPage;
