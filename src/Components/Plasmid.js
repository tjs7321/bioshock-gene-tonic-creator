import React from "react";

function Plasmid({ rapture, title, tagline, effect, image }) {
  return (
    <div className="plasmid">
      <h1>{rapture ? title.rapture : title.columbia}</h1>
      <img
        src={rapture ? image.rapture : image.columbia}
        alt="plasmid/vigor icon"
      />
      <p>{rapture ? tagline.rapture : tagline.columbia}</p>
      <p className="effect">{rapture ? effect.rapture : effect.columbia}</p>
    </div>
  );
}

export default Plasmid;
