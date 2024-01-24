import './App.css';
import Sidepanel from './components/sidePanel/sidepanel';
import Header from './components/header/header'

function App() {
  return (
    <div className="App">
      <Header title={'customer Labs'}/>
      <main>
        <button className='Save-segment-btn'>Save segment</button>
        <Sidepanel children={<Header title={'Saving Segment'} rightOperator={true}/>}/>
      </main>
    </div>
  );
}

export default App;
