import React from "react";
import { useLoaderData } from "react-router-dom";

const ViewRecipe = () => {
  const singleData = useLoaderData();
  const { name, description } = singleData;
  return (
    <div>
      <h2>thsi is recewsgdsfgsdfipe{name}</h2>
      <h2>thsi is recewsgdsfgsdfipe{description}</h2>
    </div>
  );
};

export default ViewRecipe;
