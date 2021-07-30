import React from "react"
//destructuring the props
const Card = ({ name, email, id }) => {
    return (
        <div className=" tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
            <img alt="robots" src={`https://robohash.org/${id}?size=200x200`} />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;


//hi this rohan and this is where i have learned to use git properly