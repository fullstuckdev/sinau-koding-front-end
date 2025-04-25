import { useContext } from "react";
import { ArticleContext } from "../context/ArticleContext";

export default function Footer() {
  const context = useContext(ArticleContext);
  if (!context) return null;

  const { content } = context;

  return (
    <footer className="border-t pt-4 mt-4">
      <h3 className="text-md font-medium">Preview Artikel:</h3>
      <p className="text-gray-700">{content}</p>
    </footer>
  );
}
