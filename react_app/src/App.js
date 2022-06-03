import React from 'react';
import { Row, Col, Container} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import axios from 'axios';
import { updateCompanies } from './redux/companies';
import Header from './Components/Header'
import Scroll from './Components/Scroll'
// import CompaniesContainer from './Components/CompaniesContainer';
import CompanyTile from './Components/CompanyTile'
import gladiators from './assets/gladiators-trimmed.png';
import gladiators2 from './assets/gladiators-2-trimmed.png';
import scrollPlaceholder from './assets/scroll-placeholder.png'
import vs from './assets/vs-1.png';


const api = axios.create( {
  baseURL: 'http://localhost/fetch_companies'
})

function App() {

  // const companies = useSelector(state => state.companies.companies)
  // console.log("Companies")
  // console.log(companies)

  // const dispatch = useDispatch();

  // const fetchCompanies = async() => {
  //   try {
  //     const response = await api.get('/');
  //     console.log(response.data);
  //     dispatch(updateCompanies(response.data));
  //   }
  //   catch (err) {
  //     console.log("error fetching companies");
  //   }
  // }

  return (
    <div className='app'>
      <Header/>
      <Row className='d-flex body-container w-100 p-0 m-0'>
        <Col className='outter-cols m-0 p-0 d-flex align-items-end justify-content-center'>
          <img className='gladiators1' src={gladiators}></img>
        </Col>
        <Col className='inner-col col-sm-4 m-0 p-0 d-flex'>
          <Col className='col-sm-4 m-0 p-0 d-flex justify-content-center align-items-end'>
            {/* <Scroll className='scroll-left scroll'/> */}
            {/* <div className='scroll-placeholder'/> */}
            <img src={scrollPlaceholder} className='scroll-placeholder'/>
          </Col>
          <Col className='col-sm-4 m-0 p-0 d-flex justify-content-center align-items-center'>
            <img className='verses' src={vs}></img>
          </Col>
          <Col className='col-sm-4 m-0 p-0 d-flex justify-content-center align-items-end'>
            <img src={scrollPlaceholder} className='scroll-placeholder scroll-right'/>
          </Col>
        </Col>
        <Col className='outter-cols m-0 p-0 d-flex align-items-end justify-content-center'>
          <img className='gladiators2' src={gladiators2}></img>
        </Col>
      </Row>
    </div>



    // <div>
    //   <button onClick={() => fetchCompanies()}>Fetch Companies</button>
    //   {companies.map(company => ( 
    //     <div key={company['rank']}>
    //         <h1>Rank: {company['rank']}</h1>
    //         <ul>
    //           <li>{company['name']}</li>
    //           <li>{company['market_cap']}</li>
    //           <li>{company['price']}</li>
    //           <li>{company['country']}</li>
    //         </ul>
    //     </div>
    //   ))}
    // </div>
  );
}

export default App;
