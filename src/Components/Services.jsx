import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { useGlobalContext } from '../context'

const Services = () => {
  const {services} = useGlobalContext();
  console.log("services: here");
  console.log(services);
  return (
    <Wrapper>
      <div className="container">
        <h2 className='com-heading'>IPO grey market premium rates</h2>
        <div className='details-table'>
          <table>
            <caption><h3>GMP for Mainboard IPO</h3></caption>
            <thead>
              <tr>
                {/* <th>ID</th>
                <th>PID</th> */}
                <th>IPO Name</th>
                <th>IPO Type</th>
                <th>IPO GMP (₹)</th>
                <th>IPO Price (₹)</th>
                <th>Current gain</th>
              </tr>
            </thead>
            <tbody>              
              {services.filter(curElem => curElem.ipo_type === "Main").map((curElem) =>{
                const {_id, pid, ipo_name, ipo_type, ipo_gmp, ipo_max_price} = curElem;
                let cur_gain_per = 0;
                if(cur_gain_per >= 0){
                  cur_gain_per = (ipo_gmp/ipo_max_price*100).toFixed(2);
                }
                else{cur_gain_per = "-"}
                return <tr key={pid}>
                      {/* <td>{_id}</td>
                      <td>{pid}</td> */}
                      <td>
                        <NavLink to={`/IndividualProduct/${_id}`}>{ipo_name}</NavLink>
                      </td>
                      <td>{ipo_type}</td>
                      <td>{ipo_gmp}</td>
                      <td>{ipo_max_price}</td>
                      <td>{cur_gain_per} %</td>
                    </tr> })
              }
            </tbody>
          </table>
        </div>
        <div className='details-table'>
          <table>
            <caption><h3>GMP for SME IPO</h3></caption>
            <thead>
              <tr>
                {/* <th>ID</th>
                <th>PID</th> */}
                <th>IPO Name</th>
                <th>IPO Type</th>
                <th>IPO GMP (₹)</th>
                <th>IPO Price (₹)</th>
                <th>Current gain</th>
              </tr>
            </thead>
            <tbody>              
              {services.filter(curElem => curElem.ipo_type !== "Main").map((curElem) =>{
                const {_id, pid, ipo_name, ipo_type, ipo_gmp, ipo_max_price} = curElem;
                let cur_gain_per = 0;
                if(cur_gain_per >= 0){
                  cur_gain_per = (ipo_gmp/ipo_max_price*100).toFixed(2);
                }
                else{cur_gain_per = "-"}
                return <tr key={pid}>
                      {/* <td>{_id}</td>
                      <td>{pid}</td> */}
                      <td>
                        <NavLink to={`/IndividualProduct/${_id}`}>{ipo_name}</NavLink>
                      </td>
                      <td>{ipo_type}</td>
                      <td>{ipo_gmp}</td>
                      <td>{ipo_max_price}</td>
                      <td>{cur_gain_per} %</td>
                    </tr> })
              }
            </tbody>
          </table>
        </div>

      </div>      
    </Wrapper>
  )
};

const Wrapper = styled.section`
  table {
    margin: 2rem 10rem;
  }
  tr td:first-child {
    min-width: 16rem;
  }
  tr td:nth-child(2){
    width: 6rem;
  }
  @media all and (max-width: ${({theme}) =>theme.media.tab }) {
    table {
      margin: 2rem 1rem;
    } 
  }
  @media all and (max-width: ${({theme}) =>theme.media.mobile }) {
    .details-table {
      overflow-x: auto;
    } 
  }
`
export default Services