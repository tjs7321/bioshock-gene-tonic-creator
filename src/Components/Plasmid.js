import React from "react";

function Plasmid({rapture, title, tagline, effect, image}){
    return(
    <>
        <h1>{rapture ? title.rapture : title.columbia}</h1>
        <img src={rapture ? image.rapture : image.columbia} alt="plasmid/vigor icon"/>
        <p>{rapture ? tagline.rapture : tagline.columbia}</p>
        <p>{rapture ? effect.rapture : effect.columbia}</p>
    </>
    )
}

export default Plasmid