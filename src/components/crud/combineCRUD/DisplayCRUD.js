import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useHistory } from 'react-router-dom';

const DisplayCRUD = () => {
  const [combines, setCombines] = useState([]); // Updated state variable
  const history = useHistory();

  useEffect(() => {
    const token = sessionStorage.getItem('access_token');

    axios
      .get('http://localhost:4000/Combine/allCombine', {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json, charset=UTF-8',
        },
      })
      .then((res) => {
        const combineData = res.data; // Updated variable name

        if (combineData && combineData.length > 0) {
          setCombines(combineData.map(item => ({
            ...item,
            startDate: item.startDate.split('T')[0], // Extract date portion
            endDate: item.endDate.split('T')[0], // Extract date portion
          }))); // Updated state setter

          toast.success('Combine Records Displayed Successfully', {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 3000,
          });
        } else {
          toast.error('No user data found.', {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 3000,
          });
        }
      })
      .catch((err) => {
        toast.error('An Error occurred while displaying the Records.', {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 3000,
        });
      });
  }, []);

  const handleDetailsClick = (combineId) => {
    history.push(`/combineId/${combineId}`);
  };

  const handleUpdatesClick = (combineId) => {
    history.push(`/updateCombine/${combineId}`);
  };

  const handleDeletesClick = (combineId) => {
    history.push(`/deleteCombine/${combineId}`);
  };

  return (
    <div className="container">
      <table className="table table-borderless mt-5 mb-5" style={{ margin: 'auto' }}>
        <thead>
          <tr>
            <th scope="col">Number</th>
            <th scope="col">Image</th>
            <th scope="col">Location</th>
            <th scope="col">Start Date</th>
            <th scope="col">End Date</th>
            <th scope="col">Amount</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {combines.map((item, index) => (
            <tr key={item.combine_id}>
              <th scope="row">{index + 1}</th>
              <td>
                {item.file_url && (
                  <img src={item.file_url} alt="Listing" style={{ width: '100px', height: '100px' }} />
                )}
              </td>
              <td>{item.location}</td>
              <td>{item.startDate}</td>
              <td>{item.endDate}</td>
              <td>{item.amount}</td>
              <td>
                <button
                  onClick={() => handleDetailsClick(item.combine_id)}
                  className="btn btn-info mr-2"
                >
                  Details
                </button>

                <button
                  onClick={() => handleUpdatesClick(item.combine_id)}
                  className="btn btn-warning mr-2"
                >
                  Update
                </button>

                <button
                  onClick={() => handleDeletesClick(item.combine_id)}
                  className="btn btn-danger mr-2"
                >
                  Delete
                </button>
                {/* Additional buttons for Update and Delete if needed */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <ToastContainer />
    </div>
  );
};

export default DisplayCRUD;
