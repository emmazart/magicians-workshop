import React from "react";

function Card(props) {
    const service = props.services;

    return(
        <div>
        
        {/* if the "services" prop is set to true (ie. it is a services card), render the first option */}
        { service ? (
                <div>
                    <h3>{props.title}</h3>
                    <p>This is Services Card: {props.description}</p>
                    <p>{props.price}</p>
                </div>
            
            // otherwise render the gallery type card
            ) : (
                <div>
                    <h3>{props.title}</h3>
                    <p>This is Gallery Card: {props.description}</p>
                    <p>{props.image} / {props.link}</p>
                </div>
            )
        }
        </div>
    )
}

export default Card;