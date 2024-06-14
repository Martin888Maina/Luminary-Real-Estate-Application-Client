import React, { useState }  from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Star from "../../assets/images/Star.png";
import { Link, useHistory } from "react-router-dom";
import { Button } from "react-bootstrap";
import '../styling/Header.css';
import SearchBar from "../body/SearchBar"; // Import the SearchBar component
import SearchResultPage from "../body/SearchResultPage";

const Header =()=>{

 const [searchResults, setSearchResults] = useState([]);
 const history = useHistory();

    // Callback function to handle search results
    const handleSearch = (results) => {
        console.log('Search results:', results); 
        setSearchResults(results);

        if (results.length > 0) {
                history.push('/Searchresult');
                
              }
    };
    return(

        <div>
            {/* <h1>HEADER SECTION</h1> */}

                <div className="header-container d-flex flex-wrap flex-row align-items-center">

                    {/* Company Logo Section code */}
                    <div className="Logout">
                            <div className="Image">
                                <Link to="/">
                                    <img src={Star} alt="Star"  className="img-fluid" style={{height: 'auto', width: '200px'}}  />
                                </Link>
                            </div>
                    </div>

                    {/* Search Bar Section code */}
                    {/* <SearchBar  /> */}
                    <SearchBar onSearch={handleSearch} />

                    {/* Login, Register, Logout, Contact & Upload Button section code */}
                    <div className="button-container d-flex flex-wrap flex-row justify-content-center Buttons">
                        {/* Login Button */}
                            <Link to="/LoginForm"> 
                                    <Button type="button" style={{marginLeft: "10px", cursor:"pointer"}} className="btn btn-primary btn-lg">
                                            Login
                                    </Button>
                                
                            </Link>
                            
                        {/* Register Button */}
                            <Link to="/RegisterForm">
                                    <Button type="button" style={{marginLeft: "10px", cursor:"pointer"}}  className="btn btn-primary btn-lg">
                                            Register 
                                    </Button>   
                            </Link>

                        {/* Logout Button */}
                        <Link to="/Logout">
                                <Button type="button" style={{marginLeft: "10px", cursor:"pointer"}}  className="btn btn-primary btn-lg">
                                        Logout    
                                </Button>
                        </Link> 

                        {/* Contact Button */}
                        {/* <Link to="/ContactForm">
                                <Button type="button" style={{marginLeft: "10px", cursor:"pointer"}}  className="btn btn-primary btn-lg">
                                        Contact   
                                </Button>
                        </Link>   */}


                         {/* Upload Button */}
                         {/* <Link to="/UploadForm">
                                <Button type="button" style={{marginLeft: "10px", cursor:"pointer"}}  className="btn btn-primary btn-lg">
                                        Upload  
                                </Button>
                        </Link>  */}


                        {/* Admin Button */}
                        {/* <Link to="/DisplayCRUD">
                                <Button type="button" style={{marginLeft: "10px", cursor:"pointer"}}  className="btn btn-primary btn-lg">
                                        Admin 
                                </Button>
                        </Link>  */}

                        {/* User Button */}
                        {/* <Link to="/DisplayData">
                                <Button type="button" style={{marginLeft: "10px", cursor:"pointer"}}  className="btn btn-primary btn-lg">
                                        User
                                </Button>
                        </Link>  */}
                  
                    </div>


                </div>

                    {/* Render search results */}
                    {/* Render SearchResultPage if there are search results */}
                    {searchResults.length > 0 && <SearchResultPage searchResults={searchResults} />}

        </div>
    );

}

export default Header;




