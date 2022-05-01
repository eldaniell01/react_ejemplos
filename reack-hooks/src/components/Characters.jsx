import React, {useState,  useReducer, useMemo, useRef, useCallback} from 'react'
import { Search } from './Search';
import { useCharacter } from '../hooks/useCharacter';

const initialState ={
    favorites: []
}

const API = 'https://rickandmortyapi.com/api/character/';

const favorite =(state, action) =>{
    switch(action.type){
        case 'ADD_TO_FAVORITE':
            return {
                ...state,
                favorites:[...state.favorites, action.payload]
            }
        default:
           return state; 
    }
}
export const Characters = () => {
    
    const [favorites, dispatch] = useReducer(favorite, initialState);
    const [search, setSearch] = useState('');
    const searchInput = useRef(null);

    const characters = useCharacter(API)

    const handleClick = favorite=>{
        dispatch({type: 'ADD_TO_FAVORITE', payload: favorite})
    }

    /*const filteredUsers = characters.filter((user) =>{
        return user.name.toLowerCase().includes(search.toLowerCase())
    })*/

    // const handleSearch =(event)=>{
    //     setSearch(searchInput.current.value);
    // }

    const handleSearch = useCallback(()=>{
        setSearch(searchInput.current.value);
    }, [])
    const filteredUsers = useMemo(()=>
        characters.filter((user) =>{
            return user.name.toLowerCase().includes(search.toLowerCase())
        }),
        [characters, search]
    )
    return (
        <div className="characters">
            {favorites.favorites.map(favorits=>(
                <li ley={favorits.id}>
                    {favorits.name}
                </li>
            ))}

            <Search search={search} searchInput={searchInput} handleSearch={handleSearch} />
            {filteredUsers.map(character =>(
                <div className="item" key={character.id}>
                    <h2>{character.name}</h2>
                    <button type="button" onClick={() => handleClick(character)}>agregar</button>
                </div>
                
            ))}
            
        </div>
    )
}
