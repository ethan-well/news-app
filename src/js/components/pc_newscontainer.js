import React from 'react';
import ReactDOM from 'react-dom';
import { Row, Col, Carousel, Tabs } from 'antd';
import PcNewsBlock from './pc_news_block';
import PcNewsImageBlock from './pc_news_image_block';
const TabPane = Tabs.TabPane;

export default class PcNewsContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <Row>
        <Col span={2}></Col>
        <Col span={20} className='container'>
          <Row>
            <Col span={8}>
              <div className='leftContainer'>
                <div className="carousel">
                    <Carousel autoplay effect="fade">
                      <div>
                        <img src='./src/images/pc_news1.jpeg'></img>
                      </div>
                      <div>
                        <img src='./src/images/pc_news2.jpeg'></img>
                      </div>
                      <div>
                        <img src='./src/images/pc_news3.jpg'></img>
                      </div>
                      <div>
                        <img src='./src/images/pc_news4.jpeg'></img>
                      </div>
                    </Carousel>
                </div>
              </div>
              <PcNewsImageBlock type='top' count={6} />
            </Col>
            <Col span={10}>
              <Tabs defaultActiveKey="1" className='tab_news_list'>
                <TabPane tab="头条" key="1">
                  <PcNewsBlock count={10} type='top' />
                </TabPane>
                <TabPane tab="国内" key="2">
                  <PcNewsBlock count={10} type='guonei' />
                </TabPane>
                <TabPane tab="国际" key="3">
                  <PcNewsBlock count={10} type='guoji' />
                </TabPane>
              </Tabs>
            </Col>
          </Row>
        </Col>
        <Col span={2}></Col>
      </Row>
    )
  }
}
