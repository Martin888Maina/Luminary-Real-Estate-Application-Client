import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from "react-bootstrap";

const PaymentInformation = () =>{
    return(
        <div className="mt-5 mb-5">
            <h1>Payment Information</h1>
            <p>

                {/* section 1 */}
                <div className="Finances container d-flex flex-wrap mt-5 me-5 mb-5 ">
                        
                        {/* image section */}
                        <div className="Images">
                            <img src="https://images.pexels.com/photos/8296949/pexels-photo-8296949.jpeg?auto=compress&cs=tinysrgb&w=600"  class="rounded" width={500} height={500} alt="Financial Management" />
                        </div>

                        <div className="Text ms-5 mb-5">
                            We make managing your real estate finances straightforward. <br />
                            Navigating the complexities of real estate finances is simplified with  <br />
                            our dedicated approach. We pride ourselves on making the management of your <br />
                            real estate finances straightforward and transparent. Whether you are a  <br />
                            seasoned investor juggling multiple properties or a first-time homebuyer  <br />
                            embarking on this financial journey, our platform is designed to streamline <br />
                            the process.With intuitive tools and a user-friendly interface, you gain <br />
                            clear insights into your financial landscape. Easily track expenses, monitor <br />
                            cash flow, and access essential financial information at your fingertips.  <br />
                            Our commitment is to empower you with the tools needed to make informed decisions, <br />
                            ensuring that managing your real estate finances becomes a seamless and efficient <br />
                            part of your overall real estate experience.Trust in our platform to simplify the <br />
                            financial aspects of your real estate ventures, providing you with the clarity and  <br />
                            control necessary for a successful and stress-free financial management journey. <br />
                        </div>
                </div>



                {/* section 2 */}
                <div className="History container d-flex flex-wrap mt-5 me-5 mb-5">
                        
                        {/* image section */}
                        <div className="Images">
                            <img src="https://images.pexels.com/photos/5466785/pexels-photo-5466785.jpeg?auto=compress&cs=tinysrgb&w=600"  class="rounded" width={500} height={500} alt="Billing" />
                        </div>

                        <div className="Text ms-5 mb-5">
                            Access your payment history and effortlessly update your billing  <br />
                            information, ensuring secure and hassle-free transactions.<br />
                            Experience the convenience of managing your financial transactions with ease. <br />
                            Access your comprehensive payment history effortlessly and update your billing  <br />
                            information seamlessly, guaranteeing secure and hassle-free transactions. Our <br />
                            user-friendly interface provides a straightforward avenue for you to stay  <br />
                            informed about your financial activity.Effortlessly navigate through your payment <br />
                            history to track and review transactions, empowering you with a detailed overview  <br />
                            of your financial engagements. Update your billing information securely, ensuring <br />
                            that your financial details remain current and accurate for any future transactions. <br />
                            At the heart of our commitment is the desire to provide you with not just a platform <br />
                            for managing finances, but a tool that fosters trust and confidence. With these  <br />
                            capabilities, you can navigate your financial landscape with assurance, focusing  <br />
                            on your real estate ventures while we handle the intricacies of secure and efficient transactions. <br />
                        </div>
                </div>


                {/* section 3 */}
                <div className="Subscribe container d-flex flex-wrap mt-5 me-5 mb-5">
                        
                        {/* image section */}
                        <div className="Images">
                            <img src="https://media.istockphoto.com/id/1298294939/photo/man-viewing-newsletter-signup-page-on-tablet-computer.jpg?b=1&s=612x612&w=0&k=20&c=uEWcchGC7dT0_QiEKcGPZAzhC2A5KET8TTSWprKRd4U="  class="rounded" width={500} height={500} alt="Subscriptions" />
                        </div>

                        <div className="Text ms-5 mb-5">
                            For those who subscribe to premium features or services, our subscription <br />
                            management allows you to customize your preferences, upgrade, or cancel as needed. <br />
                            Unlock the full potential of our premium features and services with our intuitive  <br />
                            subscription management system. Tailor your experience to your preferences, seamlessly <br />
                            upgrade to access additional benefits, or cancel as needed—all within your control.  <br />
                            Our subscription management empowers you with flexibility, ensuring that your experience <br />
                            with premium features aligns precisely with your evolving needs.Customize your  <br />
                            subscription preferences effortlessly, adapting them to match your unique requirements <br />
                            and preferences. Should you desire enhanced features, upgrading is a simple process  <br />
                            that puts additional capabilities at your fingertips. Equally, if circumstances change, <br />
                            our user-friendly interface allows for hassle-free cancellation, ensuring you remain in <br />
                            control of your subscription journey.Our commitment is to provide not just premium  <br />
                            services but a dynamic and user-centric experience. With subscription management, you  <br />
                            have the autonomy to shape your engagement with premium features, making them work for <br />
                            you, enhancing your overall real estate experience. <br />
                        </div>
                </div>

                {/* section 4 */}
                <div className=" Transparency container d-flex flex-wrap mt-5 me-5 mb-5">
                        
                        {/* image section */}
                        <div className="Images">
                            <img src="https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=600"  class="rounded" width={500} height={500} alt="Seamless" />
                        </div>

                        <div className="Text ms-5 mb-5">
                            We understand that transparency and flexibility in payments are crucial<br />
                            for a seamless real estate experience, and we're here to provide just that.<br />
                            Recognizing the paramount importance of transparency and flexibility in payments,  <br />
                            we stand committed to delivering a seamless real estate experience tailored to your <br />
                            needs. At the core of our service philosophy is the understanding that clear, transparent  <br />
                            financial interactions are pivotal to your peace of mind and satisfaction.Our platform  <br />
                            is meticulously crafted to ensure that every aspect of your payment process is transparent, <br />
                            empowering you with a comprehensive view of financial transactions. The flexibility embedded <br />
                            in our payment systems allows you to navigate your real estate financial landscape with ease,  <br />
                            adapting to your unique preferences and requirements.Rest assured that our dedication to  <br />
                            transparency and flexibility extends beyond just a transaction—it's a commitment to providing <br />
                            you with the tools and support needed for a worry-free and efficient financial experience  <br />
                            throughout your real estate journey. Trust us to be your partner in crafting a  <br />
                            payment experience that aligns seamlessly with your expectations. <br />


                                <div className="mt-5 mb-5">

                                        {/* Payment Button */}
                                        <Link to="/payment">
                                                <Button type="button" style={{marginLeft: "10px", cursor:"pointer"}}  class="btn btn-info btn-lg">
                                                        Proceed to make Payment   
                                                </Button>
                                        </Link>

                                </div>

                        </div>


                        
                </div>


            </p>
        </div>
    );

}
export default PaymentInformation;