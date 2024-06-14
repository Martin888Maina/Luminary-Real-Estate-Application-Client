import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useParams } from 'react-router-dom';
import GenerateReport from '../../GenerateReport'; // Adjust the path accordingly

const DetailCRUD = () => {
  const { combine_id } = useParams();
  const [combines, setCombines] = useState([]);


  const handleGeneratePDF = (listingData) => {
    if (listingData) {
      GenerateReport.generatePDF(listingData);
    }
  };

  useEffect(() => {

    const extractData = () => {
      const token = sessionStorage.getItem("access_token");

      if (combine_id) {
        axios.get(`http://localhost:4000/Combine/combineId/${combine_id}`, {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json, charset=UTF-8',
              },
        })
          .then(res => {
            console.log('Data:', res.data); // Log the received data
            setCombines([res.data]);
              
          })
          .catch(err => {
            toast.error('An Error occurred while displaying the Records.', {
              position: toast.POSITION.TOP_RIGHT,
              autoClose: 3000,
            });
          });
      }
    };

    extractData();
  }, [combine_id]);

  return (
    <div className="container mt-5 mx-auto">
      <h1>SINGLE LISTING COMPONENT</h1>
      {/* Single layer of combined cards */}
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {combines.map((item) => (
          <div key={item.combine_id} className="col">
            <div className="card h-100">
              <Link to="#">
                {item.file_url && (
                  <img
                    src={item.file_url}  
                    className="card-img-top"
                    alt="card-img-top"
                  />
                )}
              </Link>
              <div className="card-body">
                <h5 className="card-title">{item.location}</h5>
                <p className="card-text">
                  <small className="text-muted">{item.combine_id}</small>
                </p>
              <p className="card-text">
                    <small className="text-muted">From: {new Date(item.startDate).toISOString().split('T')[0]}</small>
                </p>
                <p className="card-text">
                    <small className="text-muted">To: {new Date(item.endDate).toISOString().split('T')[0]}</small>
                </p>
                <p className="card-text">
                  <small className="text-muted">{item.amount}</small>
                  
                </p>
            
                <button onClick={() => handleGeneratePDF(item)}>Generate Listing Report</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <ToastContainer />
    </div>
  );
};

export default DetailCRUD;
