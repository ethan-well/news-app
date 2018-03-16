import React from 'react';
import MobileHeader from './mobile_header';
import MobileFooter from './mobile_footer';
import { BrowserRouter as Router, Route, Link, hashHistory } from 'react-router-dom';

export default class MobileNewsDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newsItem: ''
    }
  }

  componentWillMount(){
    var myFetchOptions = {
      method: 'GET'
    }
    fetch(`http://newsapi.gugujiankong.com/Handler.ashx?action=getnewsitem&uniquekey=${this.props.match.params.uniquekey}`, myFetchOptions)
    .then(response => response.json())
    .then(json => this.setState({newsItem: json}))
  }

  render(){
    return(
      <div id='mobile'>
        <MobileHeader />
        <div id='mobile-news-details'>
          <section>
            <div className='mobile-news-details-content' dangerouslySetInnerHTML={{__html: this.state.newsItem.pagecontent}}>
            </div>
          </section>
        </div>
        <MobileFooter />
      </div>
    )
  }
}
