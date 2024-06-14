import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Button, Form, Modal } from 'react-bootstrap';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useHistory } from 'react-router-dom';



const UpdateReport = () => { 

  const history = useHistory();

  const { report_id } = useParams();
  const [report, setReport] = useState({
    firstname: '',
    lastname: '',
    email: '',
    message: ''
  });
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {

    // Validate the id format before making the request
    //The following checks if the string consists of one or more digits.
    //If ID format is not a valid numeric format then an error message will be displayed.

    if ( !/^\d+$/.test (report_id))  {
      toast.error('Invalid report id format.Please enter a valid numeric ID', {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000,
      });
    }

    const extractData = async () => {
      try {
        const token = sessionStorage.getItem('access_token');
        //  const response = await axios.get(`http://localhost:4001/Student/studentId/` +id, {
        const response = await axios.get(`http://localhost:4000/Report/reportId/${report_id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        });

        const reportData = response.data;
        if (reportData) {
          toast.success('The Report Record has been Retrieved Successfully', {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 3000,
          });
          setReport(reportData);
        } else {
          toast.error('No report data found.', {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 3000,
          });
        }
      } catch (error) {
        console.log(error.message);
      }
    };

    extractData();
  }, [report_id]);

  const handleUpdate = async () => {
    try {
      const token = sessionStorage.getItem('access_token');
      // await axios.patch(`http://localhost:4001/Student/updateStudent/` +id, student, {
      await axios.patch(`http://localhost:4000/Report/updateReport/${report_id}`, report, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });

      toast.success('The Report Record has been Updated Successfully', {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000,
      });

      // window.location.href = '/mountain';
      //code to redirect user to the landing page after successfully submitting their report
      history.push('/');

    } catch (error) {
      toast.error('An Error occurred while Updating the Record.', {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000,
      });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setReport((prev) => ({ ...prev, [name]: value }));
  };

  const handleShowModal =()=>{
    setShowModal(true);
  }

  const handleCloseModal =()=>{
    setShowModal(false); 
  }

  return (
    <div className="container text-center">
      <h1>UPDATE REPORT RECORD</h1>

      {report && (
        <Form>
          <Form.Group>
            <Form.Label>First Name</Form.Label>
            <Form.Control type="text" name="firstname" value={report.firstname || ''} onChange={handleChange} />
          </Form.Group>

          <Form.Group>
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="text" name="lastname" value={report.lastname || ''} onChange={handleChange} />
          </Form.Group>

          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control type="text" name="email" value={report.email || ''} onChange={handleChange} />
          </Form.Group>
       
          <Form.Group>
            <Form.Label>Message</Form.Label>
            <Form.Control type="text" name="message" value={report.message || ''} onChange={handleChange} />
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

                <Button variant="warning" onclick={handleUpdate}>
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

export default UpdateReport;