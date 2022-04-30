import React from "react";

function useHooks(itemName, initialValue){
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);
    const [item, setItems] = React.useState(initialValue);  
    React.useEffect(()=>{
      setTimeout(()=>{
        try {
          const localStoragetareas = localStorage.getItem(itemName);
    
          let parsetareas;
          
          if(!localStoragetareas){
            localStorage.setItem(itemName, JSON.stringify(initialValue));
            parsetareas=initialValue;
          }else{
            parsetareas=JSON.parse(localStoragetareas);
          }
  
          setItems(parsetareas);
          setLoading(false);
        }catch(error){
          setError(error);
        }
      }, 2000);
    });
    
    
    const save = (newtareas)=>{
      try{
        const parsesTareas = JSON.stringify(newtareas);
        localStorage.setItem(itemName, parsesTareas);
        setItems(newtareas);
      }catch(error){
        setError(error);
      }
    }
    return {
      item,
      save,
      loading,
      error,
    }; 
  }

  export {useHooks};