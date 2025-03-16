import "./IngredientsList.css";
import GetRecipeContainer from "../GetRecipeContainer/GetRecipeContainer";

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
      {ingredients.length > 0 && (
        <>
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
        </>
      )}
      <GetRecipeContainer getRecipe={getRecipe} ingredients={ingredients} />
    </section>
  );
}
