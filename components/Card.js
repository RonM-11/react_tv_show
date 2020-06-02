import React from 'react';
import './card.css';

const Card = ({name, status, summary, premiered, url, image}) =>{
	return (
		<div className='tc dib br3 pa3 ma2 grow bw2 shadow-5 card b--solid fl w-100'>
			<a className= 'link' href={url} >
			<div>
      {image}
        <img src={""} alt="pic" />
        
				<h2>{name}</h2>
				<p>{status}</p>
       {summary}
        <p>premiered: {premiered}</p>
			</div>
      </a>
		</div>
	);
}

export default Card;