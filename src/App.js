import './App.css';
import Routing from './components/Routing';
import TopheadlinesData from './components/api/TopheadlinesData';
import TopTechnology from './components/api/TopTechnology';
import TopBusinessData from './components/api/TopBusinessData';
import TopSportsData from './components/api/TopSportsData';
import TopEntetainment from './components/api/TopEntertainment';

function App() {
  
  console.log("The value is enterd")
  
  return (
    <>
      <Routing/>
        <div className="App">
          <TopheadlinesData />
          <TopTechnology />
          <TopBusinessData />
          <TopSportsData />
          <TopEntetainment />
        </div>
      
    </>
  );
}

export default App;
