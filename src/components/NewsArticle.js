import "./NewsArticle.css";

function NewsArticle({title, url, points, author, time, comments}) {
  let shorturl
  return ( 
    <li className="article">
        
      <a href={url}>
        <h5>{title}</h5>
      </a>

      <a href={url}>
        <span>{shorturl}</span>
      </a>

      <span>{points}</span>

      <a href={url}>
        <span>{author}</span>
      </a>

      <a href={url}>
        <span>{time}</span>
      </a>

      <a href={url}>
        <span>{comments}</span>
      </a>

    </li>
  );
}

export default NewsArticle;
