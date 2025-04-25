import { useContext } from "react";
import { ArticleContext } from "../context/ArticleContext";

export default function Article() {
  const context = useContext(ArticleContext);

  if (!context) return null;

  const { content, setContent } = context;

  return (
    <main className="mb-4">
      <h2 className="text-xl font-semibold">{content}</h2>
      <textarea
        className="w-full p-2 border mt-2"
        value={content}
        rows={4}
        onChange={(e) => setContent(e.target.value)}
      ></textarea>
    </main>
  );
}
