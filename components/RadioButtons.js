import React from 'react';

const RadioButtons = ({currentOption}) => {
  return(
     <div className="radio">
     		<input type="radio" name="option" value="Running" onChange={this.handleOptionChange} />Running<br />
		    <input type="radio" name="option" value="Endad"  onChange={this.handleOptionChange}/>Endad<br />	
	  	  <input type="radio" name="option" value="All" onChange={this.handleOptionChange}/>All<br />
     </div>
  )

}

export default RadioButtons;