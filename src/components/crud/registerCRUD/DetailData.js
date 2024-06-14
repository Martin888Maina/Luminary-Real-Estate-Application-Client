import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useParams } from 'react-router-dom';

const DetailData = () => {
  const { id } = useParams();
  const [contacts, setContacts] = useState([]);
  

  useEffect(() => {
    const extractData = () => {
      const token = sessionStorage.getItem("access_token");

      if (id) {
        
        axios.get(`http://localhost:4000/Register/userId/${id}`, {

          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        })
          .then(res => {
            const contactData = res.data; // Assuming the response is an object
            
            if (contactData) {
              toast.success('Contact Records Displayed Successfully', {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 3000,
              });
              setContacts([contactData]); // Wrap the single student object in an array
              
            } else {
              // Handle case where no data is returned
              toast.error('No contact data found.', {
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
    };

    extractData();
  }, [id]);

  return (
    <div className="container">
      {/* Bootstrap Table */}
      <table className="table table-borderless mt-5 mb-5" style={{ margin: 'auto' }}>
        {/* Table Head */}
        <thead>
          <tr>
            {/* <th scope="col">ID</th> */}
            <th scope="col">Email</th>
            <th scope="col">Password</th>
            <th scope="col">Role</th>
            {/* Add more columns as needed */}
          </tr>
        </thead>
        {/* Table Body */}
        <tbody>
          {contacts.map((contact) => (
            <tr key={contact.id}>
                <td>{contact.email}</td>
                <td>{contact.password}</td>
                <td>{contact.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* Place the toast container just above the closing div of the project */}
      <ToastContainer />
    </div>
  );
}

export default DetailData;