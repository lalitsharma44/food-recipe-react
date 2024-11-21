import React from "react";
import '../App.css';

const Recipes = props => {
	const { recipes } = props;

	return (
		<div class="row">
			{recipes.map((recipe, index) => (
				<div className="col" key={index}>
					<div className="card py-2">
						<img src={recipe.recipe.image} className="card-img" alt={recipe.recipe.label} />
						<div className="card-body">
							<h5>{recipe.recipe.label}</h5>
						</div>
					</div>
				</div>
			))}
		</div>

	);
};

export default Recipes;