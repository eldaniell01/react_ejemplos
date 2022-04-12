import React from "react";
import Counter from "./components/Counter.js";
import Search from "./components/Search.js";
import { List } from "./components/List.js";
import { Item } from "./components/Item.js";
import { CreateHomeWork } from "./components/CreateHomeWork.js";

const homeWorks = [
  {text: 'barrer', completed: true},
  {text: 'dormir', completed: false},
  {text: 'comer', completed: false}
];

function App() {
  return (
    <React.Fragment>
      <Counter/>
      <Search/>
      <List>
        {homeWorks.map(homeWorks=>(
          <Item key={homeWorks.text} text={homeWorks.text} completed={homeWorks.completed}/>
        ))}
      </List>
      <CreateHomeWork/>
    </React.Fragment>
  )
};

export default App;
