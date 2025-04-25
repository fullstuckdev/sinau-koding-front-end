import { useContext } from "react";
import { ArticleContext } from "../context/ArticleContext";

export default function Header() {
  const context = useContext(ArticleContext);

  if (!context) return null;

  // ini sebagai children di dalam ArticleContext
  const { title, setTitle } = context;

  return (
    <header className="mb-4">
      <h1 className="text-2x1 font-bold">Header</h1>
      <p>Judul Saat Ini: {title}</p>
      <input
        type="text"
        className="border p-2 mt-2 w-full"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
    </header>
  );
}
