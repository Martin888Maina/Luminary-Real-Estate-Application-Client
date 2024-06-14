import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom'; // Import useHistory
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { useAuth } from '../../../context/AuthContext'; // Import useAuth hook

const BuyCommercial = () => {
    const history = useHistory();
    const [listings, setListings] = useState([]);
    const { isLoggedIn, accessToken } = useAuth();
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const listingsPerPage = 20;

    useEffect(() => {
        fetchListings();
    }, []);

    useEffect(() => {
        const asyncOperation = () => {
            setTimeout(() => {
                setLoading(false);
            }, 500); // Adjust the delay as needed
        };
        asyncOperation();
    }, []);

    const fetchListings = async () => {
        try {
            const response = await axios.get('http://localhost:4000/Combine/allCombine?category=buying-commercial');
            if (response.status === 200) {
                setListings(response.data);
            } else {
                console.error('Failed to fetch listings');
            }
        } catch (error) {
            console.error('Error fetching listings:', error);
        }
    };

    useEffect(() => {
        console.log("Mountain component rendered. Is logged in:", isLoggedIn);
        console.log("Access token:", accessToken);
      }, [isLoggedIn, accessToken]);

    if (loading) {
        return <div className='display-1 mt-5 mb-5'>Loading...</div>;
    }

    const handleVerification = (combine_id, event) => {
        event.preventDefault();
        console.log("Handling verification...");
      
        // Directly check if the access token exists in sessionStorage
        const isLoggedIn =!!sessionStorage.getItem('access_token');
      
        console.log("Is logged in:", isLoggedIn);
        console.log("Access token:", sessionStorage.getItem('access_token'));
      
        if (!isLoggedIn) {
          console.log("User not logged in, redirecting to login form");
          history.push('/LoginForm');
        } else {
          console.log("User is logged in, redirecting to the listing detail page");
          history.push(`/CombineId/${combine_id}`);
        }
      };

    const totalPages = Math.ceil(listings.length / listingsPerPage);

    const paginatedListings = listings.slice((currentPage - 1) * listingsPerPage, currentPage * listingsPerPage);

    const renderListings = () => {
        const rows = [];
        for (let i = 0; i < paginatedListings.length; i += 4) {
            const rowListings = paginatedListings.slice(i, i + 4);
            const row = (
                <div key={i} className="row justify-content-center mt-4">
                    {rowListings.map(listing => (
                        <div key={listing.combine_id} className="col-lg-3 col-md-6 mb-4">
                            <div className="card mx-auto" style={{ maxWidth: '18rem' }}>
                                
                            <Link to="#" onClick={(event) => handleVerification(listing.combine_id, event)}>
                                <img
                                    src={listing.file_url}
                                    className="card-img-top"
                                    alt="card-img-top"
                                    style={{
                                    height: '200px',
                                    objectFit: 'cover',
                                    border: '2px solid #ccc',
                                    borderRadius: '8px',
                                    }}
                                />
                            </Link>

                                <div className="card-body">
                                    <h5 className="card-title">{listing.location}</h5>
                                    <p className="card-text">
                                        <small className="text-muted">Listing {listing.combine_id}</small>
                                    </p>
                                    <p className="card-text">
                                        <small className="text-muted">From: {new Date(listing.startDate).toISOString().split('T')[0]}</small>
                                    </p>
                                    <p className="card-text">
                                        <small className="text-muted">To: {new Date(listing.startDate).toISOString().split('T')[0]}</small>
                                    </p>
                                    <p className="card-text">
                                        <small className="text-muted">{listing.amount}</small>
                                    </p>
                                    <p className="card-text">
                                        <small className="text-muted">{listing.category}</small>
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            );
            rows.push(row);
        }
        return rows;
    };

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const renderPagination = () => {
        if (totalPages <= 1) {
            return null;
        }

        const pageNumbers = [];
        for (let i = 1; i <= totalPages; i++) {
            pageNumbers.push(
                <li key={i} className={`page-item ${currentPage === i ? 'active' : ''}`}>
                    <button className="page-link" onClick={() => handlePageChange(i)}>{i}</button>
                </li>
            );
        }

        return (
            <nav aria-label="Large page navigation">
                <ul className="pagination pagination-lg justify-content-center mt-4">
                    <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                        <button className="page-link" onClick={() => handlePageChange(currentPage - 1)}>Previous</button>
                    </li>
                    {pageNumbers}
                    <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                        <button className="page-link" onClick={() => handlePageChange(currentPage + 1)}>Next</button>
                    </li>
                </ul>
            </nav>
        );
    };

    return (
        <div>
            {renderListings()}
            {renderPagination()}
        </div>
    );
};

export default BuyCommercial;
