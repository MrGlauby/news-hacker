import { useEffect, useState } from "react";
import "./App.css";
import NewsArticle from "./components/NewsArticle.js";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function App() {
  const [articles, setArticles] = useState(null);

  //TODO: Userinput richtig handlen, tags= story, comment, poll
  const userInputElement = document.getElementById("userInput");


  function handleSearch(){
    let userInput = userInputElement.value;
    let url = "http://hn.algolia.com/api/v1/search?query=";
    url += userInput;

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
  }

  return (
    <div className="App">
      <header className="App-header">
        <input id="userInput" />
        <DropdownButton className="fa fa-search" id="dropdown-basic-button" title="Search for...">
          <Dropdown.Item href="#/action-1">Stories</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Comments</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Polls</Dropdown.Item>
        </DropdownButton>
      </header>
      <main>
        {articles.length &&
          articles.map((article) => {
            <NewsArticle
              title={article.story_title}
              url={article.story_url}
              points={article.points}
              author={article.author}
              time={article.created_at_i}
              comments={article.num_comments}
            />;
          })}
      </main>
    </div>
  );
}

export default App;
