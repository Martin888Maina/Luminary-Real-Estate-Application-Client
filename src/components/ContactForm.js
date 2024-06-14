import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import Select from 'react-select';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './styling/ContactForm.css'; // Import custom CSS for styling

const ContactForm = () => {
    const history = useHistory();

    const [data, setData] = useState({
        firstname: "",
        lastname: "",
        email: "",
        telephone: "",
        message: "",
        selectedCombine: null
    });

    const [combines, setCombines] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:4000/Combine/allCombine')
            .then(res => {
                setCombines(res.data.map(combine => ({
                    value: combine.combine_id,
                    label: `Listing ID: ${combine.combine_id} - Listing Category: ${combine.category} - Listing Location: ${combine.location}`
                })));
            })
            .catch(err => {
                console.error('Error fetching combines:', err);
            });
    }, []);

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    }

    const handleCombineSelect = (combineId) => {
        setData({ ...data, selectedCombine: combineId });
    }

    const submitContact = (e) => {
        e.preventDefault();

        const token = sessionStorage.getItem("access_token");

        for (const key in data) {
            if (!data[key] && key !== 'selectedCombine') {
                toast.error("Please fill out all fields.", {
                    position: toast.POSITION.TOP_LEFT,
                    autoClose: 3000,
                });
                return;
            }
        }

        if (!isValidEmail(data.email)) {
            toast.error("Please enter a valid email address.", {
                position: toast.POSITION.TOP_LEFT,
                autoClose: 3000,
            });
            return;
        }
        if (!isValidFirstname(data.firstname)) {
            toast.error("Please enter a valid firstname.", {
                position: toast.POSITION.TOP_LEFT,
                autoClose: 3000,
            });
            return;
        }
        if (!isValidLastname(data.lastname)) {
            toast.error("Please enter a valid lastname.", {
                position: toast.POSITION.TOP_LEFT,
                autoClose: 3000,
            });
            return;
        }
        if (!isValidTelephone(data.telephone)) {
            toast.error("Please enter a valid telephone number.", {
                position: toast.POSITION.TOP_LEFT,
                autoClose: 3000,
            });
            return;
        }
        if (!isValidMessage(data.message)) {
            toast.error("Please enter a valid message.", {
                position: toast.POSITION.TOP_LEFT,
                autoClose: 3000,
            });
            return;
        }

        if (!data.selectedCombine) {
            toast.error("Please select a preferred listing.", {
                position: toast.POSITION.TOP_LEFT,
                autoClose: 3000,
            });
            return;
        }

        // Prepare data to send to the backend
        const postData = {
            contactDetails: {
                firstname: data.firstname,
                lastname: data.lastname,
                email: data.email,
                telephone: data.telephone,
                message: data.message,
                combine_id: data.selectedCombine, // Use the value from the selected option
                selectedCombineId: data.selectedCombine // Include selectedCombineId in the contactDetails object
            }
        };

        axios.post('http://localhost:4000/Notify/notifyListingOwner', postData, {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        })
        .then(res => {
            console.log('Email notification sent successfully:', res.data);
            toast.success('Email notification sent successfully.', {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 3000,
            });
        })
        .catch(err => {
            console.error('Error sending email notification:', err);
            toast.error('Failed to send email notification.', {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 3000,
            });
        });

        // Send data to backend to save to contacts table
        axios.post('http://localhost:4000/Contact/addContact', postData, {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        })
        .then(res => {
            console.log('Contact saved successfully:', res.data);
            toast.success('Contact saved successfully.', {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 3000,
            });
        })
        .catch(err => {
            console.error('Error saving contact:', err);
            toast.error('Failed to save contact.', {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 3000,
            });
        });

        setData({
            firstname: "",
            lastname: "",
            email: "",
            telephone: "",
            message: "",
            selectedCombine: null
        });

        history.push("/Paystack");
    };

    return (
        <div className="contact-container">
            <h2 className="text-info mt-5 mb-5">CONTACT FORM</h2>
            <Form onSubmit={submitContact}>
                <Form.Group className="mb-3">
                    <Form.Label>Firstname:</Form.Label>
                    <Form.Control type="text" name="firstname" value={data.firstname} onChange={handleChange} placeholder="Enter First Name" required />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Lastname:</Form.Label>
                    <Form.Control type="text" name="lastname" value={data.lastname} onChange={handleChange} placeholder="Enter Last Name" required />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Email:</Form.Label>
                    <Form.Control type="email" name="email" value={data.email} onChange={handleChange} placeholder="Enter Email Address" required />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Telephone:</Form.Label>
                    <Form.Control type="tel" name="telephone" value={data.telephone} onChange={handleChange} placeholder="Enter Telephone Number" required />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Message:</Form.Label>
                    <Form.Control as="textarea" rows={3} name="message" value={data.message} onChange={handleChange} placeholder="Enter Message" required />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Select Preferred Listing:</Form.Label>
                    <Select
                        options={combines}
                        value={combines.find(option => option.value === data.selectedCombine)}
                        onChange={option => handleCombineSelect(option.value)}
                        placeholder="Search and select listing..."
                    />
                </Form.Group>

                <Button variant="success" type="submit">Send</Button>

                <ToastContainer />
            </Form>
        </div>
    );
}

const isValidEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
};

const isValidFirstname = (firstname) => {
    const fnameRegex = /^[A-Za-z]{2,30}$/;
    return fnameRegex.test(firstname);
};

const isValidLastname = (lastname) => {
    const lnameRegex = /^[A-Za-z]{2,30}$/;
    return lnameRegex.test(lastname);
};

const isValidTelephone = (telephone) => {
    const telephoneRegex = /^(\+[1-9]{1}[0-9]{3,14})?([0-9]{9,14})$/;
    return telephoneRegex.test(telephone);
};

const isValidMessage = (message) => {
    const messageRegex = /^[a-zA-Z0-9.,!?'\s]{1,500}$/;
    return messageRegex.test(message);
};

export default ContactForm;
