import "./IngredientsList.css";

interface Props {
  getRecipe: () => void;
  ingredients: string[];
  handleDeleteIngredient: (index: number) => void;
}

export default function IngredientsList({
  getRecipe,
  ingredients,
  handleDeleteIngredient,
}: Props) {
  return (
    <section>
      <h2>Ingredients on hand:</h2>
      <ul className="ingredients-list">
        {ingredients.map((ingredient, index) => {
          return (
            <li key={index} className="ingredient">
              {ingredient}
              <div
                className="delete-button"
                onClick={() => handleDeleteIngredient(index)}
              >
                Delete
                {/* <img src="delete-icon.png" alt="delete icon" width="20px" /> */}
              </div>
            </li>
          );
        })}
      </ul>
      {ingredients.length > 3 && (
        <div className="get-recipe-container">
          <div>
            <h3>Ready for a recipe?</h3>
            <p>Generate a recipe from your list of ingredients.</p>
          </div>
          <button onClick={getRecipe}>Get a recipe</button>
        </div>
      )}
    </section>
  );
}
