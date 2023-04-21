import "./NewsArticle.css";

function NewsArticle({ title, url, points, author, time, comments, id }) {
  let shorturl;
  if (url == null || url === "null") shorturl = "404";
  else
    shorturl =
      url.match(/^https?:\/\/([^/?#]+)(?:[/?#]|$)/i)?.[1] ??
      url;
  return (
    <li className="article">
      <div>
        <a href={url} target="_blank">
          <h4>{title}</h4>
        </a>

        <a href={`https://news.ycombinator.com/from?site=${shorturl}`} target="_blank">
          <span>({shorturl})</span>
        </a>
      </div>
      <span>{points} points</span>

      <a href={`https://news.ycombinator.com/user?id=${author}`} target="_blank">
        <span>by {author}</span>
      </a>

      <a href={`https://news.ycombinator.com/item?id=${id}`} target="_blank">
        <span>{timeSince(time)}</span>
      </a>

      <a href={`https://news.ycombinator.com/item?id=${id}`} target="_blank">
        <span>{comments} comments</span>
      </a>
    </li>
  );
}

function timeSince(date) {
  var seconds = Math.floor((new Date() - new Date(date * 1000)) / 1000);

  var interval = seconds / 31536000;

  if (interval > 1) {
    return Math.floor(interval) + " years ago";
  }
  interval = seconds / 2592000;
  if (interval > 1) {
    return Math.floor(interval) + " months ago";
  }
  interval = seconds / 86400;
  if (interval > 1) {
    return Math.floor(interval) + " days ago";
  }
  interval = seconds / 3600;
  if (interval > 1) {
    return Math.floor(interval) + " hours ago";
  }
  interval = seconds / 60;
  if (interval > 1) {
    return Math.floor(interval) + " minutes ago";
  }
  return Math.floor(seconds) + " seconds ago";
}

export default NewsArticle;
