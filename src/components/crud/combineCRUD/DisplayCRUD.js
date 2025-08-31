import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Spinner } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';  // Import useHistory

const DisplayCRUD = () => {
  const [combines, setCombines] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const listingsPerPage = 10; // Number of listings per page

  const history = useHistory();  // Initialize useHistory

  // Define the navigation functions
  const handleDetailsClick = (combineId) => {
    history.push(`/combineId/${combineId}`);
  };

  const handleUpdatesClick = (combineId) => {
    history.push(`/updateCombine/${combineId}`);
  };

  const handleDeletesClick = (combineId) => {
    history.push(`/deleteCombine/${combineId}`);
  };

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
        const combineData = res.data;

        if (combineData && combineData.length > 0) {
          setCombines(
            combineData.map((item) => ({
              ...item,
              startDate: item.startDate.split('T')[0],
              endDate: item.endDate.split('T')[0],
            }))
          );

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
        setLoading(false);
      })
      .catch((err) => {
        toast.error('An Error occurred while displaying the Records.', {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 3000,
        });
        setLoading(false);
      });
  }, []);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Filter combines based on the search term
  const filteredCombines = combines.filter((item) =>
    `${item.location} ${item.amount} ${item.startDate} ${item.endDate}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  // Slice data for pagination
  const totalPages = Math.ceil(filteredCombines.length / listingsPerPage);
  const paginatedCombines = filteredCombines.slice(
    (currentPage - 1) * listingsPerPage,
    currentPage * listingsPerPage
  );

  // Get range of page numbers to show
  const pageRange = () => {
    const maxPageButtons = 5;  // Show a maximum of 5 page buttons
    let start = Math.max(1, currentPage - 2);  // Show pages before the current page
    let end = Math.min(totalPages, currentPage + 2);  // Show pages after the current page

    if (end - start < maxPageButtons - 1) {
      if (start === 1) {
        end = Math.min(totalPages, start + maxPageButtons - 1);
      } else if (end === totalPages) {
        start = Math.max(1, end - maxPageButtons + 1);
      }
    }

    let pages = [];
    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    return pages;
  };

  return (
    <div className="container">
      {/* Search Bar */}
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search by location, amount, start date, or end date"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Conditionally render loading spinner */}
      {loading ? (
        <div className="d-flex justify-content-center mt-5">
          <Spinner animation="border" variant="primary" />
        </div>
      ) : (
        <>
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
              {paginatedCombines.length > 0 ? (
                paginatedCombines.map((item, index) => (
                  <tr key={item.combine_id}>
                    <th scope="row">{(currentPage - 1) * listingsPerPage + index + 1}</th>
                    <td>
                      {item.file_url && (
                        <img
                          src={item.file_url}
                          alt="Listing"
                          style={{ width: '100px', height: '100px' }}
                        />
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
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="7" className="text-center">
                    No records found
                  </td>
                </tr>
              )}
            </tbody>
          </table>

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <nav>
              <ul className="pagination justify-content-center">
                <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                  <button
                    className="page-link"
                    onClick={() => handlePageChange(currentPage - 1)}
                  >
                    Previous
                  </button>
                </li>

                {/* First page */}
                {currentPage > 3 && (
                  <li className="page-item">
                    <button className="page-link" onClick={() => handlePageChange(1)}>
                      1
                    </button>
                  </li>
                )}

                {/* Ellipsis */}
                {currentPage > 4 && (
                  <li className="page-item disabled">
                    <span className="page-link">...</span>
                  </li>
                )}

                {/* Page Range */}
                {pageRange().map((page) => (
                  <li
                    key={page}
                    className={`page-item ${currentPage === page ? 'active' : ''}`}
                  >
                    <button className="page-link" onClick={() => handlePageChange(page)}>
                      {page}
                    </button>
                  </li>
                ))}

                {/* Ellipsis for last pages */}
                {currentPage < totalPages - 3 && (
                  <li className="page-item disabled">
                    <span className="page-link">...</span>
                  </li>
                )}

                {/* Last page */}
                {currentPage < totalPages - 2 && (
                  <li className="page-item">
                    <button className="page-link" onClick={() => handlePageChange(totalPages)}>
                      {totalPages}
                    </button>
                  </li>
                )}

                <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                  <button
                    className="page-link"
                    onClick={() => handlePageChange(currentPage + 1)}
                  >
                    Next
                  </button>
                </li>
              </ul>
            </nav>
          )}
        </>
      )}
      <ToastContainer />
    </div>
  );
};

export default DisplayCRUD;
