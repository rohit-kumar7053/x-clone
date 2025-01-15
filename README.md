# x-clone

MERN stack Twitter-clone application.

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Technologies](#technologies)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Introduction
x-clone is a full-stack Twitter-clone application built using the MERN stack (MongoDB, Express.js, React, and Node.js). It aims to replicate the core functionalities of Twitter, including user authentication, tweet posting, and following other users.

## Features
- User authentication (sign up, login, logout)
- Tweet posting, editing, and deletion
- Following and unfollowing users
- Real-time updates with websockets
- Responsive design

## Technologies
- **Frontend:** React, Redux
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **State Management:** Redux
- **Authentication:** JWT (JSON Web Tokens)
- **Styling:** CSS, Bootstrap

## Installation
1. Clone the repository:
    ```bash
    git clone https://github.com/rohit-kumar7053/x-clone.git
    cd x-clone
    ```

2. Install dependencies for both client and server:
    ```bash
    # Install server dependencies
    cd server
    npm install

    # Install client dependencies
    cd ../client
    npm install
    ```

3. Set up environment variables:
    Create a `.env` file in the `server` directory and add the following:
    ```env
    MONGO_URI=<your_mongoDB_connection_string>
    JWT_SECRET=<your_jwt_secret>
    ```

4. Run the application:
    ```bash
    # Run server
    cd server
    npm start

    # Run client
    cd ../client
    npm start
    ```

## Usage
1. Open your browser and navigate to `http://localhost:3000`.
2. Register a new account or log in with an existing account.
3. Start tweeting and following other users!

## Contributing
Contributions are welcome! Please follow these steps to contribute:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a pull request.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
