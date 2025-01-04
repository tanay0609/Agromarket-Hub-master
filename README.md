AgroMarket Hub

Overview

AgroMarket Hub is an innovative platform designed to streamline transactions and trading between farmers and agricultural suppliers. The system enhances the efficiency of agricultural supply chains by enabling secure, fast, and seamless transactions. It is a comprehensive solution for buying, selling, and managing agricultural products online.

Key Features

Product Listings: Farmers and suppliers can list their products with detailed descriptions, prices, and availability.

User Authentication: Secure login and account management for farmers and suppliers.

Real-Time Transactions: Facilitate secure and instant payments through integrated payment gateways.

Dashboard: Personalized dashboard for users to track orders, transactions, and product listings.

Notifications: Alerts for new product listings, order updates, and payment statuses.

Search and Filter: Advanced search and filtering options for quick product discovery.

Technologies Used

Frontend

React.js

Tailwind CSS

HTML5, CSS3

Backend

Node.js (Express.js)

Database

MongoDB

Others

Razorpay for payment integration

RESTful API for backend communication

JWT for authentication and authorization

Installation and Setup

Prerequisites

Node.js (>= v14.x)

MongoDB (running locally or hosted)

Steps

Install dependencies:

For the backend:

cd backend
npm install

For the frontend:

cd ../frontend
npm install

Configure environment variables:

Create a .env file in the backend directory with the following keys:

MONGO_URI=<your_mongodb_connection_string>
JWT_SECRET=<your_jwt_secret>
RAZORPAY_KEY_ID=<your_razorpay_key_id>
RAZORPAY_KEY_SECRET=<your_razorpay_key_secret>

Start the backend server:

npm start

Start the frontend:

npm start

Access the application at:

http://localhost:3000

Usage

Sign Up: Create an account as a farmer or supplier.

Add Products: List products with necessary details like price, description, and stock availability.

Browse and Buy: Use search and filters to find products and place orders.

Make Payments: Use the integrated payment gateway for secure transactions.

Track Activity: Monitor orders and product performance via the dashboard.

Project Directory Structure

