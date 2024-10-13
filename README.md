# alloMedia Frontend Application

## Description

This is the frontend application for the alloMedia delivery service app, built with React and Vite. It handles the user interface for authentication, email verification, and password reset functionalities. The application supports seamless integration with the backend API for secure user login, registration, and other authentication features.

## Project Management

For tracking the project tasks and progress, please visit our Jira board:
[Jira Board](https://aymane-bisdaoune.atlassian.net/jira/software/projects/AAF/boards/8?atlOrigin=eyJpIjoiYzc4NTU2YTBkM2ZkNDg5MzkwMWY3OTZhNTllM2IzZmMiLCJwIjoiaiJ9)

## Features

- User registration with email verification flow
- Login functionality with OTP (One-Time Password) support
- Password reset process with secure token-based verification
- Email notification integration for account actions
- Responsive design using custom UI components

## Technologies Used

- **React** with Vite for fast and optimized builds
- **React Router** for page navigation
- **React Toastify** for displaying notifications
- **CSS Modules** for scoped styling
- **Jest & Vitest** for unit testing
- **Docker** for containerization
- **Axios** for API communication

## Prerequisites

Before you begin, ensure you have met the following requirements:
- Node.js (v16.0.0 or later)
- npm (v7.0.0 or later)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/aymanebs/alloMedia_auth_front.git
   ```

2. Navigate to the project directory:
   ```bash
   cd alloMedia_frontend
   ```

3. Install the dependencies:
   ```bash
   npm install
   ```

4. Environment Setup:
   Create a `.env` file in the root directory with the following variables:
   ```
   VITE_API_URL=http://localhost:3000
   VITE_JWT_SECRET=your_jwt_secret
   ```
   Replace the placeholder values with your actual backend API URL and JWT secret.

## Usage

1. Start the development server:
   ```bash
   npm run dev
   ```
   The application will be available at `http://localhost:5173` by default.

## Folder Structure

- `/src/components`: Contains reusable UI components like buttons, input fields, etc.
- `/src/pages`: Contains main pages like Login, Register, Email Verification, and Password Reset.
- `/src/assets`: Stores images, icons, and stylesheets.
- `/src/utils`: Contains utility functions and helper methods.
- `/src/services`: Manages API calls using Axios.

## Key Components

- **Button Component**: Includes a loading spinner that activates on submission.
- **Email Verification Page**: Verifies email using tokens from the backend and displays appropriate messages.
- **Toast Notifications**: Integrated with React Toastify to display success, error, and info messages based on API responses.

## Testing

Run unit tests with Vitest:
```bash
npm run test
```
This command will execute the tests and display the results in the console.

## Docker Setup

1. Build the Docker image:
   ```bash
   docker build -t alloMedia_frontend .
   ```

2. Run the Docker container:
   ```bash
   docker-compose up
   ```
   This will start your frontend application in a Dockerized environment.


## License

This project is licensed under the MIT License.