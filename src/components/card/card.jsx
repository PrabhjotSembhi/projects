import { Component } from "react";
import './card.css'

const Card = ({name, email, id}) => {

    return(
        <div className="card-container" >
        <img src={`https://robohash.org/${id}?set=set2&size=180x180`} alt="" />
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    )
}

/*

class Card extends Component{
    render() {
        const {name, email, id} = this.props

        return(
            <div className="card-container" >
            <img src={`https://robohash.org/${id}?set=set2&size=180x180`} alt="" />
            <h2>{name}</h2>
            <p>{email}</p>
          </div>
        )
    }
}*/

export default Card;