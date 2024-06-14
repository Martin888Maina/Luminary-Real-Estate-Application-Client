import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import '../styling/SearchBar.css'; // Import your custom styling for the search bar if necessary
import axios from 'axios'; // Import axios for making HTTP requests
import { useHistory } from "react-router-dom";

const SearchBar = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const history = useHistory();

    // Handle input change
    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    };

    // Handle form submit
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            if (searchTerm.trim() !== '') { // Check if search term is not empty
                // Make a GET request to the backend search endpoint with the search term
                const response = await axios.get(`http://localhost:4000/Combine/searchCombine?searchTerm=${searchTerm}`);
                history.push({
                    pathname: '/Searchresult',
                    state: { searchResults: response.data }
                });
            } else {
                // If search term is empty, set searchResults to an empty array
                history.push({
                    pathname: '/Searchresult',
                    state: { searchResults: [] }
                });
            }
        } catch (error) {
            console.error('Error searching:', error);
        }
    };

    return (
        <div className="Search-bar">
            <form onSubmit={handleSubmit}>
                <div className="input-group">
                    {/* Input field for text search */}
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Search for Rentals, Land & Apartments" 
                        aria-label="Search" 
                        aria-describedby="basic-addon2" 
                        value={searchTerm}
                        onChange={handleChange}
                    />
                    <div className="input-group-append">
                        <span className="input-group-text" onClick={handleSubmit} style={{ cursor: "pointer" }}>
                            <FontAwesomeIcon icon={faSearch} />
                        </span>  
                    </div>
                </div>
            </form>
        </div>
    );
}

export default SearchBar;
