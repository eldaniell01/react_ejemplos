import React from "react";
import '.././styleds/search.css';
import searchIcon from '.././img/icons8_search_48px.png'

function Search(){
    return(
        <div id="groupSearch">
            <img src={searchIcon} width="true"></img>
            <input placeholder="Buscar Tarea"/>
        </div>
    )
};

export default Search;