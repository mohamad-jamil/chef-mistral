import ReactMarkdown from "react-markdown";

interface Props {
  recipe: string;
}

export default function MistralRecipe({ recipe }: Props) {
  return (
    <section className="suggested-recipe-container">
      <ReactMarkdown>{recipe}</ReactMarkdown>
    </section>
  );
}
