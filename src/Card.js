import React from 'react';
import "./index.css";
function Card(prop){
    return(
        <> 
       
           <div className='cards'>
               <div className='card'>
                   <img src={prop.imgsrc} alt='' className='card__img'/>
               
               <div className='card__info'>
                   <span className='card__category'>{prop.title}</span>
                   <h3 className='card__title'>{prop.name}</h3>
                   <a href={prop.link} target="__blank">
                       <button>Watch Now</button>
                   </a>
               </div>
           </div>
           </div>
        </>
    )
}
export default Card;