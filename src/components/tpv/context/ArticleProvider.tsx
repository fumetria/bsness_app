import { useEffect, useState } from "react";
import { ArticleContext } from "./ArticleContext";
import type { Article } from "../../types/definitions";
import { articles } from "../../utils/data.js";

const ARTICLES = articles;
export function ArticleProvider({ children }: { children: React.ReactNode }) {
  const [articles, setArticles] = useState<Article[]>([]);
  const [articlesList, setArticlesList] = useState<Article[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>(
    articles[0].category
  );
  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
  };

  useEffect(() => {
    setArticles(ARTICLES);
  }, [ARTICLES]);
  return (
    <ArticleContext.Provider
      value={{
        articlesList,
        setArticlesList,
        selectedCategory,
        setSelectedCategory,
        handleCategorySelect,
      }}
    >
      {children}
    </ArticleContext.Provider>
  );
}
