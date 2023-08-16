import React from "react";
import Plasmid from "./Plasmid";
import { plasmids } from "../data";

function Showroom({ rapture }) {

  return(
    <div class="row bg-primary">
        {plasmids.map((plasmid) => <Plasmid
        rapture={rapture}
        {...plasmid}
        key={plasmid.id}
        />)}
    </div>
    )
}

export default Showroom;
