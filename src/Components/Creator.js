import React, {useState, useEffect} from "react";
import NewPlasmidForm from "./NewPlasmidForm";
import CreatedPlasmids from "./CreatedPlasmids";

function Creator({rapture}){

    const baseURL = "http://127.0.0.1:3001/createdPlasmids"
    const [createdPlasmids, setCreatedPlasmids] = useState([])

    useEffect(() => {
        fetch(baseURL)
        .then(r=>r.json())
        .then(r=>setCreatedPlasmids(r))
    },[])

    function addNewPlasmid(r){
        setCreatedPlasmids([...createdPlasmids, r])
    }

    function handleClick(id){
        fetch(baseURL+'/'+id, {method: 'DELETE'})
        setCreatedPlasmids(createdPlasmids.filter((plasmid) => plasmid.id !== id))
    }

    return(
    <>{rapture ? "Welcome to Fontaine Futuristics" : "Welcome to Fink Manufacturing"}
    <img src={rapture ? "https://static.wikia.nocookie.net/villains/images/6/6b/FontaineFuturisticsLogoBS2.png" : "https://static.wikia.nocookie.net/bioshock/images/a/a7/Fink_Manufacturing_logo.png"}/>
    <NewPlasmidForm
    rapture={rapture}
    baseURL={baseURL}
    addNewPlasmid={addNewPlasmid}
    />
    <div>
        <h2>Creations</h2>
        {createdPlasmids.map((plasmid) =>
        <CreatedPlasmids
        rapture={rapture}
        {...plasmid}
        handleClick={handleClick}
        plasmid={plasmid}
        baseURL={baseURL}
        />)}
    </div>
    </>
    )
}

export default Creator