import React from "react";
import Plasmid from "./Plasmid";
import { plasmids } from "../data";

function Showroom({ rapture }) {

  return(
    <div className="mainContainer">
      <div className={rapture?"plasmidTitleCardRapture":"plasmidTitleCardColumbia"}>
      <p className={rapture?"plasmidMainTitleRapture":"plasmidMainTitleColumbia"}>{rapture?"Plasmids":"Vigors"}</p>
      </div>
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
