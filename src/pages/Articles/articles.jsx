import "./article.css";

import { useGetArticles } from "../../hooks/getarticle";
import TempComp from "../../components/TempComp";

export function Articles() {
  const { articles } = useGetArticles();
  return (
    <>
      <div className="parent-article ">
        <div className="left-article">
          {articles.map((article) => (
            <div className="article-box">
              <h3>{article.title}</h3>
              <p>{article.intro}</p>
              <button>Continue Reading</button>
            </div>
          ))}
        </div>
        <div className="right-article">
          <h3>Wanna Collaborate ?</h3>
          <p className="paragraph">Write us mail at ....</p>
          <p className="paragraph-2">GeekGrid@gmail.com</p>
        </div>
      </div>
    </>
  );
}
