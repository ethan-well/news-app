import React from 'react';
import { Card } from 'antd';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

export default class PcNewsBlock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { news: {}};
  }

  componentWillMount(){
    var myFetchOptions = {
      method: 'GET'
    };

    fetch(`http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type=${this.props.type}&count=${this.props.count}`, myFetchOptions)
    .then(response => response.json())
    .then(json => this.setState({news: json}))
  };

  render(){
    const {news} = this.state;
    const newList = news.length > 1
    ? news.map((newItem, index) => (
        <li key={index}>
          <div>
            <Link to={`/details/${newItem.uniquekey}`} target="_blank">
              <span> {newItem.title} </span>
            </Link>
          </div>
        </li>
      ))
    :  '暂时没有新闻'
    return(
      <div className='newslist'>
        <Card>
          <ul>
            { newList }
          </ul>
        </Card>
      </div>
    )
  }
}
