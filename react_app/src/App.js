import React from 'react';
import { Row, Col, Container} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import axios from 'axios';
import { updateCompanies } from './redux/companies';
import Header from './Components/Header'
// import CompaniesContainer from './Components/CompaniesContainer';
import CompanyTile from './Components/CompanyTile'
import gladiators from './assets/gladiators-trimmed.png';
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
        <Col className='col-sm-4 m-0 p-0'>
          <CompanyTile className='m-0 p-0'/>
        </Col>
        <Container className='image-container col-sm-4 m-0 p-0'>
          <Row className='w-100 m-0 p-0 justify-content-center'>
            {/* fuck */}
            <img className='verses' src={vs}></img>
          </Row>
          <Row className='w-100 m-0 p-0 justify-content-center'>
            {/* me */}
            <img className='gladiators' src={gladiators}></img>
          </Row>
        </Container>
        <Col className='col-sm-4 m-0 p-0'>
          <CompanyTile className='m-0 p-0'/>
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
