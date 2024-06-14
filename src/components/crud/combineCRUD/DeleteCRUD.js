import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useParams } from 'react-router-dom';

const DeleteCRUD = () => {
  const { combine_id } = useParams();
  const [combines, setCombines] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = sessionStorage.getItem("access_token");
        if (combine_id) {
          const response = await axios.get(`http://localhost:4000/Combine/combineId/${combine_id}`, {
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'application/json, charset=UTF-8',
            },
          });
          setCombines([response.data]);
        }
      } catch (error) {
        toast.error('An error occurred while fetching the data.', {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 3000,
        });
      }
    };

    fetchData();
  }, [combine_id]);

  const handleDelete = async (combineId) => {
    try {
      const token = sessionStorage.getItem("access_token");
      await axios.delete(`http://localhost:4000/Combine/deleteCombine/${combineId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setCombines((prevCombines) => prevCombines.filter((item) => item.combine_id !== combineId));
      toast.success('Record deleted successfully', {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000,
      });
    } catch (error) {
      console.error("Error deleting record", error);
      toast.error("Error deleting record", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000,
      });
    }
  };

  return (
    <div className="container mt-5">
      <h1>DELETE LISTING COMPONENT</h1>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {combines.length === 0 ? (
          <div className="col">
            <p>No data available</p>
          </div>
        ) : (
          combines.map((item) => (
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
                  <button onClick={() => handleDelete(item.combine_id)} className="btn btn-danger">
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
      <ToastContainer />
    </div>
  );
};

export default DeleteCRUD;
