import React, {useState} from "react";

function NewPlasmidForm({rapture}){
    const plasmidFormEmpty = {
        title: {rapture: "", columbia: ""},
        tagline: {rapture: "", columbia: ""},
        effect: {rapture: "", columbia: ""},
        image: {rapture: "", columbia: ""}}
    const [newPlasmid, setNewPlasmid] = useState(plasmidFormEmpty)
    
    function handleFormSubmit(e){
        e.preventDefault()
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

    console.log(newPlasmid)

    
    return (
        <div class="container mt-3">
            <h2>{rapture ? "Plasmid Creator" : "Vigor Creator"}</h2>
            <form onSubmit={handleFormSubmit} action="/action_page.php">
                <div name="title" class="row">
                    <div class="col">
                        <input
                        type="text"
                        class="form-control"
                        placeholder="Title"
                        name={rapture ? "rapture" : "columbia"}
                        onChange={handleTitleEdit}
                        value={rapture ? newPlasmid.title.rapture : newPlasmid.title.columbia}/>
                    </div>
                    <div class="col">
                        <input
                        type="text"
                        class="form-control"
                        placeholder="Alt Title"
                        name={rapture ? "columbia" : "rapture"}
                        onChange={handleTitleEdit}
                        value={rapture ? newPlasmid.title.columbia : newPlasmid.title.rapture}/>
                    </div>
                </div>
                <div name="tagline" class="row">
                    <div class="col">
                        <input
                        type="text"
                        class="form-control"
                        placeholder="Tagline"
                        name={rapture ? "rapture" : "columbia"}
                        onChange={handleTaglineEdit}
                        value={rapture ? newPlasmid.tagline.rapture : newPlasmid.tagline.columbia}/>
                    </div>
                    <div class="col">
                        <input
                        type="text"
                        class="form-control"
                        placeholder="Alt Tagline"
                        name={rapture ? "columbia" : "rapture"}
                        onChange={handleTaglineEdit}
                        value={rapture ? newPlasmid.tagline.columbia : newPlasmid.tagline.rapture}/>
                    </div>
                </div>
                <div name="effect" class="row">
                    <div class="col">
                        <input
                        type="text"
                        class="form-control"
                        placeholder="Effect"
                        name={rapture ? "rapture" : "columbia"}
                        onChange={handleEffectEdit}
                        value={rapture ? newPlasmid.effect.rapture : newPlasmid.effect.columbia}/>
                    </div>
                    <div class="col">
                        <input
                        type="text"
                        class="form-control"
                        placeholder="Alt Effect"
                        name={rapture ? "columbia" : "rapture"}
                        onChange={handleEffectEdit}
                        value={rapture ? newPlasmid.effect.columbia : newPlasmid.effect.rapture}/>
                    </div>
                </div>
                <div name="image" class="row">
                    <div class="col">
                        <input
                        type="text"
                        class="form-control"
                        placeholder="Image URL"
                        name={rapture ? "rapture" : "columbia"}
                        onChange={handleImageEdit}
                        value={rapture ? newPlasmid.image.rapture : newPlasmid.image.columbia}/>
                    </div>
                    <div class="col">
                        <input
                        type="text"
                        class="form-control"
                        placeholder="Alt Image URL"
                        name={rapture ? "columbia" : "rapture"}
                        onChange={handleImageEdit}
                        value={rapture ? newPlasmid.image.columbia : newPlasmid.image.rapture}/>
                    </div>
                </div>
            <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default NewPlasmidForm