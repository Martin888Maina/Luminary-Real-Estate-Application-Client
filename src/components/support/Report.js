import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Report = () => {
    return (
        <div className="mt-5 mb-5">
            {/* <h1>Report</h1> */}
            <p>

                {/* section 1 */}
                <div className="Safety container d-flex flex-wrap mt-5 me-5 mb-5">
                    {/* IMAGE STYLING CODE */}
                    {/* class="rounded" */}
                    {/* class="rounded-circle" */}
                    <div className="Images">
                        <img src="https://images.pexels.com/photos/356079/pexels-photo-356079.jpeg?auto=compress&cs=tinysrgb&w=600" className="rounded" width={500} height={500} alt="Question" />
                    </div>

                    <div className="Text ms-5 mb-5">

                        <h1>Report to Us</h1>
                        At Star Real Estate, your safety and well-being are of paramount importance.<br />
                        If you encounter<br />
                        any issues, concerns, or suspicious activity while using our platform, please <br />
                        report it to us.<br />

                        Ensuring Safety: Your reports contribute to creating a secure environment for <br />
                        all users. By promptly addressing issues, we prioritize the safety of everyone<br />
                        engaging with our platform.<br />
                        Swift Action: Your reports enable us to take swift and appropriate action,<br />
                        ensuring that concerns are addressedpromptly and effectively.<br />
                        Maintaining Integrity: Reporting issues helps maintain the integrity of our platform, <br />
                        fostering a trustworthy and reliable space for real estate exploration.<br />
                        Your vigilance and cooperation play a crucial role in upholding the standards of<br />
                        safety and integrity within our community. If you observe anything that raises <br />
                        concern, please take a moment to report it, allowing us to continue providing <br />
                        a secure and positive real estate experience for all.<br />

                        {/* Implement button section */}
                        <Link to="/ReportForm">
                            <Button type="button" style={{ marginLeft: "10px", cursor: "pointer" }} class="btn btn-danger btn-lg mt-3 mb-2">
                                Click to fill Report
                            </Button>
                        </Link>

                    </div>

                </div>


                {/* section 2 */}
                <div className="Behaviour container d-flex flex-wrap mt-5 me-5 mb-5">
                    <div className="Images">
                        <img src="https://media.istockphoto.com/id/109186945/photo/confidential-file.jpg?b=1&s=612x612&w=0&k=20&c=ZJirvHCs1xgaacmlB2wK5lZ3W13X0y5iVDnE1ke47oM=" className="rounded" width={500} height={500} alt="Confidentiality" />
                    </div>

                    <div className="Text ms-5 mb-5">

                        <h3>What to Report:</h3>
                        You can report a wide range of issues, including discrimination, harassment, <br />
                        property misrepresentation,<br />
                        or any behavior that violates our community guidelines. We take reports seriously<br />
                        and will investigate each case thoroughly.<br />

                        Key Areas to Report:<br />
                        Discrimination: Report any incidents of discriminatory behavior, ensuring our <br />
                        platform remains inclusive and respectful.<br />
                        Harassment: If you experience or witness harassment, report it to help us maintain<br />
                        a positive and supportive community atmosphere.<br />
                        Property Misrepresentation: Report instances where property information is <br />
                        misrepresented, contributing to the accuracy of our listings.<br />
                        Community Guidelines Violations: Any behavior violating our community guidelines <br />
                        should be reported to ensure a secure and compliant environment for all users.<br />
                        By reporting these issues, you actively contribute to fostering a community that <br />
                        prioritizes safety, respect, and adherence to guidelines. Your reports are <br />
                        instrumental<br />
                        in maintaining the integrity of our platform and ensuring a positive <br />
                        experience for everyone.<br />

                    </div>
                </div>



                {/* section 3 */}
                <div className="Identity container d-flex flex-wrap mt-5 me-5 mb-5">


                    <div className="Images">
                        <img src="https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=600" className="rounded" width={500} height={500} alt="Safety" />
                    </div>

                    <div className="Text ms-5 mb-5">

                        <h3>Confidentiality</h3>
                        Rest assured that your reports are treated with the utmost confidentiality. < br />
                        Your identity will be protected,<br />
                        and your concerns will be addressed promptly and discreetly.<br />

                        <h3>Community Safety:</h3>
                        By reporting issues to us, you play a vital role in maintaining a safe and< br />
                        welcoming environment for all users.<br />
                        Your contributions help us uphold the integrity of our real estate community.<br />

                        We encourage you to report any concerns or issues you encounter while using <br />
                        our platform. Your commitment to community safety is appreciated, and your  <br />
                        reports contribute significantly to creating a secure and positive space for <br />
                        all users. If you have any reservations or witness any behavior that warrants <br />
                        attention, please take a moment to report it, allowing us to address the issue <br />
                        promptly and maintain the safety and integrity of our real estate community. <br />

                    </div>

                </div>

            </p>
        </div>
    );
}

export default Report;
