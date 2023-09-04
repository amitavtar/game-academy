
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Make a GET request using axios
    axios.get('http://13.233.104.251:8080/api/coach/homeScreen?longitude=&latitude=')
      .then(response => {
        setData(response.data.data.SportsData);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  useEffect(() => {
    // Log the "Offer" data to the console
    data.forEach(item => {
      if (item.sport) {
        console.log('sport:', item.sport);
      }
    });
  }, [data]);

  return (
    <div>
      {/* Display data */}
      <ul>
        {data.map((item, i) => (
          <li key={i}>
            {/* Display Offer data */}
            {item.sport &&  (
              <div>
                Offer Title: {item.sport} <br />
                Offer Description: {item.sport}
                {/* Add more Offer fields here */}
              </div>
            )}
            {item.img && (
              <div>
              <img src={item.img} alt={`Image ${i}`} />
              </div>
            )}

          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;


