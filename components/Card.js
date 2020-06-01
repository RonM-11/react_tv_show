import React from 'react';
import './card.css';




const Card = ({name, status, summary, premiered, url, image}) =>{
	return (
		<div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
			<a className= 'link' href={url} >
			<div>
      {image}
        <img src={"http://static.tvmaze.com/uploads/images/medium_portrait/69/174906.jpg"} alt="pic" />
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