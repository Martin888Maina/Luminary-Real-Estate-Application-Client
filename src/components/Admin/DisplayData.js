import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

const DisplayData = () => {
  const [contacts, setContacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [listingsPerPage] = useState(10);

  const retrieveData = () => {
    const token = sessionStorage.getItem('access_token');

    axios
      .get('http://localhost:4000/Register/users', {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      })
      .then((res) => {
        toast.success('Contact Records Displayed Successfully', {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 3000,
        });
        setContacts(res.data);
        setLoading(false);
      })
      .catch((err) => {
        toast.error('An Error occurred while displaying the Records.', {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 3000,
        });
        setLoading(false);
      });
  };

  useEffect(() => {
    retrieveData();
  }, []);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredContacts = contacts.filter((contact) => {
    return (
      contact.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.role.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  const totalPages = Math.ceil(filteredContacts.length / listingsPerPage);

  const pageRange = () => {
    const maxPageButtons = 5;
    let start = Math.max(1, currentPage - 2);
    let end = Math.min(totalPages, currentPage + 2);

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

  const indexOfLastContact = currentPage * listingsPerPage;
  const indexOfFirstContact = indexOfLastContact - listingsPerPage;
  const paginatedContacts = filteredContacts.slice(indexOfFirstContact, indexOfLastContact);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="container">
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search by email or role"
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>

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
                <th scope="col">Email</th>
                <th scope="col">Password</th>
                <th scope="col">Role</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {paginatedContacts.length > 0 ? (
                paginatedContacts.map((contact, index) => (
                  <tr key={contact.id}>
                    <th scope="row">{(currentPage - 1) * listingsPerPage + index + 1}</th>
                    <td>{contact.email}</td>
                    <td>{contact.password}</td>
                    <td>{contact.role}</td>
                    <td>
                      <Link to={`/userId/${contact.id}`} className="btn btn-info mr-2">
                        Details
                      </Link>
                      <Link to={`/updateUsers/${contact.id}`} className="btn btn-warning mr-2">
                        Update
                      </Link>
                      <Link to={`/deleteUsers/${contact.id}`} className="btn btn-danger">
                        Delete
                      </Link>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5">No contacts found</td>
                </tr>
              )}
            </tbody>
          </table>

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

export default DisplayData;
