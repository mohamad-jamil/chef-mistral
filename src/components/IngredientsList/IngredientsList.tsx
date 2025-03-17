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
          <h2 className="text-xl text-center font-semibold pt-[20px] pb-[10px]">
            Ingredients
          </h2>
          <ul className="ingredients-list flex flex-col gap-[10px] items-center">
            {ingredients.map((ingredient, index) => {
              return (
                <li
                  key={index}
                  className="ingredient bg-[#d3d3d3] w-full list-none py-[10px] pl-[15px] rounded-lg flex justify-between items-center"
                >
                  {ingredient}
                  <div
                    className="delete-button h-[30px] flex items-center justify-center rounded-md mr-[10px] font-sans bg-[#ff6a74] text-[#fafaf8] text-sm font-medium px-[5px] hover:cursor-pointer"
                    onClick={() => handleDeleteIngredient(index)}
                  >
                    <img src="delete-icon.png" alt="delete icon" width="20px" />
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
