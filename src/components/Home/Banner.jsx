import React, { useEffect, useState } from "react";
import bannerImg from "../../assets/banner.webp";
import BannerCard from "./BannerCard";
import { Spinner } from "react-bootstrap";

const Banner = () => {
  const [allChef, setChef] = useState([]);
  const [likeCount, setLikeCount] = useState(0);
  const [loading, setLoading] = useState(true);

  const handleLikeClick = () => {
    setLikeCount(likeCount + 1);
  };

  useEffect(() => {
    setTimeout(() => {
      fetch("https://assignment-10-server-ahsanphero2022.vercel.app/allData")
        .then((response) => response.json())
        .then((data) => setChef(data));
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div>
      <div>
        <h3 className="text-info my-4 ">Most Popular chef Food from USA</h3>
      </div>
      <div
        className=" "
        style={{ backgroundImage: `url(${bannerImg})`, height: 600 }}
      >
        <h4 className="text-light  pt-5 px-5">
          Todays guests love to feel like insiders
        </h4>

        <p className="text-light  px-5 ">
          Personal interaction between cooks and diners is the norm at Ko bar,
          David Changs ante room to the Michelin-starred Momofuku Ko. Both at
          the counter and at the tables, dialogue is encouraged. No one decides
          what we are going to cook,” said Mr. Gray. “We discuss it
          collectively. Right now, we have sardines were trying to find a home
          for.” The cooks drop the dishes in front of the diners for immediate
          feedback.
        </p>
        <button
          onClick={handleLikeClick}
          className="btn btn-warning ms-5 mt-4 px-3 "
        >
          <h3>Like It: {likeCount}</h3>
        </button>
      </div>

      <div className="  gap-4 ">
        <h2 className="text-center text-white my-4 bg-info rounded p-3">
          The Famous Chef is Here
        </h2>
        {loading ? (
          <Spinner
            className="m-5"
            variant="info"
            animation="border"
            role="status"
          >
            <span className="sr-only ">Loading...</span>
          </Spinner>
        ) : (
          <div>
            {allChef.map((chef) => (
              <BannerCard chef={chef}></BannerCard>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Banner;
