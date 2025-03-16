interface Props {
  getRecipe: () => void;
  ingredients: string[];
}

export default function GetRecipeContainer({ getRecipe, ingredients }: Props) {
  console.log(`Ingredients: ${ingredients}, length: ${ingredients.length}`);

  return (
    <div className="get-recipe-container">
      {ingredients && ingredients.length >= 3 ? (
        <>
          <div>
            <h3>Ready for a recipe?</h3>
            <p>
              Click the button to generate a recipe from your list of
              ingredients.
            </p>
          </div>

          <button onClick={getRecipe}>Get a recipe</button>
        </>
      ) : (
        <div>
          <h3>Add some more ingredients to start cooking!</h3>
          <p>
            You need {3 - ingredients.length} more ingredient
            {ingredients.length !== 2 && "s"} to generate a recipe.
          </p>
        </div>
      )}
    </div>
  );
}
