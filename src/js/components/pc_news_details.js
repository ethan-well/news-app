import React from 'react';
import { Row, Col } from 'antd';
import PcHeader from './pc_header';
import PcFooter from './pc_footer';

class PcNewsDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newsItem: ''
    }
    this.creatMarkUp = this.creatMarkUp.bind(this);
  }

  componentWillMount(){
    var myFetchOptions = {
      method: 'GET'
    };

    fetch(`http://newsapi.gugujiankong.com/Handler.ashx?action=getnewsitem&uniquekey=${this.props.match.params.uniquekey}`, myFetchOptions)
    .then(response => response.json())
    .then(json => this.setState({newsItem: json}))
  }

  creatMarkUp(){
    return { __html: this.state.newsItem.pagecontent }
  }

  render(){
    return(
      <div id="pc">
        <PcHeader />
        <div id="pc-news-details">
          <Row>
            <Col span={2}></Col>
            <Col span={20}>
              <div className="news-item-details" dangerouslySetInnerHTML={{ __html: this.state.newsItem.pagecontent }} ></div>
            </Col>
            <Col span={2}></Col>
          </Row>
        </div>
        <PcFooter />
      </div>
    )
  }
}

export default PcNewsDetails;
