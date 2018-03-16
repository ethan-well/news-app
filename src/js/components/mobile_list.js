import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

export default class MobileList extends React.Component {
  constructor() {
    super();
    this.state = {
      news: ''
    }
  }

  componentWillMount(){
    var myFetchOptions = {
      method: 'GET'
    };
    fetch(`http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type=${this.props.type}&count=${this.props.count}`, myFetchOptions)
    .then(response => response.json())
    .then(json => this.setState({news: json}))
  }

  render(){
    const {news} = this.state;
    const newsList = news.length > 1
    ? news.map((newsItem, index) => (
        <Link key={`news_image_${index}`} to={`/details/${newsItem.uniquekey}`} target="_blank">
          <section className='m-news-image-block'>
            <div className='m-news-images'>
              <img src={newsItem.thumbnail_pic_s} alt={newsItem.title} />
            </div>
            <div className='m-news-info'>
              <span className='m-news-title'> {newsItem.title}</span>
              <span className='m-news-realtype'>{newsItem.realtype}</span>
              <span className='n-news-date'>{newsItem.date}</span>
            </div>
          </section>
        </Link>
    ))
    : '暂时没有新闻'

    return(
      <div>
        {newsList}
      </div>
    )
  }
}
