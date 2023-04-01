import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components';
import { useGlobalContext } from '../context';


// const API_ind = "https://api.pujakaitem.com/api/products";
const API_ind = "http://localhost:5000/api/products"

const IndividualProduct = () => {
  const {getIndividual, indiData} = useGlobalContext();
  const { id } = useParams();
  // console.log("Indidata===");
  // console.log(indiData);
 
  // const { name, price } = indiData;
 
  useEffect(() => {
    getIndividual(`${API_ind}?_id=${id}`);
  }, [])
  
  return (
    <Wrapper>
      <div className="container ">
        {indiData.map((curElem)=>{
            const {ipo_name, ipo_type, ipo_logo, ipo_description, know_ipo_review, ipo_open_date, ipo_close_date, ipo_size,
              ipo_fresh_issue, ipo_offer_sale, ipo_face_value, ipo_listing_on, ipo_min_price, ipo_max_price, ipo_retail_quota, ipo_qib_quota, ipo_nii_quota, ipo_discount, drhp_draft_pros, rhp_draft_pros, anchor_investor, price_band_date, anchor_inv_date, allotment_date, refunds_date, credit_demat_date, listing_date, report_Y1, report_Y1_revenue, report_Y1_expense, report_Y1_PAT, report_Y2, report_Y2_revenue, report_Y2_expense, report_Y2_PAT, report_Y3, report_Y3_revenue, report_Y3_expense, report_Y3_PAT} = curElem;
            return <div key={id}>
              <h2 className='com-heading'>{ipo_name} IPO<small> - Date, Price, Review, Allotment</small></h2>            
              <div className=''>          
                <img src={ipo_logo} alt="Logo" />                
                <p>{ipo_description}</p>
                <p>Know IPO review for {ipo_name} IPO : {know_ipo_review}</p>
                
                <table>
                  <caption><h3>IPO Details view of {ipo_name}</h3></caption>
                  <tbody>
                    <tr><td>IPO open date</td><td>{new Date(ipo_open_date).toDateString()}</td></tr>
                    <tr><td>IPO Close date</td><td>{new Date(ipo_close_date).toDateString()}</td></tr>
                    <tr><td>IPO Size</td><td>{ipo_size}</td></tr>
                    <tr><td>Fresh Issue</td><td>{ipo_fresh_issue}</td></tr>
                    <tr><td>Offer for Sale</td><td>{ipo_offer_sale}</td></tr>
                    <tr><td>Face Value</td><td>{ipo_face_value}</td></tr>
                    <tr><td>IPO Price Band</td><td>₹{ipo_min_price} to ₹{ipo_max_price} per share</td></tr>
                    <tr><td>IPO Listing on</td><td>{ipo_listing_on}</td></tr>
                    <tr><td>Retail Quota</td><td>{ipo_retail_quota}</td></tr>
                    <tr><td>QIB Quota</td><td>{ipo_qib_quota}</td></tr>
                    <tr><td>NII Quota</td><td>{ipo_nii_quota}</td></tr>
                    <tr><td>Discount</td><td>{ipo_discount}</td></tr>
                    <tr><td>DRHP Draft Prospectus</td><td>{drhp_draft_pros}</td></tr>
                    <tr><td>RHP Draft Prospectus</td><td>{rhp_draft_pros}</td></tr>
                    <tr><td>Anchor Investors List</td><td>{anchor_investor}</td></tr>
                    <tr><td>Price Band Announcement</td><td>{new Date(price_band_date).toDateString()}</td></tr>
                    <tr><td>Anchor Investors Allotment</td><td>{new Date(anchor_inv_date).toDateString()}</td></tr>
                    <tr><td>Basis of Allotment</td><td>{new Date(allotment_date).toDateString()}</td></tr>
                    <tr><td>Refunds</td><td>{new Date(refunds_date).toDateString()}</td></tr>
                    <tr><td>Credit to Demat Account</td><td>{new Date(credit_demat_date).toDateString()}</td></tr>
                    <tr><td>IPO Listing Date</td><td>{new Date(listing_date).toDateString()}</td></tr>
                  </tbody>
                </table>
                
                <table>
                  <caption><h3>Financial Report of {ipo_name} (&#8377; in crores)</h3></caption>
                  <thead>
                    <tr>
                      <th>Year</th>
                      <th>Revenue</th>
                      <th>Expense</th>
                      <th>PAT</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td>{report_Y1}</td><td>&#8377; {report_Y1_revenue}</td><td>&#8377; {report_Y1_expense}</td><td>&#8377; {report_Y1_PAT}</td></tr>
                    <tr><td>{report_Y2}</td><td>&#8377; {report_Y2_revenue}</td><td>&#8377; {report_Y2_expense}</td><td>&#8377; {report_Y2_PAT}</td></tr>
                    <tr><td>{report_Y3}</td><td>&#8377; {report_Y3_revenue}</td><td>&#8377; {report_Y3_expense}</td><td>&#8377; {report_Y3_PAT}</td></tr>
                  </tbody>
                </table>                
                <div>{ipo_name} - {ipo_type}</div>
              </div>
            </div> 
          })
          }                    
      </div>      
    </Wrapper>
  )
};

const Wrapper = styled.section`
  img {
    width: 12rem;
  }
`

export default IndividualProduct