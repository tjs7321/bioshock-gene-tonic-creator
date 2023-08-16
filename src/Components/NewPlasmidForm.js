import React, {useState} from "react";



function NewPlasmidForm(){
    return (
        <div className="ui segment">
            <form onSubmit={(e) => handleFormSubmit(e)} className="ui form">
            <div className="inline fields">
            <input
            onChange={(e) => handleFormEdit(e)}
            type="date"
            name="date"
            value={newTransaction.date}
            />
            <input
            onChange={(e) => handleFormEdit(e)}
            type="text"
            name="description"
            placeholder="Description"
            value={newTransaction.description}
            />
            <input
            onChange={(e) => handleFormEdit(e)}
            type="text"
            name="category"
            placeholder="Category"
            value={newTransaction.category}/>
            <input
            onChange={(e) => handleFormEdit(e)}
            type="number"
            name="amount"
            placeholder="Amount"
            step="0.01"
            value={newTransaction.amount}/>
            </div>
            <button className="ui button" type="submit">
            Add Transaction
            </button>
            </form>
        </div>
    )
}

export default NewPlasmidForm