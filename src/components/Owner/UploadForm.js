import { Button, Form } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../styling/UploadForm.css'; 
import { jwtDecode } from 'jwt-decode';

const UploadForm = () => {
    const [data, setData] = useState({
        location: "",
        startDate: "",
        endDate: "",
        amount: "",
        image: "",
        category:"",
        picture: null,
        document: null
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData(prevData => ({
            ...prevData,
            [name]: value
        }));
    }

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        const name = e.target.name;

        setData(prevData => ({
            ...prevData,
            [name]: file
        }));
    }

    const submitUpload = (e) => {
        e.preventDefault();

        const token = sessionStorage.getItem("access_token");

        if (!data.image && !data.picture) {
            toast.error('Please provide either Image URL or Picture.', {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 3000
            });
            return;
        }

        const decodedToken = jwtDecode(token);
        const owner_id = decodedToken.aud;
        console.log(owner_id);

        const formDataToSend = {
            location: data.location,
            startDate: data.startDate,
            endDate: data.endDate,
            amount: data.amount,
            image: data.image,
            category: data.category,
            picture:data.picture,
            document:data.document,
            owner_id: owner_id
        };

        // Log formDataToSend
        console.log("FormDataToSend:", formDataToSend);

        axios.post('http://localhost:4000/Notify/notifyListingUpload', formDataToSend, {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
            }
        })
        .then(res => {
            if (res.status === 200) {
                const { accessToken, refreshToken } = res.data;
                sessionStorage.setItem('access_token',  accessToken);
                sessionStorage.setItem('refresh_token', refreshToken);
            }
            toast.success('Information Upload successful', {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 3000
            });
        })
        .catch(err => {
            toast.error('An Error occurred while adding the Record.', {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 3000
            });
        });

        axios.post('http://localhost:4000/Combine/addCombine', formDataToSend, {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json', 
                
            }
        })
        .then(res => {
            if (res.status === 200) {
                const { accessToken, refreshToken } = res.data;
                sessionStorage.setItem('access_token',  accessToken);
                sessionStorage.setItem('refresh_token', refreshToken);
            }
            toast.success('Information Upload successful', {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 3000
            });
        })
        .catch(err => {
            toast.error('An Error occurred while adding the Record.', {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 3000
            });
        });


    }

    return (
        <div className="upload-container mt-5 mb-5">
            <h1>LISTING UPLOAD FORM</h1>
            <Form onSubmit={submitUpload}>

                {/* location section */}
                <Form.Group className="mt-3">
                    <Form.Label>Location:</Form.Label>
                    <Form.Control type="text" name="location" onChange={handleChange} placeholder="Please Enter the Location" required/>
                </Form.Group>

                {/* date range section */}
                <Form.Group className="mt-3">
                    <Form.Label>Date Range:</Form.Label>
                    <div className="d-flex">
                        <Form.Control type="date" name="startDate" onChange={handleChange} placeholder="Start Date" required/>
                        <span className="mx-2">-</span>
                        <Form.Control type="date" name="endDate" onChange={handleChange} placeholder="End Date" required/>
                    </div>
                </Form.Group>

                {/* Amount section */}
                <Form.Group className="mt-3">
                    <Form.Label>Amount:</Form.Label>
                    <Form.Control type="number" name="amount" onChange={handleChange} placeholder="Please Enter the Amount" required/>
                </Form.Group>

                {/* Image URL link section */}
                <Form.Group className="mt-3">
                    <Form.Label>Image URL:</Form.Label>
                    <Form.Control type="text" name="image" onChange={handleChange} placeholder="Please Enter the Image URL" />
                </Form.Group>

                {/* Category section */}
                <Form.Group className="mt-3">
                    <Form.Label>Category:</Form.Label>
                    <Form.Control type="text" name="category" onChange={handleChange} placeholder="Please Enter the Listing Category" required/>
                </Form.Group>

                  {/* Image file */}
                <Form.Group className="mt-3">
                     <Form.Label>Picture:</Form.Label>
                    <Form.Control type="file" name="picture" onChange={handleFileChange}  placeholder ="Please Enter the Image"   accept=".jpeg, .jpg, .png" />
                </Form.Group>

                {/* Document file section */}
                <Form.Group className="mt-3">
                    <Form.Label>Document:</Form.Label>
                    <Form.Control type="file" name="document" onChange={handleFileChange} placeholder ="Please Enter the Document" accept=".pdf,.doc,.docx" />
                </Form.Group>

                <Button variant="success" type="submit" className="mt-3">Send</Button>
                <ToastContainer/>
            </Form>   
        </div>
    );
}

export default UploadForm;



