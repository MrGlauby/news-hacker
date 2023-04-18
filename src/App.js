import { useEffect, useState } from "react";
import "./App.css";
import NewsArticle from "./components/NewsArticle.js";

function App() {
  const [articles, setArticles] = useState(null);

  //TODO: Userinput richtig handlen, tags= story, comment, poll
  let userInputElement = document.getElementById("userInput");
  let userInput = userInputElement.value;
  let url = "http://hn.algolia.com/api/v1/search?query=";
  url += userInput.value;
  //END TODO

  useEffect(() => {
    fetch(url)
      .then((response) => {
        if (!response.ok)
          throw new Error(`So, this happened: ${response.status}`);
        return response.json();
      })
      .then((data) => {
        setArticles(data.hits);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [userInput]);

  return (
    <div className="App">
      <header className="App-header"></header>
      <main>
        {articles.length &&
          articles.map((article) => {
            <NewsArticle
              title={article.story_title}
              url={article.story_url}
              points={article.points}
              author={article.author}
              comments={article.num_comments}
            />;
          })}
      </main>
    </div>
  );
}

export default App;
