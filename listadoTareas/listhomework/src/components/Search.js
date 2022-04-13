import React from "react";
import '.././styleds/search.css';
import searchIcon from '.././img/icons8_search_48px.png'

function Search(){
    const {stateSearch, setSearch} = React.useState("");
    const onSearch =(event)=>{
        console.log(event.target.value);
        setSearch(event.target.value);
    }
    return(
        <div id="groupSearch">
            <img src={searchIcon} width="true"></img>
            <input placeholder="Buscar Tarea" onChange={onSearch} value={stateSearch}/>
        </div>
    )
};

export default Search;