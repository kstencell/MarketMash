import React from "react";
import { useSelector } from "react-redux";
import '../CSS/CompanyScroll.css'
import { Col } from 'react-bootstrap';
import scrollTop from '../assets/scroll-top-reverse.png';
import scrollBottom from '../assets/scroll-bottom-reverse.png';
import { DisplayResults } from '../gameLogic.js';


function CompanyScrollReverse() {

    const companies = useSelector(state => state.companies.companies);
    const company2 = useSelector(state => state.companies.companies[1]);

    return ( 
        <Col className='col-sm-5 m-0 p-0 d-flex justify-content-center align-items-center'>
            <div id='right-scroll' className='scroll-container right-scroll-hover' onClick={() => DisplayResults(companies)}>
                <div className='scroll-top-container m-0 p-0'>
                    <div className='scroll-text scroll-text-right'>
                        <h3>{company2['name']}</h3>
                        <h4>({company2['symbol']})</h4>
                        <br></br>
                        <br></br>
                        <h4>Market Cap:</h4>
                        <h4>2.252T</h4>
                    </div>
                    <img className='scroll-top' src={scrollTop}></img>
                </div>
                <div className='scroll-bottom-container p-0 m-0'>
                    <img className='scroll scroll-bottom' src={scrollBottom}></img>
                </div>
            </div>
        </Col>
     );
}



export default CompanyScrollReverse;