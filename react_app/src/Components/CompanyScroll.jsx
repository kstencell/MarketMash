import React from "react";
import { useSelector } from "react-redux";
import '../CSS/CompanyScroll.css'
import { Col } from 'react-bootstrap';
import scrollTop from '../assets/scroll-top.png';
import scrollBottom from '../assets/scroll-bottom.png';
import { DisplayResults } from '../gameLogic.js';
import { Textfit } from 'react-textfit';


function CompanyScroll() {

    const companies = useSelector(state => state.companies.companies);
    const company1 = useSelector(state => state.companies.companies[0]);

    return ( 
        <Col className='col-sm-5 m-0 p-0 d-flex justify-content-center align-items-center'>
            <div id='left-scroll' className='scroll-container left-scroll-hover' onClick={() => DisplayResults(companies)}>
                <div className='scroll-top-container m-0 p-0'>
                    <div className='scroll-text scroll-text-left'>
                        <Textfit mode="single" max="25">
                            {company1['name']}
                        </Textfit>
                            <h4>({company1['symbol']})</h4>
                            <br></br>
                            <br></br>
                            <h4>Market Cap:</h4>
                            <h4>${company1['market_cap'].toLocaleString()}</h4>
                    </div>
                    <img className='scroll scroll-top' src={scrollTop}></img>
                </div>
                <div className='scroll-bottom-container p-0 m-0'>
                    <img className='scroll scroll-bottom' src={scrollBottom}></img>
                </div>
            </div>
        </Col>
     );
}



export default CompanyScroll;