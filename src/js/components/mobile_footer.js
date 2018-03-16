import React from 'react';
import {Row, Col} from 'antd';

export default class MobileFooter extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    return(
      <div>
        <Row>
          <Col span={24} className="footer">
            <p>&copy;&nbsp;柿子树出品</p>
          </Col>
        </Row>
      </div>
    )
  }
}
