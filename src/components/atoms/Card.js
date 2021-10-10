import React from "react";

const Card = ({ heading, paragraph, imgUrl, projectLink }) => {
  const cardStyle = {
    backgroundImage:
      "linear-gradient(to bottom, rgba(245, 246, 252, 0), rgba(0, 0, 0, 0.2)),url(" +
      imgUrl +
      ")",
  };

  return (
    <div className="card" style={cardStyle}>
      <div className="content">
        <h1 className="header">{heading}</h1>
        <p className="text">{paragraph}</p>
        <a
          href={projectLink ? projectLink : "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="btn"
        >
          Saiba mais
        </a>
      </div>
    </div>
  );
};

export default Card;
