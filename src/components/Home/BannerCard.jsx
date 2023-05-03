import React from "react";
import { Link } from "react-router-dom";

const BannerCard = ({ chef }) => {
  const { id, imageUrl, name, likes, experienceYears, NumbersRecipes } = chef;
  return (
    <div className="m-4">
      <div className=" mx-5 my-12  w-full card  h-96 bg-base-100 shadow-xl">
        <figure className="w-32 p-5">
          <img className="rounded img-fluid" src={imageUrl} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <Link to={`/viewrecipe/${id}`}>
            <button className="btn btn-info    my-3">
              View Recipes Button
            </button>
          </Link>
          <div className="card-actions justify-st mt-2">
            <button className="btn btn-outline btn-success ">
              <span>Years of Experience: </span>
              {experienceYears}
            </button>
            <button className="btn btn-outline btn-success ms-1">
              Likes:
              <span> {likes}</span>
            </button>
            <button className="btn btn-outline btn-success ms-1">
              Numbers of recipes:
              <span> {NumbersRecipes}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerCard;
