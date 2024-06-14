![School Logo](/src/images/IST.png)

# INSTITUTE OF SOFTWARE TECHNOLOGIES

**SUBMITTED TO:** TRAINER EDWIN OUMA

**PRESENTED BY:**
MARTIN MAINA: 230301  
DIPLOMA IN SOFTWARE DEVELOPMENT  

**DATE:** JUNE 18th, 2024  

**LUMINARY REAL ESTATE APPLICATION**

Submitted in partial fulfillment of the requirements for Diploma in Software Development.


# Declaration

This project is my original work and has not been presented or submitted to any college or university for grading.

**Martin Kamau Maina**  
Signed:  
Date: 18th June 2024 

---

This project has been submitted for grading with the approval as the Project Supervisor and a trainer at the Institute of Software Technologies.

**Mr. Edwin Ouma**  
Signed:  
Date:  18th June 2024


# Abstract

The star real estate app tackles a significant issue in the Kenyan real estate market by providing a comprehensive platform that facilitates seamless interaction between buyers, sellers, hosts and renters. Having realized the need for such an application that will allow for the free flow of information, pre-verification of listings and transparency in pricing, our application aims to solve these challenges. Buyers will be in a position to explore and purchase various real estate options such as office spaces, houses, land and apartments. Renters will be in a position to find and rent properties through the platform. All costs are transparent as we ensure transparency with all the listings on the platform. Users will have access to real time property information through images, prices and locations. This enhances user experience and facilitates decision making. The user registration and authentication system ensure that there is security on the platform. This will also enhance user confidence while using our platform. The listing feature allows property owners to display their properties to potential buyers, renters and hosts. The listing upload feature allows users to upload their desired listings and proceed to engage with the potential clients. The detailed feature provides users with crucial information concerning the listings. The contact feature allows users to have direct access to property owners. This is a platform devoid of brokers and middle-men who have riddled the Kenyan property market. Star app seeks to create a secure, trustworthy and convenient platform for users of all backgrounds all while ensuring an enjoyable, seamless and transparent experience for our product users.

# Problem Statement

The Market is devoid of an application that creates a platform for buyers, sellers, hosts and renters to interact with each other in an environment that facilitates the free flow of information, allows for the pre-verification of all listings through user registration and one that allows the users to navigate through the murky waters of unforeseen costs and market charges through transparent pricing information. These issues necessitated the creation of our real estate application. 

# Proposed Solution

This application is intended to solve the problems listed above. The Application will create a user-friendly platform that connects buyers, sellers, hosts and renters with great pieces of real estate within Kenya’s borders. The app will provide hosts with a simple interface to easily list and manage their properties. Buyers will explore and purchase real estate options such as office spaces, houses, land and apartments & Sellers will showcase their properties to buyers on the platform. Renters will conveniently rent office space, houses, apartments and land. The app will enable users to search and select houses and land. The application will clearly outline all the costs that a buyer, seller and renter will be faced with before they choose to make a purchase of land or property or decide to rent a space. Land buyers, sellers, renters will freely interact with each other. This will allow them to have real time access to land that is on sale, the price of that land and the location of the land as well as its accompanying image(s). Lastly, the application will provide an amazing user experience that will be suitable for users of all ages and backgrounds. Our goal is to ensure the safety, trust and convenience of users.


# Features of the Application

## User Login, Registration and authentication feature:
There will be registration and login forms that have been implemented into the application. This will enhance security on the platform, enhance credibility and user confidence. Json web tokens have been implemented to enhance security in the application and ensure that only authenticated users have access to the system resources.

## Listings feature:
This will allow sellers to post their information on the application and wait for potential buyers to reach out to them via a contact form. Listings will be in the form of images that are uploaded on the platform by property owners using the upload form in the owner dashboard.

## Image Upload feature:
Users can comfortably upload their properties and vacant units based on particular criteria such as houses, apartments, land and office units. This will be done using the upload form in the owner dashboard.

## Report Generation feature:
Users can comfortably generate reports on their desired listings from the user interface. The format of the reports will be in pdf format and they will have the additional option of downloading the report. 

## Contact Information feature:
Users will have an opportunity to make calls and enquire on listings appearing on the app. This will be done via user forms which they will use to contact property owners. Users will fill the contact forms when they are interested in a particular listing that has been uploaded to the application. Furthermore, social media handles will be made accessible to users on our platform in the footer section of the application.

