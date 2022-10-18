import React, { useState } from "react";
import "./Details.scss";
import { GrNext, GrPrevious } from "react-icons/gr";

const Details = ({ props }) => {
  const handlePrev = () => {
    let lists = document.querySelectorAll(".item");
    document.getElementById("slide").prepend(lists[lists.length - 1]);
  };

  const handleNext = () => {
    let lists = document.querySelectorAll(".item");
    document.getElementById("slide").appendChild(lists[0]);
  };

  return (
    <div id="slide">
      {props.map((item) => {
        return (
          <div
            className="item"
            style={{
              backgroundImage: "url(" + `${item.image}` + ")",
            }}
            key={item.id}
          >
            <div className="content">
              <div className="name">{item.name}</div>
              <div className="description">{item.location}</div>

              <a href="/">
                <button className="more"> See more</button>
              </a>
            </div>
          </div>
        );
      })}
      <div className="btn-size">
        <button className="btn " id="prev" onClick={handlePrev}>
          <GrPrevious />
        </button>
        <button className="btn " id="next" onClick={handleNext}>
          <GrNext />
        </button>
      </div>
    </div>
  );
};

export default Details;
