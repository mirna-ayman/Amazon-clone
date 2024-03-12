import React from "react";
import { useAuth } from "../context/GlobalContext";
import starIcon from "../images/icons/star.png";
import "./Product.css";
import { useNavigate } from "react-router-dom";

const Product = ({ title, price, image, rating, id }) => {
  const { dispatch, user } = useAuth();
  const navigate = useNavigate();
  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  const lert = () => {
    alert(`Please Login First `);
    navigate("/login");
  };

  return (
    <div className="product">
      <div className="product-info">
        <p className="product-price">
          <p>{title}</p>
          <small>$</small>
          <strong>{price}</strong>
        </p>
      </div>
      <img src={image} alt="product-img" />
      <div className="product-rating">
        {Array(rating)
          .fill()
          .map((_, i) => (
            <p key={i}>
              <img src={starIcon} alt="" />
            </p>
          ))}
      </div>
      <button onClick={user ? addToBasket : lert}>Add to Basket</button>
    </div>
  );
};

export default Product;
