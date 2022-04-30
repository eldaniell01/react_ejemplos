import React from "react";
import { useHooks } from "./useHooks";

const TareaContext = React.createContext();

function TareaProvider(props){
    const {
        item: homeWorks2, 
        save: saveHomeworks,
        loading,
        error
      } = useHooks('tarea1', []);
      const [stateSearch, setSearch] = React.useState('');
      const [openModal, setOpenModal] = React.useState(false);
      const completedHomework = homeWorks2.filter(homeWorks1 => !!homeWorks1.completed).length;
      const total = homeWorks2.length;
      
      var searchHomework =[];
    
    
      if(!stateSearch.length>0){
        searchHomework = homeWorks2; 
      }else{
        searchHomework = homeWorks2.filter(homeWorks1=> {
          const text= homeWorks1.text.toLowerCase();
          const searchText =stateSearch.toLowerCase();
          return text.includes(searchText);
        });
        
      }
      
      const complet=(text)=>{
        const homeworkIndex = homeWorks2.findIndex(homeWorks1=>homeWorks1.text===text);
        const newHomework = [...homeWorks2];
        newHomework[homeworkIndex].completed=true;
        saveHomeworks(newHomework);
      };

      const addTarea=(text)=>{
        
        const newHomework = [...homeWorks2];
        newHomework.push({
          complet: false,
          text,
        })
        saveHomeworks(newHomework);
      };
    
      const deleteh=(text)=>{
        const homeworkIndex = homeWorks2.findIndex(homeWorks1=>homeWorks1.text===text);
        const newHomework = [...homeWorks2];
        newHomework.splice(homeworkIndex, 1);
        saveHomeworks(newHomework);
      };
    return(
        <TareaContext.Provider value={{
            loading,
            error,
            deleteh,
            complet,
            addTarea,
            total, 
            searchHomework,
            completedHomework,
            setSearch,
            stateSearch,
            openModal,
            setOpenModal
        }}>
            {props.children}
        </TareaContext.Provider>
    )
}

export {TareaContext, TareaProvider}