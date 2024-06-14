import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useParams } from 'react-router-dom';

const DetailContact = () => {
  const { contact_id } = useParams();
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const extractData = () => {
      const token = sessionStorage.getItem("access_token");

      if (contact_id) {
        
        axios.get(`http://localhost:4000/Contact/contactId/${contact_id}`, {

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
  }, [contact_id]);

  return (
    <div className="container">
      {/* Bootstrap Table */}
      <table className="table table-borderless mt-5 mb-5" style={{ margin: 'auto' }}>
        {/* Table Head */}
        <thead>
          <tr>
            {/* <th scope="col">ID</th> */}
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Email</th>
            <th scope="col">Telephone</th>
            <th scope="col">Message</th>
            {/* Add more columns as needed */}
          </tr>
        </thead>
        {/* Table Body */}
        <tbody>
          {contacts.map((contact) => (
            <tr key={contact.contact_id}>
              <td>{contact.firstname}</td>
              <td>{contact.lastname}</td>
              <td>{contact.email}</td>
              <td>{contact.telephone}</td>
              <td>{contact.message}</td>
              {/* Add more cells for additional data */}
            </tr>
          ))}
        </tbody>
      </table>
      {/* Place the toast container just above the closing div of the project */}
      <ToastContainer />
    </div>
  );
}

export default DetailContact;