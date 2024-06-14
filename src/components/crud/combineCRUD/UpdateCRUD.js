// export default UpdateExperiment;
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useParams } from 'react-router-dom';

const UpdateExperiment = () => {
  const { combine_id } = useParams();
  const [combineData, setCombineData] = useState({
    location: '',
    startDate: '',
    endDate: '',
    amount: '',
    file_url: '',
    category: ''
  });

  useEffect(() => {
    const token = sessionStorage.getItem("access_token");

    if (combine_id) {
      axios.get(`http://localhost:4000/Combine/combineId/${combine_id}`, {
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json, charset=UTF-8',
          },
      })
        .then(res => {
          const combineData = res.data;

          if (combineData) {
            setCombineData(combineData);
          } else {
            toast.error('No user data found.', {
              position: toast.POSITION.TOP_RIGHT,
              autoClose: 3000,
            });
          }
        })
        .catch(err => {
          toast.error('An Error occurred while displaying the Records.', {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 3000,
          });
        });
    }
  }, [combine_id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCombineData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const token = sessionStorage.getItem("access_token");

    axios.patch(`http://localhost:4000/Combine/updateCombine/${combine_id}`, combineData, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    })
      .then((res) => {
        console.log("Record updated successfully");
        toast.success('Record updated successfully', {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 3000,
        });
      })
      .catch((error) => {
        console.error("Error updating record", error);
        toast.error("Error updating record", {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 3000,
        });
      });
  };

  return (
    <div className="container mt-5">
      <h1>UPDATE LISTING COMPONENT</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="location" className="form-label">Location</label>
          <input type="text" className="form-control" id="location" name="location" value={combineData.location} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="startDate" className="form-label">Start Date</label>
          <input type="date" className="form-control" id="startDate" name="startDate" value={combineData.startDate} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="endDate" className="form-label">End Date</label>
          <input type="date" className="form-control" id="endDate" name="endDate" value={combineData.endDate} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="amount" className="form-label">Amount</label>
          <input type="number" className="form-control" id="amount" name="amount" value={combineData.amount} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="file_url" className="form-label">File Path</label>
          <input type="text" className="form-control" id="file_url" name="file_url" value={combineData.file_url} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="category" className="form-label">Category</label>
          <input type="text" className="form-control" id="category" name="category" value={combineData.category} onChange={handleChange} />
        </div>
        <button type="submit" className="btn btn-primary">Update</button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default UpdateExperiment;
