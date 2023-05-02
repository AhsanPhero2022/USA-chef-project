import React, { useEffect, useState } from "react";
import bannerImg from "../../assets/banner.webp";
import BannerCard from "./BannerCard";

const Banner = () => {
  const [chefs, setChef] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/allData")
      .then((response) => response.json())
      .then((data) => setChef(data));
  }, []);

  return (
    <div>
      <div>
        <h3 className="text-info mt-4 ">Most Popular chef Food from USA</h3>
      </div>
      <div
        className=" "
        style={{ backgroundImage: `url(${bannerImg})`, height: 600 }}
      >
        <h5 className="text-light text-center m-5 p-5">
          Todays guests love to feel like insiders
        </h5>

        <p className="text-light p-5 ">
          Personal interaction between cooks and diners is the norm at Ko bar,
          David Changs ante room to the Michelin-starred Momofuku Ko. Both at
          the counter and at the tables, dialogue is encouraged. No one decides
          what we are going to cook,” said Mr. Gray. “We discuss it
          collectively. Right now, we have sardines were trying to find a home
          for.” The cooks drop the dishes in front of the diners for immediate
          feedback.
        </p>
      </div>

      <div className="   gap-4 ">
        <h2 className="text-center text-white my-4 bg-info rounded p-3">
          The Famous Chef is Here
        </h2>
        {chefs.map((chef) => (
          <BannerCard chef={chef}></BannerCard>
        ))}
      </div>

      <div className="text-center m-3 mt-5 "></div>
    </div>
  );
};

export default Banner;
