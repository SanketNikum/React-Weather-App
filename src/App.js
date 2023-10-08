import './App.css';
import CurrentWeather from './components/current-weather/current-weather';
import Search from './components/search/search';

const App = () => {

  const handleOnSearchChange = (searchData) => {
    console.log('Search Result >>>>>>>>>>>>>>>>', searchData);
    const [lat, lon] = searchData.value.split(" ")
    
  }

  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange}/>
      <CurrentWeather/>
    </div>
  );
}

export default App;
