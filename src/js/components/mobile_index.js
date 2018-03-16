import React from 'react';
import ReactDOM from 'react-dom';
import MobileHeader from './mobile_header';
import MobileFooter from './mobile_footer';
import MobileList from './mobile_list';
import {Tabs} from 'antd';
const TabPane = Tabs.TabPane

export default class MobileIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    return(
      <div id="mobile">
        <MobileHeader />
          <Tabs defaultActiveKey='top'>
            <TabPane tab='头条' key='top'>
              <MobileList type='top' count={10} />
            </TabPane>
            <TabPane tab='国内' key='national'>
              <MobileList type='guonei' count={10} />
            </TabPane>
            <TabPane tab='国际' key='international'>
              <MobileList type='guoji' count={10} />
            </TabPane>
            <TabPane tab='社会' key='military'>
              <MobileList type='shehui' count={10} />
            </TabPane>
            <TabPane tab='娱乐' key='entertainment'>
              <MobileList type='yule' count={10} />
            </TabPane>
          </Tabs>
        <MobileFooter />
      </div>
    )
  }
}
