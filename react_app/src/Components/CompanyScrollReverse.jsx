import React from "react";
import '../CSS/CompanyScroll.css'
import { Col } from 'react-bootstrap';
import scrollTop from '../assets/scroll-top-reverse.png';
import scrollBottom from '../assets/scroll-bottom-reverse.png';


function CompanyScrollReverse() {
    return ( 
        <Col id='right-scroll' className='col-sm-5 m-0 p-0 d-flex justify-content-center align-items-center'>
            <div className='scroll-container'>
                <div className='scroll-top-container m-0 p-0'>
                    <div className='scroll-text scroll-text-right'>
                        <h3 className="">Apple</h3>
                        <h4>(AAPL)</h4>
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