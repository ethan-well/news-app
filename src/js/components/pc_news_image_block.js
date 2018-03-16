import React from 'react';
import { Card } from 'antd';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class PcNewsImageBlock extends React.Component {
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
    const newList = news.length > 1
    ? news.map((newsItem, index) => (
        <section key={`news_image_${index}`} className='news-images-block'>
          <Router>
            <Link to='/'>
              <div className='news-item-image'>
                <img src={newsItem.thumbnail_pic_s} alt={newsItem.title} />
              </div>
              <div>
                <div>
                  <span className='title-style'>{newsItem.title}</span>
                </div>
                <div>
                  <span className='realtype-style'>{newsItem.realtype}</span>
                  <span className='date-style'>{newsItem.date}</span>
                </div>
              </div>
            </Link>
          </Router>
        </section>
      ))
    : '暂时没有新闻'

    return(
      <div className='news-images-list'>
        <Card bodyStyle={{ paddingTop: 10, paddingLeft: 0, paddingRight: 0, paddingBottom: 0 }} title="头条" className=''>
          <div className='new-list-card'>
            {newList}
          </div>
        </Card>
      </div>
    )
  }
}
