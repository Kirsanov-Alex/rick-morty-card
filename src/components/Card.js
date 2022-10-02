import React from "react";

const Card = ({ character = [] }) => {
  return (
    <div className="container">
      {character.map((item, index) => (
        <div key={index} className="card">
          <img src={item.image} alt="" />
          <div className=" card-body">
            <h4 className="card-title">{item.name}</h4>
            <p>Species: {item.species}</p>
            <p>Location: {item.location.name}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
