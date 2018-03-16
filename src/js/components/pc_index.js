import React from 'react';
import ReactDOM from 'react-dom';
import PcHeader from './pc_header';
import PcFooter from './pc_footer';
import PcNewsContainer from './pc_newscontainer';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class PcIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div id="pc">
        <PcHeader />
        <PcNewsContainer />
        <PcFooter />
      </div>
    )
  }
}
