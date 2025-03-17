interface Props {
  getRecipe: () => void;
  ingredients: string[];
}

export default function GetRecipeContainer({ getRecipe, ingredients }: Props) {
  return (
    <div className="get-recipe-container flex justify-between items-center rounded-lg bg-[#f0efeb] px-[28px] py-[10px]">
      {ingredients && ingredients.length >= 3 ? (
        <>
          <div>
            <h3 className="text-[1.125rem] font-medium leading-6">
              Ready for a recipe?
            </h3>
            <p className="text-[#6b7280] text-sm leading-5">
              Click the button to generate a recipe from your list of
              ingredients.
            </p>
          </div>

          <button
            className="border-none rounded-md bg-[#d17557] shadow-sm text-[#fafaf8] px-[17px] py-[9px] font-sans text-sm cursor-pointer"
            onClick={getRecipe}
          >
            Get a recipe
          </button>
        </>
      ) : (
        <div>
          <h3 className="text-[1.125rem] font-medium leading-6">
            Add some more ingredients to start cooking!
          </h3>
          <p className="text-[#6b7280] text-sm leading-5">
            You need {3 - ingredients.length} more ingredient
            {ingredients.length !== 2 && "s"} to generate a recipe.
          </p>
        </div>
      )}
    </div>
  );
}
