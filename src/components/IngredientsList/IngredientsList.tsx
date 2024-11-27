interface Props {
  getRecipe: () => void;
  ingredients: string[];
}

export default function IngredientsList({ getRecipe, ingredients }: Props) {
  return (
    <section>
      <h2>Ingredients on hand:</h2>
      <ul>
        {ingredients.map((ingredient) => {
          return <li key={ingredient}>{ingredient}</li>;
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
