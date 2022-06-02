import React, { useEffect, useState } from 'react';
import CompanyTile from "./CompanyTile";
import axios from 'axios';
import '../CSS/CompaniesContainer.css';
import vs from '../assets/vs-1.png';

const api = axios.create( {
  baseURL: 'http://localhost/fetch_companies'
})

function CompaniesContainer() {

    const [companies, setCompanies] = useState([]);

    return ( 
        <div className='d-flex justify-content-center align-items-center companiesContainer'>
            <CompanyTile/>
            <img className='verses' src={vs}></img>
            <CompanyTile/>
        </div>
     );
}



export default CompaniesContainer;