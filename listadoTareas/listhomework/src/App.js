import React from "react";

import { TareaProvider } from "./components/Context.js";
import { AppUI } from "./components/AppUI.js";
const homeWorks = [
  {text: 'barrer', completed: false},
  {text: 'dormir', completed: false},
  {text: 'comer', completed: false}
];

function App() {
  
  
  
  return (
    <TareaProvider>
      <AppUI/>
    </TareaProvider>
  )
};

export default App;
