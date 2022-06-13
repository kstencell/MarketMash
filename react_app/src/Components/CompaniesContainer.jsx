import React, { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import CompanyScroll from "./CompanyScroll";
import CompanyScrollReverse from "./CompanyScrollReverse";
import PlayAgainButton from "./PlayAgainButton"
import axios from 'axios';
import { updateCompanies } from '../redux/companies';
import { useDispatch, useSelector } from 'react-redux';
import '../CSS/CompaniesContainer.css';
import vs from '../assets/vs-1.png';

const api = axios.create( {
  baseURL: 'http://localhost/fetch_companies'
})

function CompaniesContainer() {

  return ( 
    <Col className='col-sm-6 m-0 p-0 d-flex'>
      <CompanyScroll/>
      <Col className='m-0 p-0 d-flex flex-column justify-content-center align-items-center'>
        <img className='verses' src={vs}></img>
        <PlayAgainButton/>
      </Col>
      <CompanyScrollReverse/>
    </Col>
    );
}



export default CompaniesContainer;