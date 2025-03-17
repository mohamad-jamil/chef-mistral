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
    <main className="p-[30px] pt-[30px] pb-[10px]">
      <form
        onSubmit={addIngredient}
        className="add-ingredient-form flex justify-center gap-4 h-[38px]"
      >
        <input
          className="flex-grow min-w-[150px] max-w-[400px] rounded-md border border-gray-300 p-[9px] px-[13px] shadow-sm"
          type="text"
          placeholder="e.g. oregano"
          name="ingredient"
        />
        <button className="font-sans rounded-md border-none bg-[#141413] text-[#fafaf8] w-[150px] text-sm font-medium px-4 py-2 flex items-center justify-center hover:cursor-pointer">
          Add ingredient
        </button>
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
