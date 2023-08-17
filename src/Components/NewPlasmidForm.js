import React, {useState} from "react";

function NewPlasmidForm({rapture, baseURL, addNewPlasmid}){
    const plasmidFormEmpty = {
        title: {rapture: "", columbia: ""},
        tagline: {rapture: "", columbia: ""},
        effect: {rapture: "", columbia: ""},
        image: {rapture: "", columbia: ""}}
    const [newPlasmid, setNewPlasmid] = useState(plasmidFormEmpty)
    
    function handleFormSubmit(e){
        e.preventDefault()
        fetch(baseURL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newPlasmid)})
        .then(r=>r.json())
        .then(r=>addNewPlasmid(r))
        setNewPlasmid(plasmidFormEmpty)
    }
    
    function handleTitleEdit(e){
        let {name, value} = e.target
        setNewPlasmid(newPlasmid =>
            ({...newPlasmid, title: {...newPlasmid.title, [name]:value}}))
    }
    function handleTaglineEdit(e){
        let {name, value} = e.target
        setNewPlasmid(newPlasmid =>
            ({...newPlasmid, tagline: {...newPlasmid.tagline, [name]:value}}))
    }
    function handleEffectEdit(e){
        let {name, value} = e.target
        setNewPlasmid(newPlasmid =>
            ({...newPlasmid, effect: {...newPlasmid.effect, [name]:value}}))
    }
    function handleImageEdit(e){
        let {name, value} = e.target
        setNewPlasmid(newPlasmid =>
            ({...newPlasmid, image: {...newPlasmid.image, [name]:value}}))
    }

    
    return (
        <div>
            <h2>{rapture ? "Plasmid Creator" : "Vigor Creator"}</h2>
            <form onSubmit={handleFormSubmit}>
                <div name="title">
                    <div>
                        <input
                        type="text"
                        placeholder="Title"
                        name={rapture ? "rapture" : "columbia"}
                        onChange={handleTitleEdit}
                        value={rapture ? newPlasmid.title.rapture : newPlasmid.title.columbia}/>
                    </div>
                    <div>
                        <input
                        type="text"
                        placeholder="Alt Title"
                        name={rapture ? "columbia" : "rapture"}
                        onChange={handleTitleEdit}
                        value={rapture ? newPlasmid.title.columbia : newPlasmid.title.rapture}/>
                    </div>
                </div>
                <div name="tagline">
                    <div class="col">
                        <input
                        type="text"
                        placeholder="Tagline"
                        name={rapture ? "rapture" : "columbia"}
                        onChange={handleTaglineEdit}
                        value={rapture ? newPlasmid.tagline.rapture : newPlasmid.tagline.columbia}/>
                    </div>
                    <div class="col">
                        <input
                        type="text"
                        placeholder="Alt Tagline"
                        name={rapture ? "columbia" : "rapture"}
                        onChange={handleTaglineEdit}
                        value={rapture ? newPlasmid.tagline.columbia : newPlasmid.tagline.rapture}/>
                    </div>
                </div>
                {/* <div name="effect">
                    <div class="col">
                        <input
                        type="text"
                        placeholder="Effect"
                        name={rapture ? "rapture" : "columbia"}
                        onChange={handleEffectEdit}
                        value={rapture ? newPlasmid.effect.rapture : newPlasmid.effect.columbia}/>
                    </div>
                    <div>
                        <input
                        type="text"
                        placeholder="Alt Effect"
                        name={rapture ? "columbia" : "rapture"}
                        onChange={handleEffectEdit}
                        value={rapture ? newPlasmid.effect.columbia : newPlasmid.effect.rapture}/>
                    </div>
                </div> */}
                <div name="image">
                    <div class="col">
                        <input
                        type="text"
                        placeholder="Image URL"
                        name={rapture ? "rapture" : "columbia"}
                        onChange={handleImageEdit}
                        value={rapture ? newPlasmid.image.rapture : newPlasmid.image.columbia}/>
                    </div>
                    <div>
                        <input
                        type="text"
                        placeholder="Alt Image URL"
                        name={rapture ? "columbia" : "rapture"}
                        onChange={handleImageEdit}
                        value={rapture ? newPlasmid.image.columbia : newPlasmid.image.rapture}/>
                    </div>
                </div>
            <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default NewPlasmidForm