## Email feature:
An email notification feature has been implemented into the application where a prospective client is able to fill a contact form to show interest in a listing. On submission of the contact form, an email notification is sent to the owner of that particular listing notifying them on the prospective client’s details such as first name, last name, email and telephone number. Likewise an email is sent automatically to the users email address notifying them that they have successfully sent the email notification to the owner of the listing.

## Detail feature:
This will be an accompanying feature to the listings since sellers will not only post images but also important information such as brief descriptions, prices, the availability of the listing using dates and location details.

## Payment feature:
A payment feature has been implemented into the application using Paystack. After successfully submitting the contact form to express interests in a listing, they will be automatically directed to the payment page where they will input their M-pesa details. They will receive a receipt in their email after successful payment.

## Search  feature:
A search feature has been implemented into the application where users will now be able to search for their preferred listing using key words such as: Location, Amount and Category. The search bar is present in the user interface in the header section of the application. This feauture has also been implemented into the contact form where they fill to express interest in a real estate listing, instead of a drop down arrow users will be able to search for their listings using the above parameters.

## Forgot Password feature:
This feature will allow users who have forgotten their login credentials to reset their password and regain access to their accounts. This will be done via a reset link that is sent to the users email address. This has been implemented using nodemailer package. The period allocated is 24 hours for every password reset operation.

## Role Based Access Control feature:
This feature ensures data security, credibility and user confidence in the application. It ensures that only authorized individuals have access to sensitive sections of the application. Normal users with a role of ‘user’ will be navigated to the user dashboard, administrative user with the role of ‘admin’ will be navigated to the admin dashboard and individuals who upload listings to the application with the role of ‘owner’ will be navigated to the owner dashboard.

## Custom Notification feature:
This feature allows the users with alerts regarding important actions or changes within the application. This is an important feature when users are undertaking CRUD operations on the data through the owner and admin panels. Sweet Alerts have also been implemented into the submission process in register and login forms. This enhances communication and enhances user experience while using the application.


# Project Schedule
![Gantt Chart](/images/Schedule.png)


# Flow Diagram
## luminary system

## Resource
![Flow Diagram](/images/Components.png)

## Resource
![Flow Diagram](/images/Forms.png)

## Resource
![Flow Diagram](/images/Listing.png)

## Resource
![Flow Diagram](/images/Logout.png)

## Resource
![Flow Diagram](/images/Owner.png)

## Resource
![Flow Diagram](/images/Rent&Buy.png)

## Resource
![Flow Diagram](/images/User.png)

## Resource
![Flow Diagram](/images/Admin.png)

# Entity Relationship Diagram
![Entity Diagram](/images/Relational.png)

# Logical Diagram
![Logical Diagram](/images/Logical.png)

# Luminary Application

Welcome to the Luminary application. This application is built majorly using React for the front end, Nodejs & Expressjs for the backend and Bootstrap for styling.

## Setup

1. **Clone the Repository:**
   - Clone this repository to your local machine:
     ```bash
     git clone https://github.com/martin888maina/Luminary-Real-Estate-Application-Client.git
     ```

2. **Install Dependencies:**
   - Navigate to the project directory and install dependencies using npm:
     ```bash
     cd your-project-directory
     npm install
     ```

3. **Start the Development Server:**
   - Start the development server to run the React application:
     ```bash
     npm start
     ```
   - This will launch the application in your default web browser.

4. **Integration with Bootstrap:**
   - Bootstrap is already integrated into the project. You can customize Bootstrap styles in the `src/index.css` file or import Bootstrap components directly into your React components.

5. **Accessing the Application:**
   - Once the development server is running, you can access the application by navigating to `http://localhost:3000` in your web browser.

6. **Optional: Backend Integration:**
   - If you have a Nodejs & Expressjs backend for your real estate application, you can integrate it with this React frontend by making API calls to the backend endpoints.
   - Ensure your Laravel backend is running and accessible via API endpoints.

7. **Database and Authentication:**
   - If your Nodejs & Expressjs backend handles database operations and authentication, you need to implement corresponding features in your React frontend.
   - Handle user authentication and authorization using JWT tokens or sessions, depending on your backend setup.

