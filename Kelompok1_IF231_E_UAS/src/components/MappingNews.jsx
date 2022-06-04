import React from "react";

const News = ({ news }) => {
  return (
    <div className="content-news">
      <h5 className="news-title">{news.title}</h5>
      <p className="news-author">by: {news.author}</p>
      <img src={news.urlToImage} className="news-image mb-2" alt=" "></img>
      <p className="news-description">{news.description}</p>
    </div>
  );
};

export default News;