Directory structure:
└── tanay0609-Agromarket-Hub-master/
    ├── README.md
    ├── log.txt
    ├── package.json
    ├── tailwind.config.js
    ├── public/
    │   ├── index.html
    │   └── robots.txt
    ├── server/
    │   ├── app.js
    │   ├── log.txt
    │   ├── package-lock.json
    │   ├── package.json
    │   ├── tailwind.config.js
    │   ├── .env
    │   ├── .gitIgnore
    │   ├── MailTemplates/
    │   │   ├── OTPTemplate.js
    │   │   ├── contactFormRes.js
    │   │   ├── courseEnrollmentEmail.js
    │   │   ├── passwordUpdate.js
    │   │   └── paymentSuccessEmail.js
    │   ├── config/
    │   │   ├── cloudinary.js
    │   │   ├── database.js
    │   │   └── razorpay.js
    │   ├── controllers/
    │   │   ├── categoryControl.js
    │   │   ├── contactUsControl.js
    │   │   ├── paymentsControl.js
    │   │   ├── productControl.js
    │   │   ├── profileControl.js
    │   │   ├── resetPassword.js
    │   │   └── userControl.js
    │   ├── middlewares/
    │   │   └── authentication.js
    │   ├── models/
    │   │   ├── otp.js
    │   │   ├── productCategory.js
    │   │   ├── products.js
    │   │   ├── user.js
    │   │   └── userProfile.js
    │   ├── public/
    │   │   ├── images/
    │   │   └── uploads/
    │   │       ├── products/
    │   │       └── profiles/
    │   ├── routes/
    │   │   ├── contactRoute.js
    │   │   ├── paymentRoute.js
    │   │   ├── productRoute.js
    │   │   ├── profileRoute.js
    │   │   └── userRoute.js
    │   ├── services/
    │   │   └── authentication.js
    │   ├── src/
    │   │   ├── input.css
    │   │   └── output.css
    │   ├── utils/
    │   │   ├── imageUploader.js
    │   │   └── mailSender.js
    │   └── views/
    │       ├── home.ejs
    │       ├── profile.ejs
    │       ├── signin.ejs
    │       ├── signup.ejs
    │       ├── style.css
    │       └── partials/
    │           ├── head.ejs
    │           ├── nav.ejs
    │           └── scripts.ejs
    └── src/
        ├── App.css
        ├── App.js
        ├── index.css
        ├── index.js
        ├── assets/
        │   ├── Logos/
        │   │   └── shopkeeper.webp
        │   └── TimeLineLogo/
        ├── components/
        │   ├── ContactPage/
        │   │   ├── ContactDetails.jsx
        │   │   ├── ContactForm.jsx
        │   │   └── ContactUsForm.jsx
        │   ├── common/
        │   │   ├── AboutUs.jsx
        │   │   ├── Blog.jsx
        │   │   ├── ConfirmationModal.jsx
        │   │   ├── Footer.jsx
        │   │   ├── IconButton.jsx
        │   │   ├── Navbar.jsx
        │   │   └── Tab.jsx
        │   └── core/
        │       ├── Auth/
        │       │   ├── LoginForm.jsx
        │       │   ├── OpenRoute.jsx
        │       │   ├── PrivateRoute.jsx
        │       │   ├── ProfileDropDown.jsx
        │       │   ├── SignupForm.jsx
        │       │   └── Template.jsx
        │       ├── Category/
        │       │   └── ProductCard.jsx
        │       ├── Dashboard/
        │       │   ├── MyOrders.jsx
        │       │   ├── MyProducts.jsx
        │       │   ├── MyProfile.jsx
        │       │   ├── Sidebar.jsx
        │       │   ├── SidebarLink.jsx
        │       │   ├── AddProduct/
        │       │   │   ├── RenderSteps.jsx
        │       │   │   ├── Upload.jsx
        │       │   │   ├── index.jsx
        │       │   │   ├── ProductAvailability/
        │       │   │   │   └── index.jsx
        │       │   │   └── ProductDetails/
        │       │   │       ├── ChipInput.jsx
        │       │   │       └── ProductDetailsForm.jsx
        │       │   ├── Cart/
        │       │   │   ├── RenderCartProducts.jsx
        │       │   │   ├── RenderTotalAmount.jsx
        │       │   │   └── index.jsx
        │       │   ├── DealerDashboard/
        │       │   │   ├── Dealer.jsx
        │       │   │   └── DealerChart.jsx
        │       │   ├── DealerProducts/
        │       │   │   └── ProductsTable.jsx
        │       │   ├── EditProduct/
        │       │   │   └── index.js
        │       │   └── Settings/
        │       │       ├── ChangeProfilePicture.jsx
        │       │       ├── DeleteAccount.jsx
        │       │       ├── EditProfile.jsx
        │       │       ├── UpdatePassword.jsx
        │       │       └── index.jsx
        │       ├── HomePage/
        │       │   ├── Button.jsx
        │       │   ├── CourseCard.jsx
        │       │   ├── DealerSection.jsx
        │       │   ├── ExploreMore.jsx
        │       │   ├── HighlightText.jsx
        │       │   └── TimelineSection.jsx
        │       └── Product/
        │           └── ProductDetailsCard.jsx
        ├── data/
        │   ├── NavbarLinks.js
        │   ├── countrycode.json
        │   ├── dashboard-links.js
        │   ├── footer-links.js
        │   └── homepage-explore.js
        ├── hooks/
        │   └── useOnClickOutside.js
        ├── pages/
        │   ├── Category.jsx
        │   ├── ContactUs.jsx
        │   ├── Dashboard.jsx
        │   ├── Error.jsx
        │   ├── ForgotPassword.jsx
        │   ├── HomePage.jsx
        │   ├── Login.jsx
        │   ├── ProductDetails.jsx
        │   ├── Signup.jsx
        │   ├── UpdatePassword.jsx
        │   └── VerifyEmail.jsx
        ├── reducer/
        │   └── index.js
        ├── services/
        │   ├── apiconnector.js
        │   ├── apis.js
        │   ├── formatDate.js
        │   └── operations/
        │       ├── ProductAPI.js
        │       ├── ProfileAPI.js
        │       ├── SettingAPI.js
        │       ├── authAPI.js
        │       ├── categoryPageAPI.js
        │       └── paymentAPI.js
        ├── slices/
        │   ├── authSlice.js
        │   ├── cartSlice.js
        │   ├── productSlice.js
        │   └── profileSlice.js
        └── utils/
            ├── constants.js
            └── dateFormatter.js

this is its structure
Future Enhancements

Mobile Application: Develop a mobile version of the platform.

Analytics Dashboard: Provide insights into sales and product trends.

Multi-Language Support: Add localization for broader accessibility.

Rating and Reviews: Enable customers to rate products and share feedback.

Contributing

We welcome contributions from the community! Please follow these steps:

Fork the repository.

Create a new branch for your feature/bug fix.

Commit your changes.

Submit a pull request.

License

This project is licensed under the MIT License. See the LICENSE file for details.

Contact

For questions or suggestions, please contact:

Name: Tanay Ramteke

Email: tanayramteke06@gmail.com

GitHub: github.com/tanay0609

Thank you for using AgroMarket Hub!

