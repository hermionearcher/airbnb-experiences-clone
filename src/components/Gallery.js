import React from 'react';
import { experiences } from '../data/db.js';

export default function Gallery() {
  return (
    <div className="gallery--row">
      {experiences.map((experience, index) => {
        const styles = () => {
          if (experience.available === "") {
return "display: none"
          }
        }
        return (
          <div className="gallery--card">
            <p className="gallery--label" style={experience.available === "" ? {display:"none"} : {}} >{experience.available ? "ONLINE" : experience.available === false ? "SOLD OUT" : ""}</p>
            <img className="gallery--card--img" src={experience.image} />
            {/* <div className="gallery--review">
              <i className="fa fa-star fa-lg"></i>
              <p>{experience.rating}</p>
              <p>({experience.numReviews}) • USA</p>
            </div> */}

            <p className="gallery--review">
              <i className="fa fa-star fa-lg"></i>
              <span className="gallery--rating-text">{experience.rating}</span>
              <span className="gallery--text-grey">
                ({experience.numReviews}) • USA
              </span>
            </p>
            <p className="gallery--textwrap">{experience.title} </p>
            <p className="gallery--textwrap">
              <strong>From ${experience.price}</strong> / person
            </p>
          </div>
        );
      })}
    </div>
  );
}
