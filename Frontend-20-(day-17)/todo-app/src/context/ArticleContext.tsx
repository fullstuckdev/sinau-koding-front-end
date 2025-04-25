import React, { createContext, useState } from "react";

type ArticleContextType = {
  title: string;
  setTitle: (title: string) => void;
  content: string;
  setContent: (content: string) => void;
};

export const ArticleContext = createContext<ArticleContextType | undefined>(
  undefined
);

export const ArticleProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [title, setTitle] = useState("Judul Awal Artikel");
  const [content, setContent] = useState("Ini adalah isi awal artikel.");

  return (
    // value children ada disini
    <ArticleContext.Provider value={{ title, setTitle, content, setContent }}>
      {/* // ini buat return childrennya */}
      {children}
    </ArticleContext.Provider>
  );
};
