import React, { Component } from 'react';
import { TopBar } from './TopBar';
import { Main } from './Main';

import sky from '../assets/IMG_7615.jpg';



class App extends Component {
 render() {
   return (
     <div className="App">
       <TopBar/>
           <img src={sky} alt="asd" className="bkim"/>
       <Main/>
       <footer>
           <p>Posted by: BingBing</p>
           <p>Contact information: <a href="https://www.linkedin.com/in/yibing-zhang-006323149/">
           My Linkedin</a>.</p>
       </footer>
     </div>
   );
 }
}

export default App;