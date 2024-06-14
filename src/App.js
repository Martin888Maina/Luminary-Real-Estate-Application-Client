import './App.css';
import React from 'react';
import {BrowserRouter as Router, Switch} from 'react-router-dom';
import { Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
// import ProtectedRoute from './context/ProtectedRoutes';

import LoginForm from './components/LoginForm';
import ContactForm from './components/ContactForm';
import RegisterForm from './components/RegisterForm';
import NavCarousel from './components/body/NavCarousel';
import ReportForm from './components/ReportForm';

import Logout from './components/Logout';

// CRUD OPERATION
import DisplayCRUD from './components/crud/combineCRUD/DisplayCRUD';
import DetailCRUD from './components/crud/combineCRUD/DetailCRUD';
import UpdateCRUD from './components/crud/combineCRUD/UpdateCRUD';
import DeleteCRUD  from './components/crud/combineCRUD/DeleteCRUD';

// USER CRUD OPERATION
import DeleteData  from './components/crud/registerCRUD/DeleteData';
import DetailData  from './components/crud/registerCRUD/DetailData';
import DisplayData from './components/Admin/DisplayData';
import UpdateData  from './components/crud/registerCRUD/UpdateData';

// DASHBOARDS
import AdminPanel     from './components/Admin/AdminPanel';
import OwnerDashboard from './components/Owner/OwnerDashboard';

// CONTACT CRUD SECTION
import DisplayContact from './components/crud/contactCRUD/DisplayContact';
import DetailContact from './components/crud/contactCRUD/DetailContact';
import UpdateContact from './components/crud/contactCRUD/UpdateContact';
import DeleteContact from './components/crud/contactCRUD/DeleteContact';

// REPORT CRUD SECTION
import DisplayReport from './components/crud/reportCRUD/DisplayReport';
import DetailReport from './components/crud/reportCRUD/DetailReport';
import UpdateReport from './components/crud/reportCRUD/UpdateReport';
import DeleteReport from './components/crud/reportCRUD/DeleteReport';

// Forgot password
import ForgotPassword from './components/ForgotPassword';
//Reset Password
import PasswordReset from './components/PasswordReset';

// Not found section
import NotFound from './components/NotFound';

// Footer section
import Footer from './components/body/Footer';

// Header section
import Header from './components/body/Header';

// Navcarousel section
import Navcarousel from './components/body/NavCarousel';

//SearchResultPage section
import SearchResultPage from './components/body/SearchResultPage';

// Help center section
import AccountManagement from './components/helpcenter/AccountManagement';
import FAQ from './components/helpcenter/FAQ';
import GettingStarted from './components/helpcenter/GettingStarted';
import PaymentInformation from './components/helpcenter/PaymentInformation';
import PropertyListing from './components/helpcenter/PropertyListing';

// Hosting section
import CommunityForums from './components/hosting/CommunityForums';
import HostingDuty from './components/hosting/HostingDuty';
import HostingResources from './components/hosting/HostingResources';
import PostProperty from './components/hosting/PostProperty';

// Luminaryapp section
import Careers from './components/luminaryapp/Careers';
import GiftCards from './components/luminaryapp/GiftCards';
import LatestNews from './components/luminaryapp/LatestNews';
import NewsFeatures from './components/luminaryapp/NewFeatures';

// Support section
import AntiDiscrimination from './components/support/AntiDiscrimination';
import CancellationOptions from './components/support/CancellationOptions';
import DisabilitySupport from './components/support/DisabilitySupport';
import Report from './components/support/Report';


//user section
import Mountain from './components/user/Mountain';
import Ocean from './components/user/Ocean';
import Lake from './components/user/Lake';
import Tent from './components/user/Tent';
import Desert from './components/user/Desert';
import Valley from './components/user/Valley';
import Farmland from './components/user/Farmland';
import Hill from './components/user/Hill';
import City from './components/user/City';
import Mansion from './components/user/Mansion';
import Contemporary from './components/user/Contemporary';
import Modern from './components/user/Modern';
import Colonial from './components/user/Colonial';
import Greenhome from './components/user/Greenhome';
import Island from './components/user/Island';

// buy section
import BuyCommercial from './components/user/Buy/BuyCommercial';
import BuyResidential from './components/user/Buy/BuyResidential';
import BuyLand from './components/user/Buy/BuyLand';

// rent section
import RentCommercial from './components/user/Rent/RentCommercial';
import RentResidential from './components/user/Rent/RentResidential';
import RentLand from './components/user/Rent/RentLand';

//owner section
import UploadForm from './components/Owner/UploadForm';

// Add to cart section
import Cart from './components/user/Cart';

// Payment gateway
import Paystack from './components/Paystack';



function App() {
  return (
   <AuthProvider>
    <Router>
        <div className="App">
          <Header/>
          <NavCarousel/>
            <Switch>  
                  {/* Forms */}
                  <Route path="/RegisterForm"                     component={RegisterForm} />

                  <Route path="/LoginForm"                        component={LoginForm} />

                  <Route path="/ContactForm"                      component={ContactForm} />

                  <Route path="/ReportForm"                      component={ReportForm} />

                  {/* User section */}
                  {/* Landing page */}
                  <Route exact path="/"                  component={Mountain} />

                  <Route path="/Ocean"                            component={Ocean} />

                  <Route path="/Lake"                             component={Lake} />

                  <Route path="/Tent"                             component={Tent} />

                  <Route path="/Desert"                           component={Desert} />

                  <Route path="/Valley"                           component={Valley} />

                  <Route path="/Farmland"                         component={Farmland} />

                  <Route path="/Hill"                             component={Hill} />

                  <Route path="/City"                             component={City} />

                  <Route path="/Mansion"                          component={Mansion} />

                  <Route path="/Contemporary"                     component={Contemporary} />

                  <Route path="/Modern"                           component={Modern} />

                  <Route path="/Colonial"                         component={Colonial} />

                  <Route path="/Greenhome"                        component={Greenhome} />

                  <Route path="/Island"                           component={Island} />

                  {/* Add to cart section */}
                  <Route path="/CombineId/:combine_id"            component={Cart} />

                  {/* Paystack page */}
                  <Route path="/Paystack"                         component={Paystack} />

               
                  {/* Buy section */}
                  <Route path="/BuyCommercial"                     component={BuyCommercial} />

                  <Route path="/BuyResidential"                    component={BuyResidential} />

                  <Route path="/BuyLand"                           component={BuyLand} />

                  {/* Rent section */}

                  <Route path="/RentCommercial"                     component={RentCommercial} />

                  <Route path="/RentResidential"                    component={RentResidential} />

                  <Route path="/RentLand"                           component={RentLand} />

                 
                  {/* CRUD operations */}
                  <Route path="/DisplayData"                       component={DisplayData} />

                  <Route path="/deleteUsers/:id"                   component={DeleteData} />

                  <Route path="/userId/:id"                        component={DetailData} />

                  <Route path="/updateUsers/:id"                   component={UpdateData} />


                  {/* COMBINE CRUD operations */}
                  <Route path="/DisplayCRUD"                       component={DisplayCRUD} />

                  <Route path="/deleteCombine/:combine_id"         component={DeleteCRUD} />

                  <Route path="/combineId/:combine_id"             component={DetailCRUD} />

                  <Route path="/updateCombine/:combine_id"         component={UpdateCRUD} />


                  {/* Contact CRUD functionality */}
                  {/* Contact Section */}
                  <Route path="/components/ContactForm"                              component={ContactForm} />
                  
                  {/* Display contact section */}
                  <Route path="/components/crud/contactCRUD/DisplayContact"         component={DisplayContact} />

                  {/* Detail contact section  */}
                  <Route path="/contactId/:contact_id"                              component={DetailContact} />

                  {/* Update contact section*/}
                  <Route path="/updateContact/:contact_id"                          component={UpdateContact} />

                  {/* Delete contact section */}
                  <Route path="/deleteContact/:contact_id"                          component={DeleteContact} />


                  {/* REPORT SECTION */}
                  {/* Display report section */}
                  <Route path="/components/crud/reportCRUD/DisplayReport"         component={DisplayReport} />

                  {/* Detail report section  */}
                  <Route path="/reportId/:report_id"                              component={DetailReport} />

                  {/* Update report section*/}
                  <Route path="/updateReport/:report_id"                          component={UpdateReport} />

                  {/* Delete report section */}
                  <Route path="/deleteReport/:report_id"                          component={DeleteReport} />

                  {/* Additional functionalities */}
                  <Route path="/ForgotPassword"                     component={ForgotPassword} />

                  <Route path="/PasswordReset"                      component={PasswordReset} />

                  {/* logout button */}
                  <Route path="/Logout"                             component={Logout} />


                  {/* Footer page */}
                  <Route path ="/Footer"                            component={Footer} />

                  {/* Header page */}
                  <Route path ="/Header"                            component={Header} />

                  {/* Navigation page */}
                  <Route path ="/Navcarousel"                       component={Navcarousel} />

                  {/* Search Result page */}
                  <Route path ="/Searchresult"                      component={SearchResultPage} />


                  {/* Help center section */}
                  <Route path ="/AccountManagement"                component={AccountManagement} />

                  <Route path ="/FAQ"                              component={FAQ} />

                  <Route path ="/GettingStarted"                   component={GettingStarted} />

                  <Route path ="/PaymentInformation"               component={PaymentInformation} />

                  <Route path ="/PropertyListing"                  component={PropertyListing} />



                   {/* Hosting section */}
                   <Route path ="/CommunityForums"                component={CommunityForums} />

                  <Route path ="/HostingDuty"                     component={HostingDuty} />

                  <Route path ="/HostingResources"                component={HostingResources} />

                  <Route path ="/PostProperty"                    component={PostProperty} />


                  {/* Luminaryapp section */}
                  <Route path ="/Careers"                          component={Careers} />

                  <Route path ="/GiftCards"                        component={GiftCards} />

                  <Route path ="/LatestNews"                       component={LatestNews} />

                  <Route path ="/NewFeatures"                     component={NewsFeatures} />


                  {/* Support section */}
                  <Route path ="/AntiDiscrimination"                component={AntiDiscrimination} />

                  <Route path ="/CancellationOptions"               component={CancellationOptions} />

                  <Route path ="/DisabilitySupport"                  component={DisabilitySupport} />

                  <Route path ="/Report"                            component={Report} />

                  {/* Owner dashboard section */}
                  {/* Owner Upload form section */}
                  <Route path ="/UploadForm"                        component={UploadForm} />
                  {/* Owner dashboard */}
                  <Route path ="/OwnerDashboard"                    component={OwnerDashboard} />

                  {/* Admin Dashboard section */}
                  <Route path ="/AdminPanel"                        component={AdminPanel} />


                  {/* Not found page */}
                  {/* Remember to have he notfound page at the absolute bottom of the app.js file code */}
                  <Route path ="*"                                  component={NotFound} />

            </Switch>

            <Footer/>
            
        </div>

    </Router>
    
    </AuthProvider>
  );
}

export default App;


