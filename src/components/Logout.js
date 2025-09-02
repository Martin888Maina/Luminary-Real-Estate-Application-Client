import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styling/LogoutPage.css';
import { Button, Alert } from "react-bootstrap";

const Logout = () => {
    const history = useHistory();
    const [isLoggingOut, setIsLoggingOut] = useState(false);
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleLogout = async () => {
        setIsLoggingOut(true);
        setErrorMessage('');

        try {
            const accessToken = sessionStorage.getItem('access_token');
            
            if (accessToken) {
                const response = await axios.post(
                    'http://localhost:4000/Register/logout',
                    {},
                    {
                        headers: {
                            'Authorization': `Bearer ${accessToken}`,
                            'Content-Type': 'application/json'
                        }
                    }
                );

                if (response.status === 200) {
                    setMessage('Logged out successfully');
                }
            } else {
                setErrorMessage('No access token found. You are already logged out.');
            }
        } catch (error) {
            const errorMsg = error.response?.data?.error?.message || 'An error occurred during logout. Please try again.';
            setErrorMessage(errorMsg);
            console.error('Logout error:', error);
        }

        // Always clear client-side storage
        sessionStorage.removeItem('access_token');
        sessionStorage.removeItem('refresh_token');
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
        sessionStorage.clear();

        // Redirect after a delay
        setTimeout(() => {
            history.push('/');
        }, 1000);

        setIsLoggingOut(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        handleLogout();
    };

    return (
        <div className="logout-container">
            <div className="logout-content">
                <div className="logout-icon">
                    <i className="fas fa-door-open"></i>
                </div>
                <h1 className="logout-heading">Ready to Leave?</h1>
                <p className="text-muted">Please confirm that you want to log out of your account.</p>
                
                {message && (
                    <Alert variant="success" className="mb-3">
                        <i className="fas fa-check-circle me-2"></i>
                        {message}
                    </Alert>
                )}
                {errorMessage && (
                    <Alert variant="danger" className="mb-3">
                        <i className="fas fa-exclamation-circle me-2"></i>
                        {errorMessage}
                    </Alert>
                )}

                <form onSubmit={handleSubmit}>
                    <div className="button">
                        <Button 
                            type="submit" 
                            className={`logout-button btn-lg w-100 ${isLoggingOut ? 'logging-out' : ''}`}
                            disabled={isLoggingOut}
                        >
                            {isLoggingOut ? (
                                <>
                                    <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                                    Logging Out...
                                </>
                            ) : (
                                <>
                                    <i className="fas fa-sign-out-alt me-2"></i>
                                    Logout
                                </>
                            )}
                        </Button>
                    </div>
                </form>
                
                <p className="footer-text">© {new Date().getFullYear()} Your App Name</p>
            </div>
            
            {/* Include Font Awesome for icons */}
            <script src="https://kit.fontawesome.com/a076d05399.js" crossOrigin="anonymous"></script>
        </div>
    );
};

export default Logout;