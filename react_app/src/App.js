import React from 'react';
import { Row, Col} from 'react-bootstrap';
import './App.css';
import Header from './Components/Header'
import CompaniesContainer from './Components/CompaniesContainer';
import gladiators from './assets/gladiators-trimmed.png';
import gladiators2 from './assets/gladiators-2-trimmed.png';


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
        <Col className='col-sm-3 m-0 p-0 d-flex align-items-end justify-content-center'>
          <img className='gladiators1' src={gladiators}></img>
        </Col>
        <CompaniesContainer className='col-sm-2'/>
        <Col className='col-sm-3 m-0 p-0 d-flex align-items-end justify-content-center'>
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
