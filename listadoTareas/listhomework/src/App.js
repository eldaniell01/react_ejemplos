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

function App() {
  const [stateSearch, setSearch] = React.useState('');
  const [homeWorks2, setHomeworks] = React.useState(homeWorks);
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
    setHomeworks(newHomework);
  };

  const deleteh=(text)=>{
    const homeworkIndex = homeWorks2.findIndex(homeWorks1=>homeWorks1.text===text);
    const newHomework = [...homeWorks2];
    newHomework.splice(homeworkIndex, 1);
    setHomeworks(newHomework);
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
        {searchHomework.map(homeWorkss=>(
          <Item key={homeWorkss.text} text={homeWorkss.text} completed={homeWorkss.completed} onCompleted={()=>complet(homeWorkss.text)} onDelete={()=>deleteh(homeWorkss.text)}/>
        ))}
      </List>
      <CreateHomeWork/>
    </React.Fragment>
  )
};

export default App;
