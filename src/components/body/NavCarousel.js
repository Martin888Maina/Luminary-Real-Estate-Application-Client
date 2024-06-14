// Icons implemented in the project
import mountain         from "../../assets/images/mountain.png";
import ocean            from "../../assets/images/ocean.png";
import lake             from "../../assets/images/lake.png";
import island           from "../../assets/images/island.png";
import tent             from "../../assets/images/tent.png";
import desert           from "../../assets/images/desert.png";
import valley           from "../../assets/images/valley.png";
import farm             from "../../assets/images/farm.png";
import hill             from "../../assets/images/hills.png";
import city             from "../../assets/images/city.png";
import mansion          from "../../assets/images/mansion.png";
import contemporary     from "../../assets/images/contemporary.png";
import modern           from "../../assets/images/modern.png";
import colonial         from "../../assets/images/colonial.png";
import green            from "../../assets/images/green.png";


// Slick functionality
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from "react-router-dom";
import React from "react";
import '../styling/Carousel.css';

//importing bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, ButtonGroup, Dropdown } from "react-bootstrap";


const NavCarousel = ()=>{

    //Insert the carousel function here
    const settings = {
        infinite: true,//ensures that the carousel does not stop
        speed: 1000,//controls the speed of the carousel
        slidesToShow: 8,//Determines the number of icons to be displayed on the carousel
        slidesToScroll: 1,//Determines the number of icons to move when the carousel is in motion
        autoplay: true,//Ensures that the carousel automatically moves to the next icon
        autoplaySpeed: 5000,//Determines the speed at which the carousel moves to the next icon
        responsive: [ //makes the code responsive in nature
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    };

    
    return(
                <nav className="container d-flex flex wrap mt-5 mb-5">
 
                        <div className="Icons">
                            
                            {/* Slider tag */}
                             <Slider {...settings}>
                                
                              <div> 
                                    {/* Mountain region property */}
                                    <Link to="/" style={{textDecoration: 'none'}}>
                                        <div className="d-flex flex-column align-items-center">
                                            <img
                                                src={mountain}
                                                alt="Mountain"
                                                style={{ width: '3em', height: '3em', marginBottom: '5px' }}
                                            /> 
                                            <p className="mb-0" style={{ color: 'black' }}>Mountain</p>

                                        </div>
                                    </Link>

                             </div> 

                            <div>       

                                   {/* Ocean region property */}
                                   <Link to="/Ocean" style={{textDecoration: 'none'}}>
                                        <div className="d-flex flex-column align-items-center">
                                            <img
                                                src={ocean}
                                                alt="Ocean"
                                                style={{ width: '3em', height: '3em', marginBottom: '5px' }}
                                            /> 
                                            <p className="mb-0" style={{ color: 'black' }}>Ocean</p>

                                        </div>
                                    </Link>

                             </div> 


                            <div>                               

                                     {/* Lake region property */}
                                     <Link to="/Lake" style={{textDecoration: 'none'}}>
                                        <div className="d-flex flex-column align-items-center">
                                            <img
                                                src={lake}
                                                alt="Lake"
                                                style={{ width: '3em', height: '3em', marginBottom: '5px' }}
                                            /> 
                                            <p className="mb-0" style={{ color: 'black' }}>Lake</p>

                                        </div>
                                    </Link>

                              </div> 


                             <div>
                                    {/* Island region property */}
                                    <Link to="/Island" style={{textDecoration: 'none'}}>
                                        <div className="d-flex flex-column align-items-center">
                                            <img
                                                src={island}
                                                alt="Island"
                                                style={{ width: '3em', height: '3em', marginBottom: '5px' }}
                                            /> 
                                            <p className="mb-0" style={{ color: 'black' }}>Island</p>

                                        </div>
                                    </Link>

                             </div>   


                             <div>
                                     {/* Camping/Tent region property */}
                                     <Link to="/Tent" style={{textDecoration: 'none'}}>
                                        <div className="d-flex flex-column align-items-center">
                                            <img
                                                src={tent}
                                                alt="Tent"
                                                style={{ width: '3em', height: '3em', marginBottom: '5px' }}
                                            /> 
                                            <p className="mb-0" style={{ color: 'black' }}>Tent</p>

                                        </div>
                                    </Link>

                           </div>

                            <div>

                                    {/* Desert region property */}
                                    <Link to="/Desert" style={{textDecoration: 'none'}}>
                                        <div className="d-flex flex-column align-items-center">
                                            <img
                                                src={desert}
                                                alt="desert"
                                                style={{ width: '3em', height: '3em', marginBottom: '5px' }}
                                            /> 
                                            <p className="mb-0" style={{ color: 'black' }}>Desert</p>

                                        </div>
                                    </Link>

                            </div>   


                            <div>
                                    {/*  Valley region property */}
                                    <Link to="/Valley" style={{textDecoration: 'none'}}>
                                        <div className="d-flex flex-column align-items-center">
                                            <img
                                                src={valley}
                                                alt="Valley"
                                                style={{ width: '3em', height: '3em', marginBottom: '5px' }}
                                            /> 
                                            <p className="mb-0" style={{ color: 'black' }}>Valley</p>

                                        </div>
                                    </Link>

                             </div>  



                             <div>

                                     {/*  farm region property */}
                                     <Link to="/Farmland" style={{textDecoration: 'none'}}>
                                        <div className="d-flex flex-column align-items-center">
                                            <img
                                                src={farm}
                                                alt="Farmland"
                                                style={{ width: '3em', height: '3em', marginBottom: '5px' }}
                                            /> 
                                            <p className="mb-0" style={{color: 'black' }}>Farmland</p>

                                        </div>
                                    </Link>

                             </div>


                             <div>
                                    {/*  Hill region property */}
                                    <Link to="/Hill" style={{textDecoration: 'none'}}>
                                        <div className="d-flex flex-column align-items-center">
                                            <img
                                                src={hill}
                                                alt="Hill"
                                                style={{ width: '3em', height: '3em', marginBottom: '5px' }}
                                            /> 
                                            <p className="mb-0" style={{ color: 'black' }}>Hill</p>

                                        </div>
                                    </Link>
                             </div> 


                            <div>

                                   {/*  City region property */}
                                    <Link to="/City" style={{textDecoration: 'none'}}>
                                        <div className="d-flex flex-column align-items-center">
                                            <img
                                                src={city}
                                                alt="City"
                                                style={{ width: '3em', height: '3em', marginBottom: '5px' }}
                                            /> 
                                            <p className="mb-0" style={{ color: 'black' }}>City</p>

                                        </div>
                                    </Link>

                             </div> 



                           <div>
                                    {/*  Mansion section */}
                                    <Link to="/Mansion" style={{textDecoration: 'none'}}>
                                        <div className="d-flex flex-column align-items-center">
                                            <img
                                                src={mansion}
                                                alt="Mansion"
                                                style={{ width: '3em', height: '3em', marginBottom: '5px' }}
                                            /> 
                                            <p className="mb-0" style={{ color: 'black' }}>Mansion</p>

                                        </div>
                                    </Link>

                           </div>

                             <div>

                                    {/*  Contemporary section */}
                                    <Link to="/Contemporary" style={{textDecoration: 'none'}}>
                                        <div className="d-flex flex-column align-items-center">
                                            <img
                                                src={contemporary}
                                                alt="Contemporary"
                                                style={{ width: '3em', height: '3em', marginBottom: '5px' }}
                                            /> 
                                            <p className="mb-0" style={{ color: 'black' }}>Contemporary</p>

                                        </div>
                                    </Link>

                             </div>



                            <div>
                                    {/*  Modern section */}
                                    <Link to="/Modern" style={{textDecoration: 'none'}}>
                                        <div className="d-flex flex-column align-items-center">
                                            <img
                                                src={modern}
                                                alt="Modern"
                                                style={{ width: '3em', height: '3em', marginBottom: '5px' }}
                                            /> 
                                            <p className="mb-0" style={{color: 'black' }}>Modern</p>

                                        </div>
                                    </Link>

                             </div>  



                             <div>

                                    {/* Colonial section */}
                                    <Link to="/Colonial" style={{textDecoration: 'none'}}>
                                        <div className="d-flex flex-column align-items-center">
                                            <img
                                                src={colonial}
                                                alt="Colonial"
                                                style={{ width: '3em', height: '3em', marginBottom: '5px' }}
                                            /> 
                                            <p className="mb-0" style={{ color: 'black' }}>Colonial</p>

                                        </div>
                                    </Link>

                             </div> 



                             <div>

                                     {/*  Green homes section */}
                                     <Link to="/Greenhome" style={{textDecoration: 'none'}}>
                                        <div className="d-flex flex-column align-items-center">
                                            <img
                                                src={green}
                                                alt="Greenhome"
                                                style={{ width: '3em', height: '3em', marginBottom: '5px' }}
                                            /> 
                                            <p className="mb-0" style={{ color: 'black' }}>Greenhome</p>

                                        </div>
                                    </Link>


                             </div> 
  

                             </Slider>                      
                            

                         </div>

                        
                        <div className="Nav-Button mb-5">
                      
                                            <Dropdown as={ButtonGroup} drop="down">
                                                        {/* Buy Button */}
                                                    <Button type="button primary" className="btn btn-primary btn-lg" style={{ marginLeft: "10px", cursor: "pointer" }}>Buy</Button>

                                                        <Dropdown.Toggle split type="btn btn-primary" id="dropdown-split-basic" />

                                                        <Dropdown.Menu>
                                                                <Dropdown.Item as={Link} to="/BuyCommercial">Commercial</Dropdown.Item>
                                                                <Dropdown.Item as={Link} to="/BuyResidential">Residential</Dropdown.Item>
                                                                <Dropdown.Item as={Link} to="/BuyLand">Land</Dropdown.Item> 
                                                        </Dropdown.Menu>

                                            </Dropdown>


                                            <Dropdown as={ButtonGroup} drop="down">

                                                        {/* Rent Button */}
                                                        <Button type="button primary" className="btn btn-primary btn-lg" style={{ marginLeft: "10px", cursor: "pointer" }}>Rent</Button>

                                                        <Dropdown.Toggle split variant="primary" id="dropdown-split-basic" />

                                                        <Dropdown.Menu>
                                                                <Dropdown.Item as={Link} to="/RentCommercial">Commercial</Dropdown.Item>
                                                                <Dropdown.Item as={Link} to="/RentResidential">Residential</Dropdown.Item>
                                                                <Dropdown.Item as={Link} to="/RentLand">Land</Dropdown.Item>
                                                        </Dropdown.Menu>

                                            </Dropdown>
                        </div>

                </nav>
        
     );

 }

 export default NavCarousel;



