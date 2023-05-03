import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Card, CardGroup, Col, Container, Row } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ViewRecipe = () => {
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [desable, setDesable] = useState(false);
  const [btnDesa, setBtnDesa] = useState(false);
  const buttonDisabled1 = () => {
    setDesable(true);
    toast("Wow! Your Are Success To Add Favorite");
  };
  const buttonDisabled2 = () => {
    setBtnDesa(true);
    toast("Wow! Your Are Success To Add Favorite");
  };

  const handleToast = () => {
    setButtonDisabled(true);
    toast("Wow! Your Are Success To Add Favorite");
  };

  const singleData = useLoaderData();
  const {
    likes,
    imageUrl,
    name,
    description,
    NumbersRecipes,
    experienceYears,
    imageUrl1,
    imageUrl2,
    imageUrl3,
    ingredients,
    recipeName,
    recipeName1,
    recipeName2,
    cookingInfo1,
    ratings,
  } = singleData;
  return (
    <div>
      <Container className="mx-auto bg-info bg-opacity-50 m-5 border p-5 rounded">
        <Row>
          <Col lg={6}>
            <h2>The Chef Name: {name}</h2>
            <p>{description}</p>
            <button className="mt-3 btn btn-info">Like: {likes}</button>
            <br />
            <button className="mt-3 btn btn-info">
              Experience: {experienceYears}
            </button>
            <br />
            <button className="mt-3 btn btn-info">
              Number of Recipes: {NumbersRecipes}
            </button>
          </Col>
          <Col lg={6}>
            <div className=" text-center">
              <img className="img-fluid" src={imageUrl} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
      <CardGroup className="container">
        <Card className="mx-2 rounded shadow bg-gradient">
          <Card.Img variant="top" src={imageUrl1} />
          <Card.Body>
            <Card.Title>{recipeName}</Card.Title>
            <Card.Text>
              <h4 className="mt-3">Ingredients:</h4>
              {ingredients}
            </Card.Text>
            <Card.Text>
              <h4>Cooking Method:</h4> {cookingInfo1}
            </Card.Text>
            <h6 className="p-2">Ratings: {ratings}</h6>
            <button
              disabled={desable}
              onClick={buttonDisabled1}
              className="w-100 mb-3 btn btn-success"
            >
              Favorite
            </button>
          </Card.Body>
        </Card>
        <Card className="mx-2 rounded shadow bg-gradient">
          <Card.Img variant="top" src={imageUrl3} />
          <Card.Body>
            <Card.Title>{recipeName1}</Card.Title>
            <Card.Text>
              <h4 className="mt-3">Ingredients:</h4>
              {ingredients}
            </Card.Text>
            <Card.Text>
              <h4>Cooking Method:</h4> {cookingInfo1}
            </Card.Text>
            <h6 className="p-2">Ratings: {ratings}</h6>
            <button
              disabled={btnDesa}
              onClick={buttonDisabled2}
              className="w-100 mb-3 btn btn-success"
            >
              Favorite
            </button>
          </Card.Body>
        </Card>
        <Card className="mx-2 rounded shadow bg-gradient">
          <Card.Img variant="top" src={imageUrl2} />
          <Card.Body>
            <Card.Title>{recipeName2}</Card.Title>
            <Card.Text>
              <h4 className="mt-3">Ingredients:</h4>
              {ingredients}
            </Card.Text>
            <Card.Text>
              <h4>Cooking Method:</h4> {cookingInfo1}
            </Card.Text>
            <h6 className="p-2">Ratings: {ratings}</h6>

            <button
              disabled={buttonDisabled}
              onClick={handleToast}
              className="w-100 mb-3 btn btn-success"
            >
              Favorite
            </button>
            <ToastContainer></ToastContainer>
          </Card.Body>
        </Card>
      </CardGroup>
    </div>
  );
};

export default ViewRecipe;
