import React from "react";
import "./Card1.css";
// import Elon from "./img/elon.jpg";
import Calender from "./img/ico-calendar.png";

function Card1(props){
    return(
        <div className="card1">

            <div className="thumb-1">
            <iframe id="myFrame" src={`https://www.youtube.com/embed/${props.link}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>

            <div>
                <p className="hustle-text-block">{props.title}</p>
                <div className="hustle-text-block-main">
                    
                    <p className="hustle-speaker">Presented By: {props.speakers}</p>
                    <div className="d-flex date-section">
                        <div>
                            <img src={Calender} className="calendar-ico col-6"/>
                        </div>
                        
                        <p className="hustle-date">{props.year}</p>
                    </div>
                    
                </div>
                
            </div>

            

        </div>
    )
}

export default Card1;