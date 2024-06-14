import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Button, Form, Modal } from 'react-bootstrap';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useHistory } from 'react-router-dom';

const UpdateData = () => {
  
  const history = useHistory();

  const { id } = useParams();
  const [contact, setContact] = useState({
    email: '',
    password: '',
    role: '',
  });
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {

    // Validate the id format before making the request
    //The following checks if the string consists of one or more digits.
    //If ID format is not a valid numeric format then an error message will be displayed.

    if ( !/^\d+$/.test (id))  {
      toast.error('Invalid contact id format.Please enter a valid numeric ID', {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000,
      });
    }

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
          toast.success('The Contact Record has been Retrieved Successfully', {
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

  const handleUpdate = async () => {
    try {
      const token = sessionStorage.getItem('access_token');
      console.log(contact);
  
      await axios.patch(`http://localhost:4000/Register/updateUsers/${id}`, contact, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });

      toast.success('The Contact Record has been Updated Successfully', {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000,
      });

      //code to redirect user to the landing page after successful update of contact
      history.push('/')

    } catch (error) {
      toast.error('An Error occurred while Updating the Record.', {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000,
      });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact((prev) => ({ ...prev, [name]: value }));
  };

  const handleShowModal =()=>{
    setShowModal(true);
  }

  const handleCloseModal =()=>{
    setShowModal(false); 
  }

  return (
    <div className="container text-center">
      <h1>UPDATE CONTACT RECORD</h1>

      {contact && (
        <Form>
  
          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control type="text" name="email" value={contact.email || ''} onChange={handleChange} />
          </Form.Group>

          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" name="password" value={contact.password || ''} onChange={handleChange} />
          </Form.Group>

          <Form.Group>
            <Form.Label>Role</Form.Label>
            <Form.Control type="text" name="role" value={contact.role || ''} onChange={handleChange} />
          </Form.Group>

          <Button onClick={handleShowModal} className="mt-3" variant="primary">
            Update
          </Button>


          {/* Modal Section */}
          <Modal show={showModal} onHide={handleCloseModal}>
            {/* Header section */}
            <Modal.Header closeButton>
                <Modal.Title>
                    Update Contact
                </Modal.Title>
            </Modal.Header>
            {/* Body Section */}
            <Modal.Body>
                <p>
                    Are you sure you want to update this contact?
                </p>
            </Modal.Body>

            {/* Footer Section */}
            <Modal.Footer>

                <Button variant="secondary" onClick={handleCloseModal}>
                  Close
                </Button>

                <Button variant="warning" onClick={handleUpdate}>
                  Save Changes
                </Button>

            </Modal.Footer>

          </Modal>
        </Form>
      )}

      {/* Place the toast container just above the closing div of the project */}
      <ToastContainer />
    </div>
  );
};


export default UpdateData;