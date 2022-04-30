import React from "react";
import Counter from "./Counter.js";
import Search from "./Search.js";
import { List } from "./List.js";
import { Item } from "./Item.js";
import { CreateHomeWork } from "./CreateHomeWork.js";
import {TareaContext} from "./Context.js";
import {Modal} from "./Modal.js";
import {Formtarea} from "./Formtarea.js";

function AppUI (){
    const {error, loading, complet, deleteh, searchHomework, openModal, setOpenModal} = React.useContext(TareaContext);
    return(

        <React.Fragment>
            <Counter/>
            <Search/>
            
                <List>
                    {error&&<p>hubo un error...</p>}
                    {loading&&<p>se esta cargando</p>}
                    {(!loading&&!searchHomework.length)&&<p>crea la primer tarea</p>}
                    {searchHomework.map(homeWorkss=>(
                        <Item 
                            key={homeWorkss.text} 
                            text={homeWorkss.text} 
                            completed={homeWorkss.completed} 
                            onCompleted={()=>complet(homeWorkss.text)} 
                            onDelete={()=>deleteh(homeWorkss.text)}
                        />
                    ))}
                </List>
            {openModal &&(
                <Modal>
                    <Formtarea></Formtarea>
                </Modal>
            )}  
            <CreateHomeWork
                setOpenModal ={setOpenModal}
            />
        </React.Fragment>
    )
}

export {AppUI}