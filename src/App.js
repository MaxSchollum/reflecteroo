import './App.css';
import ChoiceBar from './Components/ChoiceBar';
import Header from './Components/Header';
import Main from './Components/Main';
import WeekBar from './Components/WeekBar';
// import { Inline } from '@bedrock-layout/inline';

function App() {
  return (
    <div className="App">
        <Header />
        <div className='Cover'>
          <ChoiceBar />
          <WeekBar />
          <Main as="main"/>
        </div>
    </div>
  );
}

export default App;
