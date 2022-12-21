import { Component } from "react";
import Card from "../card/card";
import './cardlist.css'

const Cardlist = ({monsters}) => {

   console.log("From cardlist ")
  // const { monsters } = this.props;

   return (
     <div className="card-list">
       {monsters.map((monster) => {
         const {name, id, email} = monster
         return (
           <Card key={id} id={id} name={name} email={email}/>

       
         );
       })}
     </div>
   );
 
}

export default Cardlist;
