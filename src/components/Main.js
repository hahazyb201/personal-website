import React from 'react';
import { Tabs} from 'antd';
import { article1 } from './article1';
import { article2 } from './article2';
import { list } from './list';
import { Switch, Route } from 'react-router-dom'
const TabPane = Tabs.TabPane;


export class Main extends React.Component {
 render() {
   return (
     <div className="main">
       <Tabs className="main-tabs" size="large">
              <TabPane tab="Study" key="1" className="tab">
                  <Switch>
                        <Route path="/article1" component={article1} />
                        <Route path="/article2" component={article2} />
                        <Route path="/" component={list} />
                  </Switch>
              </TabPane>
              <TabPane tab="Interview" key="2" className="tab">Content of tab 2</TabPane>
              <TabPane tab="Life" key="3" className="tab">Content of tab 3</TabPane>
       </Tabs>

     </div>

   );
 }
}






