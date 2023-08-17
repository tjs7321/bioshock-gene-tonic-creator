import React from "react";

function Plasmid({ rapture, title, tagline, effect, image }) {
  return (
    <div className={rapture?"plasmidCardRapture":"plasmidCardColumbia"}>
      <p className={rapture?"plasmidTitleRapture":"plasmidTitleColumbia"}>{rapture ? title.rapture : title.columbia}</p>
      <img className={rapture?"plasmidImageRapture":"plasmidImageColumbia"}
        src={rapture ? image.rapture : image.columbia}
        alt="plasmid/vigor icon"
      />
      <p className={rapture?"taglineRapture":"taglineColumbia"}>{rapture ? tagline.rapture : tagline.columbia}</p>
      {/* <p className="tagline">{rapture ? effect.rapture : effect.columbia}</p> */}
    </div>
  );
}

export default Plasmid;
