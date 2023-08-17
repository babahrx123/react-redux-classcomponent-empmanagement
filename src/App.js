import { Component } from 'react';
import './App.css';
//import NewTimer from './component/NewTimer';
import NewTimerWithoutInnerHtml from './component/NewTimerWithoutInnerHtml';

class App extends Component {
  
  render() {
    return(
      <div>
        <NewTimerWithoutInnerHtml />
      </div>
    )
  }
}

export default App;
