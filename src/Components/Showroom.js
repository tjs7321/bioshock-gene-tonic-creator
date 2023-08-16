import React from "react";
import Plasmid from "./Plasmid";
import { plasmids } from "../data";

function Showroom({ rapture }) {

  return(
    <div className="mainContainer">
      <p className="title">{rapture?"Plasmids":"Vigors"}</p>
      <div className="plasmidContainer">
          {plasmids.map((plasmid) => <Plasmid
          rapture={rapture}
          {...plasmid}
          key={plasmid.id}
          />)}
      </div>
    </div>
    )
}

export default Showroom;
