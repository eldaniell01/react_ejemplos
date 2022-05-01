import React, {useState, useContext} from 'react'
import { Themcontext } from '../context/Themcontext';

export const Header = () => {
    const [darkMode, setDarkMode] = useState(false);
    const color = useContext(Themcontext);
    const handleClick = ()=>{
        setDarkMode(!darkMode);
    }
    return (
        <div className={darkMode ? 'dark': 'light'}>
            <h1 style={{color}}>ReactHooks</h1>
            <button type='button' onClick={handleClick}>
                {darkMode ? 'Dark Mode' : 'Light Mode'}
            </button>
        </div>
    )
}
