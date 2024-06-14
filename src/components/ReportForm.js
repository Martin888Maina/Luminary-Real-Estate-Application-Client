import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './styling/ReportForm.css'; 

const Report = () => {
    const [data, setData] = useState({
        firstname: "",
        lastname: "",
        email: "",
        message: ""
    });

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const isValidFirstname = (firstname) => {
        const fnameRegex = /^[A-Za-z]{2,30}$/;
        return fnameRegex.test(firstname);
    };

    const isValidLastname = (lastname) => {
        const lnameRegex = /^[A-Za-z]{2,30}$/;
        return lnameRegex.test(lastname);
    };

    const isValidEmail = (email) => {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailRegex.test(email);
    };

    const isValidMessage = (message) => {
        const messageRegex = /^[a-zA-Z0-9.,!?'\s]{1,500}$/;
        return messageRegex.test(message);
    };

    const submitReport = (e) => {
        e.preventDefault();
        const token = sessionStorage.getItem("access_token");

        if (!data.firstname || !data.lastname || !data.email || !data.message) {
            toast.error("Please fill out all fields.", { position: toast.POSITION.TOP_LEFT, autoClose: 3000 });
            return;
        }

        if (!data.firstname.trim() || !data.lastname.trim() || !data.email.trim() || !data.message.trim()) {
            toast.error("Please fill out all fields correctly.", { position: toast.POSITION.TOP_LEFT, autoClose: 3000 });
            return;
        }

        if (!isValidFirstname(data.firstname)) {
            toast.error("The entered firstname is not valid.", { position: toast.POSITION.BOTTOM_CENTER, autoClose: 3000 });
            return;
        }

        if (!isValidLastname(data.lastname)) {
            toast.error("The entered lastname is not valid.", { position: toast.POSITION.BOTTOM_LEFT, autoClose: 3000 });
            return;
        }

        if (!isValidEmail(data.email)) {
            toast.error("The entered email address is not valid.", { position: toast.POSITION.BOTTOM_RIGHT, autoClose: 3000 });
            return;
        }

        if (!isValidMessage(data.message)) {
            toast.error("The entered message is not valid.", { position: toast.POSITION.TOP_RIGHT, autoClose: 3000 });
            return;
        }

        axios.post('http://localhost:4000/Report/addReport', data, {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json', //remember to change format when dealing with non json data
            },
        })
        .then(res => {
            toast.success('New Report Record Added Successfully', { position: toast.POSITION.TOP_RIGHT, autoClose: 3000 });
            setData({
                firstname: "",
                lastname: "",
                email: "",
                message: ""
            });
        })
        .catch(err => {
            toast.error('An Error occurred while adding the Record.', { position: toast.POSITION.TOP_RIGHT, autoClose: 3000 });
        });
    };

    return (
        <div className="Report container d-flex flex-wrap justify-content-center border border-dark-subtle mt-5 mb-5">
            <form onSubmit={submitReport}>
                <Form.Group className="mt-3">
                    <Form.Label>Firstname:</Form.Label>
                    <Form.Control type="text" name="firstname" value={data.firstname} onChange={handleChange} placeholder="Please Enter the First Name" required />
                </Form.Group>

                <Form.Group className="mt-3">
                    <Form.Label>Lastname:</Form.Label>
                    <Form.Control type="text" name="lastname" value={data.lastname} onChange={handleChange} placeholder="Please Enter the Last Name" required />
                </Form.Group>

                <Form.Group className="mt-3">
                    <Form.Label>Email:</Form.Label>
                    <Form.Control type="email" name="email" value={data.email} onChange={handleChange} placeholder="Please Enter the Email Address" required />
                </Form.Group>

                <Form.Group className="mt-3">
                    <Form.Label>Message:</Form.Label>
                    <Form.Control as="textarea" rows={3} name="message" value={data.message} onChange={handleChange} placeholder="Please Enter the Concern" required />
                </Form.Group>

                <Button variant="danger" type="submit" className="btn btn-danger mb-5">Report</Button>
                <ToastContainer />
            </form>
        </div>
    );
};

export default Report;
