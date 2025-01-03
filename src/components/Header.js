import React from "react";
import '../App.css';

const Header = props => {
	const {search, onInputChange, getRecipes} = props;
	return (
		<div className="jumbotron">
		<h1 className="display-1">
		<i className="material-icons brand-icon">fastfood</i>Food Recipe</h1>

		<div className="input-group w-50 mx-auto">
        <input
         type="text" 
         className="form-control" 
         placeholder="Search Your Recipe..."
         value={search} 
         onChange={onInputChange}
         />
         <div className="input-group-append">
         <button onClick={getRecipes} className="btn btn-dark">Search Recipe</button>
        </div>
     </div>
		</div>

		 ); 
};

export default Header;