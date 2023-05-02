import React from "react";

import Card from "react-bootstrap/Card";

const BannerCard = ({ chef }) => {
  const {
    id,
    imageUrl,
    name,
    description,
    likes,
    experienceYears,
    NumbersRecipes,
  } = chef;
  return (
    <div className="m-4">
      <div className=" mx-5 my-12   card w-full h-96 bg-base-100 shadow-xl">
        <figure className="w-32 p-5">
          <img className="rounded img-fluid" src={imageUrl} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>

          <div className="card-actions justify-st mt-2">
            <button className="btn btn-outline btn-success">
              {experienceYears}
            </button>
            <button className="btn btn-outline btn-success">{likes}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerCard;
