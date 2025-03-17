import ReactMarkdown from "react-markdown";

interface Props {
  recipe: string;
}

export default function MistralRecipe({ recipe }: Props) {
  return (
    <section className="suggested-recipe-container text-[#475467] leading-[28px] text-[1.125rem] font-normal">
      <ReactMarkdown>{recipe}</ReactMarkdown>
    </section>
  );
}
