import "./Main.css";
import { useState } from "react";
import MistralRecipe from "../MistralRecipe/MistralRecipe";
import IngredientsList from "../IngredientsList/IngredientsList";
import { getRecipeFromMistral } from "../../ai";

export default function Main() {
  const [ingredients, setIngredients] = useState<string[]>([]);
  const [recipe, setRecipe] = useState<string>("");

  const addIngredient = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const newIngredient = formData.get("ingredient");
    if (typeof newIngredient === "string") {
      setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
    }

    event.currentTarget.reset();
  };

  const handleDeleteIngredient = (index: number) => {
    setIngredients((prevIngredients) => {
      return prevIngredients
        .slice(0, index)
        .concat(prevIngredients.slice(index + 1, prevIngredients.length));
    });
  };

  async function getRecipe() {
    const result = await getRecipeFromMistral(ingredients);
    if (result !== undefined) {
      setRecipe(result);
    } else {
      setRecipe("Recipe not found.");
    }
  }

  return (
    <main>
      <form onSubmit={addIngredient} className="add-ingredient-form">
        <input type="text" placeholder="e.g. oregano" name="ingredient" />
        <button>Add ingredient</button>
      </form>

      <IngredientsList
        getRecipe={getRecipe}
        ingredients={ingredients}
        handleDeleteIngredient={handleDeleteIngredient}
      />

      {recipe && <MistralRecipe recipe={recipe} />}
    </main>
  );
}
