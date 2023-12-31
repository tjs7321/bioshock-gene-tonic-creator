import React, {useState} from "react";

function CreatedPlasmids({rapture, baseURL, plasmid, id, handleClick}){

    const [editFormShow, setEditFormShow] = useState(false)
    const [editedPlasmid, setEditedPlasmid] = useState(plasmid)
    const editForm = 
    <div style={{cursor:"auto"}} className={rapture?"plasmidCardRapture":"plasmidCardColumbia"}>
        <h2 className={rapture?"plasmidTitleRapture":"plasmidTitleColumbia"}>{rapture ? "Plasmid Editor" : "Vigor Editor"}</h2>
        <div className={rapture?"editFormRapture":"editFormColumbia"}>
            <input
            style={{margin:"3px"}}
            required
            type="text"
            placeholder="Title"
            name="rapture"
            onChange={handleTitleEdit}
            value={editedPlasmid.title.rapture}/>
            <input
            style={{margin:"3px"}}
            required
            type="text"
            placeholder="Alt Title"
            name="columbia"
            onChange={handleTitleEdit}
            value={editedPlasmid.title.columbia}/>
            <input
            style={{margin:"3px"}}
            required
            type="text"
            placeholder="Tagline"
            name="rapture"
            onChange={handleTaglineEdit}
            value={editedPlasmid.tagline.rapture}/>
            <input
            style={{margin:"3px"}}
            required
            type="text"
            placeholder="Alt Tagline"
            name="columbia"
            onChange={handleTaglineEdit}
            value={editedPlasmid.tagline.columbia}/>
            <input
            style={{margin:"3px"}}
            required
            type="text"
            placeholder="Image URL"
            name="rapture"
            onChange={handleImageEdit}
            value={editedPlasmid.image.rapture}/>
            <input
            style={{margin:"3px"}}
            required
            type="text"
            placeholder="Alt Image URL"
            name="columbia"
            onChange={handleImageEdit}
            value={editedPlasmid.image.columbia}/>
        </div>
    </div>

    const plasmidCard =
    <div style={{cursor:"auto"}} className={rapture?"plasmidCardRapture":"plasmidCardColumbia"}>
        <h1 className={rapture?"plasmidTitleRapture":"plasmidTitleColumbia"}>{rapture ? editedPlasmid.title.rapture : editedPlasmid.title.columbia}</h1>
        <img  className={rapture?"plasmidImageRapture":"plasmidImageColumbia"} src={rapture ? editedPlasmid.image.rapture : editedPlasmid.image.columbia} alt="plasmid/vigor icon"/>
        <p className={rapture?"taglineRapture":"taglineColumbia"}>{rapture ? editedPlasmid.tagline.rapture : editedPlasmid.tagline.columbia}</p>
        {/* <p className="tagline">{rapture ? editedPlasmid.effect.rapture : editedPlasmid.effect.columbia}</p> */}
        
        </div>

    function handleTitleEdit(e){
        let {name, value} = e.target
        setEditedPlasmid(editedPlasmid =>
            ({...editedPlasmid, title: {...editedPlasmid.title, [name]:value}}))
    }
    function handleTaglineEdit(e){
        let {name, value} = e.target
        setEditedPlasmid(editedPLasmid =>
            ({...editedPlasmid, tagline: {...editedPlasmid.tagline, [name]:value}}))
    }
    function handleEffectEdit(e){
        let {name, value} = e.target
        setEditedPlasmid(editedPlasmid =>
            ({...editedPlasmid, effect: {...editedPlasmid.effect, [name]:value}}))
    }
    function handleImageEdit(e){
        let {name, value} = e.target
        setEditedPlasmid(editedPlasmid =>
            ({...editedPlasmid, image: {...editedPlasmid.image, [name]:value}}))
    }

    function handleEditClick(){
        fetch(baseURL+'/'+id, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(editedPlasmid)
        })
        setEditFormShow(!editFormShow)
    }

    return (
    <div>
        {editFormShow ? editForm : plasmidCard}
        <div  className="editDeleteButtonsDiv">
            <div
            className={rapture?"editDeleteButtonsRapture":"editDeleteButtonsColumbia"}
            onClick={handleEditClick}
            >{editFormShow?"Done":"Edit"}</div>
            <div
            className={rapture?"editDeleteButtonsRapture":"editDeleteButtonsColumbia"}
            onClick={()=>handleClick(id)}
            >Delete</div>
        </div>
    </div>
    )
}

export default CreatedPlasmids