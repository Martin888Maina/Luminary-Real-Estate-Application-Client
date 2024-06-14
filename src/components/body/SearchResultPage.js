import React from "react";
import { Link, useHistory } from "react-router-dom";

const SearchResultPage = ({ location }) => {
    const history = useHistory();
    const { searchResults } = location.state;

    const handleVerification = (combine_id) => {
        // Redirect to the Cart page with the selected combine_id
        history.push(`/CombineId/${combine_id}`);
    };

    // Function to chunk array into smaller arrays with a maximum length
    const chunkArray = (arr, chunkSize) => {
        return Array.from({ length: Math.ceil(arr.length / chunkSize) }, (_, index) =>
            arr.slice(index * chunkSize, (index + 1) * chunkSize)
        );
    };

    // Chunk search results into rows with a maximum of 4 cards per row
    const rows = chunkArray(searchResults, 4);

    return (
        <div>
            {/* <h2>Search Results</h2> */}
            <div className="search-results-container">
                {/* Display search results */}
                {rows.map((row, rowIndex) => (
                    <div key={rowIndex} className="row justify-content-center mt-4">
                        {row.map((result, index) => (
                            <div key={index} className="card search-result p-2 col-lg-3 col-md-6 mb-4">
                                <Link to="#" className="card-link" onClick={() => handleVerification(result.combine_id)} style={{ color: 'black',  textDecoration: 'none' }}>
                                    <img src={result.file_url} className="card-img-top mx-auto" alt={result.location} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                                    <div className="card-body">
                                        <h5 className="card-title">Location: {result.location}</h5>
                                        <p className="card-text">Amount: {result.amount}</p>
                                        <p className="card-text">Start Date: {new Date(result.startDate).toISOString().split('T')[0]}</p>
                                        <p className="card-text">End Date: {new Date(result.endDate).toISOString().split('T')[0]}</p>
                                        <p className="card-text">Category: {result.category}</p>
                                        <p className="card-text">Listing ID: {result.combine_id}</p>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SearchResultPage;
