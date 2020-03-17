import React from 'react';
import Temperature from './Temperature'


// eslint-disable-next-line 
const api = {
  key: "638e10fa0355fe08af8c6d4076f8da62",
  baseURL: "https://api.openweathermap.org/data/2.5"
}

const dateBuilder = (dateget) => {
  let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August',
   'September', 'October', 'November', 'December'];
  var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  let day = days[dateget.getDay()];
  let date = dateget.getDate();
  let month = months[dateget.getMonth()];
  let year = dateget.getFullYear();

  return `${day} ${month} ${date}, ${year}`
}



function App() {
  return (
    <div className = "App">
      <main>
        <div className='search-box'>
          <input type="text" className="search-bar" placeholder="Search cities...">
          </input>
        </div>

          <div className="location-bar">
            <div className="location">New York City</div>
            <div className="date">{dateBuilder(new Date())}</div>
          </div>

          <div className="weather-box"> 
            <Temperature />
            <div className="weather">Sunny</div>
          </div>
        </main>  
      </div>
      
      
  );
}

export default App;