import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CityRow from './CityRow';
import '../App.css'
const CitiesTable: React.FC = () => {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/geonames-all-cities-with-a-population-1000/records?limit=100'
        );
        const arr_data=Object.values(response.data)
        console.log(arr_data);
        
        if (Array.isArray(arr_data)) {
         setCities(Object.values(arr_data[1]));
        } else {
          console.error('Data is not an array:', response.data);
        }
      } catch (error) {
        console.error('Error fetching cities data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='main'>
      <table >
        <thead >
          <tr>
            <th>City Name</th>
            <th>Country</th>
            <th>Timezone</th>
          </tr>
        </thead>
        <tbody>
          {cities.map((city) => (
            <CityRow key={city} city={city}/>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CitiesTable;