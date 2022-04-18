import React  from "react";
import ReactDOM  from "react-dom";
import './card.css';
function Card(propsCard){

    return (
        <div className="cards">
            <div className="card">
                <img src={propsCard.imgscr} alt="" className="card__img" />
                <div className="card__info">
                    <span className="card-Catefory">{propsCard.title}</span>
                    <h3 className="card__title">{propsCard.sname}</h3>
                    <a href={propsCard.link} className="card__button" target="_blank">Watch Now</a>
                    
                </div>
            </div>
        </div>
    );
}

export default Card;