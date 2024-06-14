import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';


const DisplayData =()=>{
    // State to store the fetched data
    const [contacts, setContacts] = useState([]);

  // Function to fetch data from the server
  const retrieveData = () => {

    // At this point we will include the code that passes the token to the header section
    // This code will be used by the axios code with the header and authorization.
    const token = sessionStorage.getItem("access_token")


    axios.get('http://localhost:4000/Register/users', {
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'application/json',
      },
      
    })

      .then(res => {
        //Add a toast here for successful retrieval of data.
          toast.success('Contact Records Displayed Successfully', {
          position: toast.POSITION.TOP_RIGHT,
          autoClose:3000,
      });
        // Update the state with the fetched data
        setContacts(res.data);
      })

      .catch(err => {
        toast.error('An Error occured while displaying the Records.', {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 3000,
        });

      });  


  }

  // Use useEffect to fetch data when the retriving information from the
  useEffect(() => {
    retrieveData();
  }, []); // Empty dependency array ensures the effect runs only once

  // []); // In the event I am using an id for get, I will need o pass ID as a dependency in the floowing box section.


    return(
        <div className="container">
            {/* Bootstrap Table */}
            <table className="table table-borderless mt-5 mb-5" style={{ margin: 'auto'}}>
                        {/* Table Head */}
                        <thead>
                                <tr>
                                    {/* <th>ID</th> */}
                                    <th scope="col">Number</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Password</th>
                                    <th scope="col">Role</th>
                                    <th scope="col">Actions</th>
                                    {/* Add more columns as needed */}
                                </tr>
                        </thead>
                        {/* Table Body */}
                        <tbody>
                                {contacts.map((contact, index) => (
                                    <tr key={contact.id}>
                                          {/* <td>{student.id}</td> */}
                                          <th scope="row">{index + 1}</th>
                                          <td>{contact.email}</td>
                                          <td>{contact.password}</td>
                                          <td>{contact.role}</td>
                                          <td>
                                              {/* Display only buttons for DELETE, UPDATE, and DETAILS */}
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
export default DisplayData;