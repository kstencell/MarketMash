import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

const api = axios.create( {
  baseURL: 'http://localhost/fetch_companies'
})

function App() {

  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    const fetchCompanies = async() => {
      try {
        const response = await api.get('/');
        console.log(response.data);
        setCompanies(response.data);
      }
      catch (err) {
      }
    }
    fetchCompanies();
  }, [])

  return (
    <div>
      {companies.map(company => ( 
        <div key={company['rank']}>
            <h1>Rank: {company['rank']}</h1>
            <ul>
              <li>{company['name']}</li>
              <li>{company['market_cap']}</li>
              <li>{company['price']}</li>
              <li>{company['country']}</li>
            </ul>
            <h1>update #3</h1>
        </div>
      ))}
    </div>
  );
}

export default App;
