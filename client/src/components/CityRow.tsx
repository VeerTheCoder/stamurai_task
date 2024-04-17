import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'

interface CityRowProps {
  city: {
    id: string;
    name: string;
    cou_name_en: string;
    timezone: string;
  };
}

const CityRow: React.FC<CityRowProps> = ({ city }) => {
    console.log(city);
    
  return (
    <tr >
      <td className='tdc'>
        <Link to={`/weather/${city.name}`}>{city.name}</Link>
      </td>
      <td>{city.cou_name_en}</td>
      <td>{city.timezone}</td>
    </tr>
  );
};

export default CityRow;