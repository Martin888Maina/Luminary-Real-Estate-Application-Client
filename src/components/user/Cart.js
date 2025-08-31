import React, { useState, useEffect } from 'react';
import { Link, useParams, useHistory } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Spinner } from 'react-awesome-spinners';

const Cart = () => {
    const { combine_id } = useParams();
    const history = useHistory();
    const [combine, setCombine] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:4000/Combine/combineId/${combine_id}`);
                setCombine(response.data);
                setLoading(false);
            } catch (error) {
                toast.error('An Error occurred while displaying the Listing.', {
                    position: toast.POSITION.TOP_RIGHT,
                    autoClose: 3000,
                });
                setLoading(false);
            }
        };

        if (combine_id) {
            fetchData();
        }
    }, [combine_id]);

    const handleGeneratePDF = () => {
        if (combine) {
            // Navigate to the PDF generation page
            history.push(`/Generate-report/${combine_id}`);
        }
    };

    if (loading) {
        return (
            <div className="loading-overlay">
                <div className="spinner-container">
                    <Spinner size={120} color="#007bff" />
                </div>
            </div>
        );
    }

    return (
        <div className="container mt-5 mx-auto">
            {combine && (
                <div className="card h-100">
                    <Link to="#">
                        {combine.file_url && (
                            <img
                                src={combine.file_url}
                                className="card-img-top"
                                alt="card-img-top"
                            />
                        )}
                    </Link> 

                    <div className="card-body">
                        <h5 className="card-title">{combine.location}</h5>
                        <p className="card-text">
                            <small className="text-muted">Listing ID: {combine.combine_id}</small>
                        </p>
                        <p className="card-text">
                            <small className="text-muted">From: {new Date(combine.startDate).toISOString().split('T')[0]}</small>
                        </p>
                        <p className="card-text">
                            <small className="text-muted">To: {new Date(combine.endDate).toISOString().split('T')[0]}</small>
                        </p>
                        <p className="card-text">
                            <small className="text-muted">{combine.amount}</small>
                        </p>
                        <p className="card-text">
                            <small className="text-muted">{combine.category}</small>
                        </p>
                        <button 
                            onClick={handleGeneratePDF} 
                            style={{ 
                                backgroundColor: '#4CAF50', 
                                color: '#fff', 
                                cursor: 'pointer', 
                                borderRadius: '5px', 
                                padding: '10px 20px', 
                                border: 'none', 
                                outline: 'none' 
                            }}
                        >
                            Generate Listing Report
                        </button>
                    </div>

                    <div className="form-section mt-5">
                        <p>Are you interested in the listing?</p>
                        <Link to="/ContactForm" className="btn btn-success">Fill the Form</Link>
                    </div>
                </div>
            )}

            <ToastContainer />
        </div>
    );
};

export default Cart;