import React from 'react';
import ReactDOM from 'react-dom';
import PcIndex from './components/pc_index';
import MobileIndex from './components/mobile_index';
import MediaQuery from 'react-responsive';
import PcNewsDetails from './components/pc_news_details';
import MobileNewsDetails from './components/mobile_news_details';

import { BrowserRouter as Router, Route, Link, hashHistory } from "react-router-dom";

export default class Root extends React.Component {
  constructor(props) {
    super(props);
  }
  render(){
    return(
      <div>
        <MediaQuery query="(min-device-width: 1224px)">
          <Router history={hashHistory}>
            <div>
              <Route exact path="/" component={PcIndex} />
              <Route exact path="/details/:uniquekey" component={PcNewsDetails} />
            </div>
					</Router>
        </MediaQuery>
        <MediaQuery query="(max-device-width: 1224px)">
          <Router history={hashHistory}>
            <div>
              <Route exact path='/' component={MobileIndex}/>
              <Route exact path='/details/:uniquekey' component={MobileNewsDetails} />
            </div>
          </Router>
        </MediaQuery>
      </div>
    )
  }
}

ReactDOM.render(
  <Root />,
  document.getElementById('root')
);
