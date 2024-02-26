import './App.css';
import ChoiceBar from './Components/ChoiceBar';
import Cover from './Components/Cover';
import Header from './Components/Header';
import Main from './Components/Main';
import WeekBar from './Components/WeekBar';
// import { Inline } from '@bedrock-layout/inline';

function App() {
  return (
    <div className="App">
        <Header />
        <div className='Cover' 
        // align="stretch" gutter="size2" stretch={1}
        > covertest
          <ChoiceBar />
          {/* <Main as="main">Main Content</Main> */}
          {/* <WeekBar>Right Sidebar</WeekBar> */}
        </div>
          <div className='no-header-container'>
            <p>contains</p>
            console.log(fuckoff)
          </div>
          <p>
            what a pain in the ass.
          </p>
    </div>
  );
}

export default App;
