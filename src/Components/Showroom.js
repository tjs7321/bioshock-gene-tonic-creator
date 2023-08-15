import React from "react";
import Plasmid from "./Plasmid";
import {plasmids} from "../data"

function Showroom({rapture}){

    return(
    <>
        {plasmids.map((plasmid) => <Plasmid
        rapture={rapture}
        {...plasmid}
        key={plasmid.id}
        />)}
    </>
    )
}

export default Showroom