8. **Start Developing:**
   - Open the project in your preferred code editor to start developing your React frontend. You can modify existing components, create new ones, and integrate additional functionality as needed.


## Installation

### Prerequisites

Make sure you have the following installed:

- **Node.js:** v14.x or higher
  - JavaScript runtime environment required for running the React frontend.
  - [Official Website](https://nodejs.org/)
- **npm:** v6.x or higher
  - Node.js package manager used for installing and managing project dependencies.
  - Comes bundled with Node.js installation.
- **Bootstrap:** v5.3.2
  - The world’s most popular front-end open source toolkit.
  - [Official Website](https://getbootstrap.com/)
- **React:** v18.2.0
  - A JavaScript library for building user interfaces.
  - [Official Website](https://reactjs.org/)
- **MySQL Database:**
  - Relational database management system used for storing application data.
  - [Official Website](https://www.mysql.com/)


## Dependencies

### Frontend Dependencies
- **React:** v18.2.0
  - A JavaScript library for building user interfaces.
  - [Official Website](https://reactjs.org/)
- **React DOM:** v18.2.0
  - React package for working with the DOM.
- **React Router DOM:** v5.3.4
  - Declarative routing for React.
  - [GitHub Repository](https://github.com/ReactTraining/react-router)
- **React Bootstrap:** v2.9.1
  - Bootstrap components built with React.
  - [GitHub Repository](https://github.com/react-bootstrap/react-bootstrap)
- **Ant Design:** v5.17.0
  - A design system for enterprise-level products.
  - [Official Website](https://ant.design/)
- **Bootstrap:** v5.3.2
  - The world’s most popular front-end open source toolkit.
  - [Official Website](https://getbootstrap.com/)
- **React Select:** v5.8.0
  - A flexible and beautiful Select Input control for React.
  - [GitHub Repository](https://github.com/JedWatson/react-select)
- **React Slick:** v0.29.0
  - A carousel component built with React.
  - [GitHub Repository](https://github.com/akiran/react-slick)
- **React Responsive Carousel:** v3.2.23
  - A carousel component for React.
  - [GitHub Repository](https://github.com/leandrowd/react-responsive-carousel)
- **React Toastify:** v9.1.3
  - A React notification library.
  - [GitHub Repository](https://github.com/fkhadra/react-toastify)
- **React Paystack:** v5.0.0
  - A React component for Paystack integration.
  - [GitHub Repository](https://github.com/iamraphson/react-paystack)

### Backend Dependencies
- **Axios:** v1.6.2
  - Promise-based HTTP client for the browser and Node.js.
  - [GitHub Repository](https://github.com/axios/axios)
- **JWT Decode:** v4.0.0
  - Decode JWTs token on client side.
  - [GitHub Repository](https://github.com/auth0/jwt-decode)
- **SweetAlert2:** v11.10.8
  - A beautiful, responsive, customizable, accessible (WAI-ARIA) replacement for JavaScript's popup boxes.
  - [GitHub Repository](https://github.com/sweetalert2/sweetalert2)
- **jspdf:** v2.5.1
  - A library to generate PDFs in client-side JavaScript.
  - [GitHub Repository](https://github.com/parallax/jsPDF)
  
### Testing Dependencies
- **@testing-library/user-event:** v13.5.0
  - Simple and complete DOM testing utilities.
  - [GitHub Repository](https://github.com/testing-library/user-event)

### Other Dependencies
- **@fortawesome/fontawesome-svg-core:** v1.2.35
  - SVG icon library for React.
  - [GitHub Repository](https://github.com/FortAwesome/react-fontawesome)
- **@fortawesome/free-brands-svg-icons:** v6.2.1
  - Free brand SVG icons for React.
  - [GitHub Repository](https://github.com/FortAwesome/react-fontawesome)
- **@fortawesome/free-regular-svg-icons:** v6.2.1
  - Free regular SVG icons for React.
  - [GitHub Repository](https://github.com/FortAwesome/react-fontawesome)
- **@fortawesome/free-solid-svg-icons:** v6.2.1
  - Free solid SVG icons for React.
  - [GitHub Repository](https://github.com/FortAwesome/react-fontawesome)
- **@fortawesome/react-fontawesome:** v0.1.17
  - React component for Font Awesome icons.
  - [GitHub Repository](https://github.com/FortAwesome/react-fontawesome)
- **@babel/plugin-proposal-private-property-in-object:** v7.14.5
  - Babel plugin to support private properties in JavaScript objects.
  - [GitHub Repository](https://github.com/babel/babel)
- **web-vitals:** v2.1.4
  - Essential metrics for a healthy web.
  - [GitHub Repository](https://github.com/GoogleChrome/web-vitals)

### Steps

1. **Clone the Repository:**

    ```bash
    git clone https://github.com/Martin888Maina/Luminary-Real-Estate-Application-Client.git
    ```

2. **Install Dependencies:**

    ```bash
    npm install
    ```

## Pages
## Admin files

1. **AdminPanel.js:**
   - Client-side component for the administrative dashboard.

2. **DisplayData:**
   - React component to display and manage user data fetched from the server.

## Body files

3. **Footer.js:**
   - React component for the footer section including links to various sections and social media platforms.

4. **Header.js:**
   - React component for the header section including company logo, search bar, and navigation buttons.

5. **NavCarousel.js:**
   - React component for the navigation carousel featuring various property types and navigation buttons for buying and renting properties.

6. **SearchBar.js:**
   - React component for the search bar used to search for rentals, land, and apartments. Allows users to input search terms and submit them to retrieve relevant results.

7. **SearchResultPage.js:**
   - React component responsible for displaying search results based on user queries. It receives search results as props and organizes them into rows with a maximum of 4 cards per row. Each card displays details about a search result, including location, amount, start date, end date, category, and listing ID. Users can click on a search result to view more details or perform further actions.

## CRUD files
8. **combineCRUD:**
   - React components responsible for Viewing, Deleting & Updating listings. It fetches the listing details using the combine ID from the URL parameter, displays them, and provides a delete button & update for each listing. Upon clicking the delete/Update button, it sends a DELETE/UPDATE request to the backend API to delete/update the listing and updates the UI accordingly. It also displays toast notifications for success or error messages during the delete & Update operation.

9. **contactCRUD:**
   - React components responsible for Viewing, Deleting & Updating contacts. It fetches the contact details using the contact ID from the URL parameter, displays them, and provides a delete button & update for each contact. Upon clicking the delete/Update button, it sends a DELETE/UPDATE request to the backend API to delete/update the contact and updates the UI accordingly. It also displays toast notifications for success or error messages during the delete & Update operation.

10. **registerCRUD:**
    - React components responsible for Viewing, deleting & Updating user data. It fetches the user details using the user ID from the URL parameter, displays them, and provides a delete button & update for each user record. Upon clicking the delete/Update button, it sends a DELETE/UPDATE request to the backend API to delete/update the user record and updates the UI accordingly. It also displays toast notifications for success or error messages during the delete & Update operation.

11. **reportCRUD:**
    - React components responsible for Viewing, deleting & Updating user report records. It fetches the user report details using the report ID from the URL parameter, displays them, and provides a delete button & update for each report. Upon clicking the delete/Update button, it sends a DELETE/UPDATE request to the backend API to delete/update the report record and updates the UI accordingly. It also displays toast notifications for success or error messages during the delete & Update operation.

## Footer files

12. **AccountManagement.js:**
    - React component for managing user accounts and preferences, featuring sections for profile updates, transaction history, and favorite listing saving. It offers intuitive tools and a user-friendly interface, enabling users to tailor their real estate experience efficiently.

13. **FAQ.js:**
    - React component featuring comprehensive sections addressing common queries about real estate services, including financing options, property management, and platform navigation. It offers detailed insights and personalized assistance through a dedicated customer support team, aiming to ensure a smooth and transparent real estate experience for users..

14. **GettingStarted.js:**
    - React component guiding users through the initiation of their real estate journey, featuring comprehensive sections on embarking on the journey, using the real estate app, exploring property options, downloading the app, starting investment ventures, and discovering dream properties. Each section offers detailed insights and user-friendly instructions to ensure a smooth and convenient experience for users..

15. **PaymentInformation.js:**
    - React component facilitating the management of payment information, featuring sections on real estate finances management, payment history access and updates, subscription management for premium features, and commitment to transparency and flexibility in payments. Each section offers detailed insights and user-friendly instructions, empowering users with control over their financial interactions and ensuring a seamless real estate experience.

16. **PropertyListing.js:**
    - React component facilitating property listing exploration, featuring sections on discovering real estate opportunities, diverse property listings, filtering and searching for properties, user-friendly interface, and ease of venturing into the next real estate endeavor. Each section offers detailed descriptions, accompanied by high-quality images, empowering users with a seamless and enjoyable property-search experience tailored to their preferences..

17. **CommunityForum.js:**
    - React component facilitating discussions among real estate enthusiasts, covering topics like home buying tips, property investment strategies, and neighborhood insights. It promotes respectful engagement and inclusivity, fostering a positive environment for sharing experiences and gaining valuable insights..

18. **HostingDuty.js:**
    - React component outlining essential hosting responsibilities such as accurate listings, prompt communication, cleanliness maintenance, safety measures, and respectful guest treatment. It emphasizes creating a positive and trustworthy environment to enhance guest satisfaction and encourage positive reviews..

19. **HostingResources.js:**
    - React component providing valuable hosting resources for property hosts, including hosting tips, property management guides, communication strategies, guest satisfaction insights, and legal and safety information. It aims to empower hosts with the knowledge and tools needed for a successful and responsible hosting experience..

20. **PostProperty.js:**
    - React component guiding users through the process of posting a property on a real estate application. It covers steps such as creating an account, providing property details, uploading attractive photos, setting pricing and availability, crafting a compelling description, specifying safety features and rules, reviewing, and publishing. Following this comprehensive guide ensures users are well-prepared to showcase their property effectively and connect with potential buyers or guests..     

21. **Careers.js:**
    - React component showcasing career opportunities at Star Real Estate, emphasizing innovation, diversity, and professional growth, with a commitment to fostering a supportive workplace culture and providing access to ongoing training and career advancement opportunities..

22. **GiftCards.js:**
    - React component showcasing exclusive gift cards for real estate enthusiasts, offering the freedom to explore property listings, attend virtual tours, and engage in consultations, providing an opportunity to turn real estate dreams into reality..

23. **LatestNews.js:**
    - React component offering a comprehensive resource for staying informed about the latest trends, insights, and developments in the real estate industry, empowering users to make well-informed decisions at every step of their real estate journey..

24. **NewFeatures.js:**
    - React Component Introducing Star Real Estate's latest innovations, enhancing users' real estate experience with intuitive interfaces, advanced search options, and streamlined transactions, driven by user feedback and a commitment to excellence in the ever-evolving real estate landscape..

25. **AntiDiscrimination.js:**
    - React Component showcasing Star Real Estate's commitment to fostering an inclusive environment, outlining its anti-discrimination policy, key commitments, and the expectations for users, emphasizing equality, diversity, and community participation in creating a respectful and inclusive real estate experience..

26. **CancellationOptions.js:**
    - React Component presenting diverse cancellation policies and flexible booking options, allowing users to adapt to changing circumstances with ease, ensuring peace of mind and informed decision-making when navigating real estate transactions..

27. **DisabilitySupport.js:**
    - React Component ensuring accessibility for all users, offering tailored assistance, incorporating inclusive features like alternative text and keyboard navigation, and welcoming feedback for ongoing improvements, fostering an inclusive real estate platform..

28. **Report.js:**
    - Report component incorporating sections for reporting safety concerns, behavioral violations, and confidentiality assurances..    

## Owner files

29. **OwnerDashboard.js:**
    - Client-side component for the owner dashboard.

30. **UploadForm.js:**
    - Component allowing users to upload listings with form inputs for location, date range, amount, image URL, category, and file uploads for picture and document..

## Styling files

31. **AdminDashboard.css:**
    - Styling for a landing page with a background color, heading, text, action buttons, and button styling.

32. **AdminPanel.css:**
    - Styling for a admin page with a background color, heading, text, action buttons, and button styling.

33. **Carousel.css:**
    - Responsive styling for a carousel navigation section with adjustments for smaller screens..

34. **ContactForm.css:**
    - Styling for a contact form.

35. **Footer.css:**
    - Styling for a Footer section.

36. **ForgotPassword.css:**
    - Styling for Forgot Password Page.

37. **Header.css:**
    - Styling for the Header Section.

38. **LoginForm.css:**
    - Styling for a Login Form.

39. **LogoutPage.css:**
    - Styling for a Logout Page.

40. **Navigation.css:**
    - Styling for a Navigation Bar Section.

41. **NotFound.css:**
    - Styling for the Not Found Page.

42. **OwnerDashboard.css:**
    - Styling for the Owner Dashboard.

43. **PasswordReset.css:** 
    - Styling for the Password Reset Page.

44. **RegisterForm.css:**
    - Styling for the Register Form.

45. **ReportForm.css:**
    - Styling for the Report Form.

46. **SearchBar.css:**
    - Styling for a Search Page.

47. **UploadForm.css:**
    - Styling for an Upload Form.    


## User files    

48. **BuyCommmercial.js:**
    - React component rendering commercial listings for purchase.

49. **BuyLand.js:**
    - React component rendering Land listings for purchase.

50. **BuyResidential.js:**
    - React component rendering residential listings for purchase.

51. **RentCommercial.js:**
    - React component rendering commercial listings for rent.

52. **RentLand.js:**
    - React component rendering land listings for rent.

53. **RentResidential.js:**
    - React component rendering residential listings for rent.

54. **Cart.js:**
    - React component for displaying details of a listing, fetching data based on route parameters, and enabling PDF generation and user interaction.

55. **City.js:**
    - React component rendering city listings for booking.

56. **Colonial.js:**
    - React component rendering colonial listings for booking.

57. **Contemporary.js:**
    - React component rendering contemporary listings for booking,.

58. **Desert.js:**
    - React component rendering desert listings for booking.

59. **Farmland.js:**
    - React component rendering farmland listings for booking.

60. **Greenhome.js:**
    - React component rendering greenhome listings for booking.

61. **Hill.js:**
    - React component rendering hill listings for booking.

62. **Island.js:**
    - React component rendering island listings for booking.

63. **Lake.js:**
    - React component rendering lake listings for booking.

64. **Mansion.js:**
   - React component rendering mansion listings for booking.

65. **Modern.js:**
   - React component rendering modern listings for booking.

66. **Mountain.js:**
   - React component rendering mountain listings for booking.

67. **Ocean.js:**
   - React component rendering ocean listings for booking.

68. **Tent.js:**
   - React component rendering tent listings for booking.

69. **Valley.js:**
   - React component rendering valley listings for booking.   

70. **ContactForm.js:**
   - React component for a contact form.

71. **ForgotPassword.js:**
   - React component for Forgot Password Page.  

72. **GenerateReport.js:**
    - React component for Generating a Report.

73. **LoginForm.js:**
    - React component for a Login form.

74. **Logout.js:**
    - React component for a Logging out Page.

75. **NotFound.js:**
    - React component for a Not Found Page.

76. **PasswordReset.js:**
    - React component for a Password Reset Page.

77. **Paystack.js:**
    - React component for a Payment page.

78. **RegisterForm.js:**
    - React component for a register form.

79. **ReportForm.js:**
    - React component for a report form.


## Context files

80. **AuthContext.js:**
    - React component for authentication and user login verification.


## Test files

81. **ContactForm.test.js:**
    - React test ensuring that the ContactForm component contains necessary keywords related to form fields.

82. **LoginForm.test.js:**
    - React test ensuring that the LoginForm component contains necessary keywords related to form fields..

83. **RegisterForm.test.js:**
    - React test ensuring that the RegisterForm component contains necessary keywords related to form fields..

84.  **UploadForm.test.js:**
    - React test ensuring that the UploadForm component contains necessary keywords related to form fields..

## Additional files

85. **App.js:**
    - App component serves as the entry point for the application, providing routing functionality via React Router.

86. **App.css:**
    - Defines styles for the App component and its child elements.

87. **Index.js:**
    - Initializes the React app by rendering the App component.

88.  **Index.css:**
    - Defines styles for the Application.


## Acknowledgements

  - I express my heartfelt gratitude to Mr. Edwin Ouma for his exceptional guidance, expertise, and unwavering support throughout our project journey. His valuable insights, mentorship, and dedication have been instrumental in shaping our skills and driving the success of this application.

## License

This Real Estate Application is open-sourced software licensed under the [MIT License](LICENSE).
