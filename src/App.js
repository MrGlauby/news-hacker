import "./App.css";
import NewsArticle from "./components/NewsArticle";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="ueber1">Hacker News</h1>
        <h5>NewsArticle</h5>

        {/* title, url, points, author, time, comments */}

        <NewsArticle //sinds property oder propbs
        
          title="willx" url="2443" points="google" author="willy" time="24234" comments="deine mudda"

        />
      </header>



    </div>
  );
}

export default App;
