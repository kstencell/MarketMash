import React from 'react';
import { Row, Col} from 'react-bootstrap';
import './App.css';
import Header from './Components/Header'
import CompaniesContainer from './Components/CompaniesContainer';
import gladiators from './assets/gladiators-trimmed.png';
import gladiators2 from './assets/gladiators-2-trimmed.png';


function App() {

  return (
    <div className='app'>
      <Header/>
      <Row className='d-flex body-container w-100 p-0 m-0'>
        <Col className='col-sm-3 m-0 p-0 d-flex align-items-end justify-content-center'>
          <img className='gladiators1' alt='gladiators fighting' src={gladiators}></img>
        </Col>
        <CompaniesContainer className='col-sm-2'/>
        <Col className='col-sm-3 m-0 p-0 d-flex align-items-end justify-content-center'>
          <img className='gladiators2' alt='gladiators fighting' src={gladiators2}></img>
        </Col>
      </Row>
    </div>
  );
}

export default App;
