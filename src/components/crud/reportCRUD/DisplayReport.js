import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
import { Spinner } from 'react-bootstrap'; // Importing Spinner from Bootstrap

const DisplayReport = () => {
  const [reports, setReports] = useState([]); // State to store fetched data
  const [loading, setLoading] = useState(true); // State to manage loading spinner
  const [searchTerm, setSearchTerm] = useState(''); // State for search term
  const [currentPage, setCurrentPage] = useState(1); // Current page for pagination
  const reportsPerPage = 10; // Number of reports per page

  const retrieveData = () => {
    const token = sessionStorage.getItem('access_token');

    axios
      .get('http://localhost:4000/Report/report', {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      })
      .then((res) => {
        toast.success('Report Records Displayed Successfully', {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 3000,
        });
        setReports(res.data); // Update state with fetched data
        setLoading(false); // Stop loading after data is fetched
      })
      .catch((err) => {
        toast.error('An error occurred while displaying the records.', {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 3000,
        });
        setLoading(false); // Stop loading in case of error
      });
  };

  useEffect(() => {
    retrieveData();
  }, []); // Effect runs only once when the component is mounted

  // Filter reports based on the search term
  const filteredReports = reports.filter((report) =>
    `${report.firstname} ${report.lastname} ${report.email} ${report.message}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  // Pagination logic
  const totalPages = Math.ceil(filteredReports.length / reportsPerPage);
  const paginatedReports = filteredReports.slice(
    (currentPage - 1) * reportsPerPage,
    currentPage * reportsPerPage
  );

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

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="container">
      {/* Search Bar */}
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search by name, email, or message"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} // Update search term on input change
        />
      </div>

      {/* Conditionally render loading spinner or the table */}
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
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Email</th>
                <th scope="col">Message</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {paginatedReports.length > 0 ? (
                paginatedReports.map((report, index) => (
                  <tr key={report.report_id}>
                    <th scope="row">{(currentPage - 1) * reportsPerPage + index + 1}</th>
                    <td>{report.firstname}</td>
                    <td>{report.lastname}</td>
                    <td>{report.email}</td>
                    <td>{report.message}</td>
                    <td>
                      <Link to={`/reportId/${report.report_id}`} className="btn btn-info mr-2">
                        Details
                      </Link>
                      <Link to={`/updateReport/${report.report_id}`} className="btn btn-warning mr-2">
                        Update
                      </Link>
                      <Link to={`/deleteReport/${report.report_id}`} className="btn btn-danger">
                        Delete
                      </Link>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="text-center">
                    No reports found
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

                {currentPage > 3 && (
                  <li className="page-item">
                    <button className="page-link" onClick={() => handlePageChange(1)}>
                      1
                    </button>
                  </li>
                )}

                {currentPage > 4 && (
                  <li className="page-item disabled">
                    <span className="page-link">...</span>
                  </li>
                )}

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

                {currentPage < totalPages - 3 && (
                  <li className="page-item disabled">
                    <span className="page-link">...</span>
                  </li>
                )}

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

export default DisplayReport;
