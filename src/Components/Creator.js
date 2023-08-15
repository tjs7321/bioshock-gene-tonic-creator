import React from "react";
import NewPlasmidForm from "./NewPlasmidForm";

function Creator({rapture}){
    return(
    <>{rapture ? "Welcome to Fontaine Futuristics" : "Welcome to Fink Manufacturing"}
    <img src={rapture ? "https://static.wikia.nocookie.net/villains/images/6/6b/FontaineFuturisticsLogoBS2.png" : "https://static.wikia.nocookie.net/bioshock/images/a/a7/Fink_Manufacturing_logo.png"}/>
    </>
    )
}

export default Creator