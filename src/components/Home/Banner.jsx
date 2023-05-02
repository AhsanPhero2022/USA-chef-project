import React from "react";
import bannerImg from "../../assets/banner.webp";
const Banner = () => {
  return (
    <div>
      <h3 className="text-info mt-4">Most Popular chef Food from USA</h3>
      <div
        className=" "
        style={{ backgroundImage: `url(${bannerImg})`, height: 600 }}
      >
        <h5 className="text-light text-center m-5 p-5">
          Todays guests love to feel like insiders
        </h5>

        <p className="text-light p-5 ">
          Personal interaction between cooks and diners is the norm at Ko bar,
          David Chang’s ‘ante room’ to the Michelin-starred Momofuku Ko. Both at
          the counter and at the tables, dialogue is encouraged. No one decides
          what we are going to cook,” said Mr. Gray. “We discuss it
          collectively. Right now, we have sardines we’re trying to find a home
          for.” The cooks drop the dishes in front of the diners for immediate
          feedback.
        </p>
      </div>
    </div>
  );
};

export default Banner;
