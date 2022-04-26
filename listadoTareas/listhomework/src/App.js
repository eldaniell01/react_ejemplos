import React from "react";
import Counter from "./components/Counter.js";
import Search from "./components/Search.js";
import { List } from "./components/List.js";
import { Item } from "./components/Item.js";
import { CreateHomeWork } from "./components/CreateHomeWork.js";

const homeWorks = [
  {text: 'barrer', completed: false},
  {text: 'dormir', completed: false},
  {text: 'comer', completed: false}
];

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


function App() {
  
  const {
    item: homeWorks2, 
    save: saveHomeworks,
    loading,
    error
  } = useHooks('tarea1', []);
  const [stateSearch, setSearch] = React.useState('');
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

  const deleteh=(text)=>{
    const homeworkIndex = homeWorks2.findIndex(homeWorks1=>homeWorks1.text===text);
    const newHomework = [...homeWorks2];
    newHomework.splice(homeworkIndex, 1);
    saveHomeworks(newHomework);
  };
  
  return (
    <React.Fragment>
      <Counter
        total={total}
        completed={completedHomework}
      />
      <Search
        stateSearch={stateSearch}
        setSearch={setSearch}
      />
      <List>
        {error&&<p>hubo un error...</p>}
        {loading&&<p>se esta cargando</p>}
        {(!loading&&!searchHomework.length)&&<p>crea la primer tarea</p>}
        {searchHomework.map(homeWorkss=>(
          <Item key={homeWorkss.text} text={homeWorkss.text} completed={homeWorkss.completed} onCompleted={()=>complet(homeWorkss.text)} onDelete={()=>deleteh(homeWorkss.text)}/>
        ))}
      </List>
      <CreateHomeWork/>
    </React.Fragment>
  )
};

export default App;
