import React from "react";
import Plasmid from "./Plasmid";
import { plasmids } from "../data"

function Showroom({rapture}){

console.log(plasmids)

    return(
    <>
        <Plasmid
        rapture={rapture}
        />
    </>
    )
}

export default Showroom