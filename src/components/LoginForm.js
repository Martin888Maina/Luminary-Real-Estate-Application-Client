import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styling/LoginForm.css";
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import { useAuth } from "../context/AuthContext";

const LoginForm = () => {
  const history = useHistory();
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const { updateAccessToken, redirectUrl, clearRedirectUrl } = useAuth();

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const submitLogin = (e) => {
    e.preventDefault();

    if (!data.email.trim() || !data.password.trim()) {
      toast.error("Please fill out all fields.", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000,
      });
      return;
    }

    if (!isValidEmail(data.email)) {
      toast.error("The entered email is not valid.", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000,
      });
      return;
    }

    axios
      .post("http://localhost:4000/Register/login", data, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        if (res.status === 200) {
          const { accessToken, refreshToken, role } = res.data;

          sessionStorage.setItem("access_token", accessToken);
          sessionStorage.setItem("refresh_token", refreshToken);
          updateAccessToken(accessToken); // Update token in context

          // Redirect to the saved URL or fallback to role-based pages
          if (redirectUrl) {
            history.push(redirectUrl);
            clearRedirectUrl();
          } else if (role === "admin") {
            history.push("./AdminPanel");
          } else if (role === "user") {
            history.push("/");
          } else if (role === "owner") {
            history.push("./OwnerDashboard");
          } else {
            console.error("Unexpected user role:", role);
          }

          Swal.fire({
            icon: 'success',
            title: 'Login Successful',
            text: 'User Login successful',
            confirmButtonText: 'OK',
          });

          setData({
            email: "",
            password: "",
          });
        }
      })
      .catch((err) => {
        // console.error("Error occurred while logging in:", err);

        toast.error("An error occurred while logging in.", {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 3000,
        });
      });
  };

  return (
    <div className="login-container mt-5 mb-5">
      <h2 className="text-info mt-5 mb-5">LOGIN FORM</h2>
      <Form onSubmit={submitLogin} className="login-form">
        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            name="email"
            value={data.email}
            onChange={handleChange}
            placeholder="Email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3 position-relative">
          <Form.Control
            type={showPassword ? "text" : "password"}
            name="password"
            value={data.password}
            onChange={handleChange}
            placeholder="Password"
            required
          />
          <span
            className="password-toggle-icon"
            onClick={toggleShowPassword}
            style={{
              position: 'absolute',
              right: '10px',
              top: '50%',
              transform: 'translateY(-50%)',
              cursor: 'pointer',
              fontSize: '1.2rem',
            }}
          >
            {showPassword ? '🙈' : '👁️'}
          </span>
        </Form.Group>

        <Button variant="success" type="submit">
          Login
        </Button>

        <div className="mt-3">
          <Link to="./ForgotPassword" className="forgot-password">
            Forgot your password?
          </Link>
        </div>
      </Form>

      <div className="register-section mt-5">
        <p>Not Registered?</p>
        <Link to="./RegisterForm" className="register-link">
          Register an Account
        </Link>
      </div>

      <ToastContainer />
    </div>
  );
};

export default LoginForm;

