import {useState } from "react";
import "./App.css";
import NewsArticle from "./components/NewsArticle.js";

function App() {
  const [articles, setArticles] = useState([]);

  const userInputElement = document.getElementById("userInput");
  const userTagElement = document.getElementById("tagSelector");

  function handleSearch(){
    console.log(userInputElement);
    let userInput = userInputElement.value;
    let userTag = userTagElement.options[userTagElement.selectedIndex].value;
    let targeturl = "http://hn.algolia.com/api/v1/search?query=";
    targeturl += userInput;
    if(userTag) targeturl += `&tags=${userTag}`;

    fetch(targeturl)
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
  }

  return (
    <div className="App">
      <header className="App-header">
        <input type="text" id="userInput"/>
        <select id="tagSelector">
          <option value="">All</option>
          <option value="story">Stories</option>
          <option value="comment">Comments</option>
          <option value="poll">Polls</option>
        </select>
        <button onClick={handleSearch}>Search</button>
      </header>
      <main>
        <ol>
        {articles.length ?
          articles.map((article) => 
            <NewsArticle
              title={article.story_title}
              url={article.story_url}
              points={article.points}
              author={article.author}
              time={article.created_at_i}
              comments={article.num_comments}
            />
          ) : <li>Bitte Suche starten</li>}
          </ol>
      </main>
    </div>
  );
}

export default App;
