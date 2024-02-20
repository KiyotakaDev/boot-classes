import React from "react";
import { socialMedia } from "../constants";
import { MediaButton } from "./MediaButton";

const UserCard = ({ info }) => {
  const { name, country, charge, img_src, company, summary } = info;

  return (
    // Card container
    <div className="user-card">
      {/* Image side */}
      <div className="dev-container">
        <h2 className="dev-name">{name}</h2>
        <img className="dev-img" src={img_src} alt="name" />
        <div className="media">
          {socialMedia.map((media, index) => (
            <MediaButton media={media} index={index} />
          ))}
        </div>
      </div>

      {/* Info side */}
      <div className="dev-info">
        {/* Text wrapper */}
        <div className="info-wrapper">
          <ul className="info">
            <li>
              Hi I'm <span className="h">{name}</span> a{" "}
              <span className="h">{charge}</span>.
            </li>
            <li>
              Currently in <span className="h">{country}</span>.
            </li>
            {company != "None" ? (
              <li>
                Company: <span className="h">{company}</span>
              </li>
            ) : null}
            <li>
              Working as a <span className="h">{charge}</span>.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
