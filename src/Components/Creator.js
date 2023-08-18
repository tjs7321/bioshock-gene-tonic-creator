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
    <div className="mainContainer">
    {/* <img src={rapture ? "https://static.wikia.nocookie.net/villains/images/6/6b/FontaineFuturisticsLogoBS2.png" : "https://static.wikia.nocookie.net/bioshock/images/a/a7/Fink_Manufacturing_logo.png"}/> */}
    <div className={rapture?"plasmidTitleCardRapture":"plasmidTitleCardColumbia"}>
    <h2 className={rapture?"plasmidMainTitleRapture":"plasmidMainTitleColumbia"}>{rapture?"Plasmids":"Vigors"}</h2>
    </div>
    <div className="plasmidContainer">
        {createdPlasmids.map((plasmid) =>
        <CreatedPlasmids
        rapture={rapture}
        {...plasmid}
        handleClick={handleClick}
        plasmid={plasmid}
        baseURL={baseURL}
        />)}
        <NewPlasmidForm
        rapture={rapture}
        baseURL={baseURL}
        addNewPlasmid={addNewPlasmid}
        />
    </div>
    </div>
    )
}

export default Creator