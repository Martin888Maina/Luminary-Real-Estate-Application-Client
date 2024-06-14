import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom/cjs/react-router-dom";
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faPinterest } from '@fortawesome/free-brands-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styling/Footer.css'; // Import CSS file

const Footer =()=>{
    return(
        // footer section
        <div className="Footer mt-5">
            {/* <h1>This is the footer section</h1> */}

            <div className="container mt-5">
                <div className="row">

                    {/* Install the react router dom package */}
                    {/* target="_blank" This code has been used to open a new tab on the browser */}
                    {/* First column */}
                    <div className="col">
                        {/* help center section */}
                            <div className="Help">
                                <h1>Help Center</h1>
                                <Link to="/GettingStarted">
                                    <p>Getting Started</p>
                                </Link>
                                {/* Frequently Asked Questions section */}
                                <Link to="/FAQ">
                                    <p>FAQ</p>
                                </Link>
                                {/* Property Listings section */}
                                <Link to="/PropertyListing" >
                                    <p>Property Listing</p>
                                </Link>
                                {/* Payment Information section */}
                                <Link to="/PaymentInformation">
                                    <p>Payment Information</p>
                                </Link>
                                {/* Account Management section */}
                                <Link to="/AccountManagement">
                                    <p>Account Management</p>
                                </Link>
                            </div>
                    </div>

                    {/* Second column */}
                    <div className="col">
                        {/* star Application section */}
                            <div className="Star">
                                    <h1>Star app</h1>
                                    {/* New Features section */}
                                    <Link to="/NewFeatures">
                                        <p>New Features</p>
                                    </Link>
                                    {/* Latest News Section */}
                                    <Link to="/LatestNews">
                                        <p>Latest News</p>
                                    </Link>
                                    {/* Careers section */}
                                    <Link to="/Careers">
                                        <p>Careers</p>
                                    </Link>
                                    {/* Gift Cards Section */}
                                    <Link to="/GiftCards">
                                        <p>Gift Cards</p>
                                    </Link>
                            </div>        
                    </div>


                    {/* Third column */}
                    <div className="col">
                        {/* Support Section */}
                            <div className="Support">
                                    <h1>Support</h1>
                                    {/* Anti-Discrimination section */}
                                    <Link to="/AntiDiscrimination">
                                        <p>Anti-Discrimination</p>
                                    </Link>
                                    {/* Disability Section */}
                                    <Link to="/DisabilitySupport">
                                        <p>Disability Support</p>
                                    </Link>
                                    {/* Cancellation section */}
                                    <Link to="/CancellationOptions">
                                        <p>Cancellation Options</p>
                                    </Link>
                                    {/* Cancellation section */}
                                    <Link to="/Report">
                                        <p>Report</p>
                                    </Link>
                                    
                            </div>        
                    </div>


                    {/* Fourth column */}
                    <div className="col">
                        {/* Hosting section */}

                            <div className="Hosting">
                                    <h1>Hosting</h1>
                                    {/* Community Forum section */}
                                    <Link to="/CommunityForums">
                                        <p>Community Forum</p>
                                    </Link>
                                    {/* Hosting responsibilities section */}
                                    <Link to="/HostingDuty">
                                        <p>Hosting Duty</p>
                                    </Link>
                                    {/* Hosting Resources section */}
                                    <Link to="/HostingResources">
                                        <p>Hosting Resources</p>
                                    </Link>
                                    {/* Post property section */}
                                    <Link to="/PostProperty">
                                        <p>Post Property</p>
                                    </Link>


                            </div>            
                    </div>


                     
                     {/* Fifth column */}
                     <div className="col">
                        {/* Explore section */}
                        {/* No need implementing the _blank target for the social media section of the code */}

                        <div className="Social">
                                    <h1>Explore</h1>

                                    {/* Facebook section */}
                                    <p>
                                        <a href="https://www.facebook.com/">
                                        <FontAwesomeIcon icon={faFacebook} />
                                            {'\u00A0'}
                                            <span className="Facebook">Facebook</span>
                                        </a>
                                    </p>

                                    {/* Twitter section */}
                                    <p>
                                        <a href="https://twitter.com/i/flow/login?redirect_after_login=%2Fsettings%2Faccount%3Flang%3Den">
                                        <FontAwesomeIcon icon={faTwitter} />
                                            {'\u00A0'}
                                            <span className="Tweet">Twitter</span>
                                        </a>
                                    </p>

                                    {/* Instagram section */}
                                    <p>
                                        <a href="https://www.instagram.com/">
                                        <FontAwesomeIcon icon={faInstagram} />
                                            {'\u00A0'}
                                            <span className="Instagram">Instagram</span>
                                        </a>
                                    </p>

                                    {/* Pinterest Section */}
                                    <p>
                                        <a href="https://www.pinterest.com/login/">
                                        <FontAwesomeIcon icon={faPinterest} />
                                            {'\u00A0'}
                                            <span className="Pinterest">Pinterest</span>
                                        </a>
                                    </p>

                                    {/* Whatsapp section */}
                                    <p>
                                        <a href="https://www.whatsapp.com/">
                                        <FontAwesomeIcon icon={faWhatsapp} />
                                            {'\u00A0'}
                                            <span className="Whatsapp">Whatsapp</span>
                                        </a>  
                                    </p>
                                </div>

                        </div>        

                </div>

            </div>
        </div>
    )
}

export default Footer;