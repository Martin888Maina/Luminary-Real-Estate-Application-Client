import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Button, Modal } from 'react-bootstrap';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useHistory } from 'react-router-dom';

const DeleteData = () => {

  const history = useHistory();

  const { id } = useParams();
  const [contact, setContact] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const extractData = async () => {
      try {
        const token = sessionStorage.getItem('access_token');
        const response = await axios.get(`http://localhost:4000/Register/userId/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        });

        const contactData = response.data;
        if (contactData) {
          toast.success('Contact Record Retrieved Successfully', {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 3000,
          });
          setContact(contactData);
        } else {
          toast.error('No contact data found.', {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 3000,
          });
        }
      } catch (error) {
        console.log(error.message);
      }
    };

    extractData();
  }, [id]);

  const handleDelete = async () => {
    try {
      const token = sessionStorage.getItem('access_token');
      await axios.delete(`http://localhost:4000/Register/deleteUsers/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });

      toast.success('The Contact Record has been Deleted Successfully', {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000,
      });

      //code to redirect user to the landing page after successful deletion of contact.
      history.push('/');

    } catch (error) {
      toast.error('An Error occurred while Deleting the Record.', {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000,
      });
    }
  };

  const handleShowModal =()=>{
    setShowModal(true);
  }

  const handleCloseModal =()=>{
    setShowModal(false); 
  }

  return (
    <div className="container text-center">
      <h1>DELETE CONTACT RECORDS</h1>

      {contact && (
        <article>
          {/* Bootstrap Table */}
          <table className="table table-borderless mt-5 mb-5" style={{ margin: 'auto' }}>
            {/* Table Body */}
            <tbody>
             
              <tr>
                <th scope="col">Email</th>
                <td>{contact.email}</td>
              </tr>

              <tr>
                <th scope="col">Password</th>
                <td>{contact.password}</td>
              </tr>

              <tr>
                <th scope="col">Role</th>
                <td>{contact.role}</td>
              </tr>
            </tbody>
          </table>

          <Button onClick={handleShowModal} className="mt-3" variant="danger">
            Delete
          </Button>

          {/* Modal Section */}
          <Modal show={showModal} onHide={handleCloseModal}>
            {/* Header section */}
            <Modal.Header closeButton>
                <Modal.Title>
                    Delete Contact
                </Modal.Title>
            </Modal.Header>
            {/* Body Section */}
            <Modal.Body>
                <p>
                    Are you sure you want to delete this contact?
                </p>
            </Modal.Body>

            {/* Footer Section */}
            <Modal.Footer>

                <Button variant="secondary" onClick={handleCloseModal}>
                  Close
                </Button>

                <Button variant="danger" onClick={handleDelete}>
                  Save Changes
                </Button>

            </Modal.Footer>

          </Modal>
          
        </article>
      )}

      {/* Place the toast container just above the closing div of the project */}
      <ToastContainer />
    </div>
  );
};

export default DeleteData;