import React from 'react';
import { Icon } from 'antd';

export class TopBar extends React.Component {
 render() {
   return (
     <header className="App-header">
       <div className="App-title">&nbsp;BingBing&nbsp;<Icon type="bulb" theme="filled" /></div>
     </header>
   );
 }
}