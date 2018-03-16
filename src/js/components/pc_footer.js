import React from 'react';
import {Row, Col} from 'antd';

export default class PcFooter extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    return(
      <div>
        <Row>
          <Col span={20} className='footer'>
            <p>&copy;&nbsp;柿子树出品</p>
          </Col>
        </Row>
      </div>
    )
  }
}
