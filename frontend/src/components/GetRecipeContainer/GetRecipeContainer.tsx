interface Props {
  getRecipe: () => void;
  ingredients: string[];
}

export default function GetRecipeContainer({ getRecipe, ingredients }: Props) {
  return (
    <div className="get-recipe-container rounded-lg bg-[#f0efeb] px-[28px] py-[28px] mt-[30px]">
      {ingredients && ingredients.length >= 3 ? (
        <div className="flex flex-col items-center">
          <h3 className="text-[1.125rem] font-medium leading-6">
            Ready for a recipe?
          </h3>
          <p className="text-[#6b7280] text-sm leading-5 text-center">
            Click the button to generate a recipe from your list of ingredients.
          </p>

          <button
            className="border-none rounded-md bg-[#d17557] shadow-sm text-[#fafaf8] px-[17px] py-[9px] mt-[10px] font-sans text-sm cursor-pointer"
            onClick={getRecipe}
          >
            Get a recipe
          </button>
        </div>
      ) : (
        <div>
          <h3 className="text-[1.125rem] font-medium leading-6 text-center">
            Add some more ingredients to start cooking!
          </h3>
          <p className="text-[#6b7280] text-sm leading-5 text-center">
            You need {3 - ingredients.length} more ingredient
            {ingredients.length !== 2 && "s"} to generate a recipe.
          </p>
        </div>
      )}
    </div>
  );
}
