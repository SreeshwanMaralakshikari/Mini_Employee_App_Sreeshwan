
# MERN Mini Employee App

A full-stack Employee Management Application built using the **MERN Stack**.

This project allows users to:

* Create Employees
* View Employees
* Edit Employee Details
* Delete Employees
* Manage employee records using MongoDB
* Work with React Router, Context API, Zustand, Axios, and TailwindCSS

---

# Tech Stack

## Frontend

* React 19
* Vite
* React Router
* Axios
* React Hook Form
* Zustand
* Tailwind CSS

## Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* dotenv
* CORS
* Cookie Parser

---

# Project Structure

```bash
Mern-Mini-Employee-App/
│
├── backend/
│   ├── APIs/
│   │   └── EmployeeAPI.js
│   ├── models/
│   │   └── EmployeeModel.js
│   ├── server.js
│   ├── package.json
│   └── .env
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── contexts/
│   │   ├── store/
│   │   ├── styles/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── axiosInstance.js
│   │
│   ├── public/
│   ├── package.json
│   └── vite.config.js
│
├── req.http
└── README.md
```

---

# Features

## Employee Management

### Create Employee

Users can add a new employee with:

* Name
* Email
* Mobile Number
* Designation
* Company Name

### View Employees

Displays all employees in a clean card-based UI.

### Edit Employee

Users can update employee information.

### Delete Employee

Users can remove employee records permanently.

---

# Frontend Functionalities

## React Router Navigation

The application uses React Router for navigation.

### Available Routes

| Route         | Description             |
| ------------- | ----------------------- |
| `/`           | Home Page               |
| `/create-emp` | Create Employee Page    |
| `/list`       | Employee List Page      |
| `/employee`   | Single Employee Details |
| `/edit-emp`   | Edit Employee Page      |

---

## React Hook Form

Used for:

* Form handling
* Validation
* Error management
* Cleaner form logic

---

## Zustand State Management

The app includes a Zustand-based counter demo.

### Zustand Functionalities

* Increment Counter
* Decrement Counter
* Reset Counter

---

## Context API

A Context API counter example is also included.

### Context Functionalities

* Shared global state
* Counter update handling

---

## Axios Integration

Axios is used for API communication between frontend and backend.

### Axios Operations

* GET Employees
* POST Employee
* PUT Employee
* DELETE Employee

---

## TailwindCSS Styling

The application uses reusable TailwindCSS utility classes.

### UI Features

* Responsive layout
* Modern card design
* Form styling
* Button styling
* Loading states
* Error states
* Empty state handling

---

# Backend Functionalities

## Express Server

The backend is built using Express.js.

### Middleware Used

* `express.json()`
* `cors()`
* `cookie-parser`

---

## MongoDB Connection

The app connects to MongoDB using Mongoose.

### Database Features

* Schema validation
* Unique email validation
* Timestamps
* Strict schema handling

---

# Employee Schema

```js
{
  name: String,
  email: String,
  mobile: Number,
  designation: String,
  companyName: String
}
```
---

## Create Employee

### Endpoint

```http
POST /create-emp
```

### Description

Creates a new employee.

---

## Get All Employees

### Endpoint

```http
GET /list
```

### Description

Returns all employees.

---

## Update Employee

### Endpoint

```http
PUT /employees/:id
```

### Description

Updates employee details by ID.

---

## Delete Employee

### Endpoint

```http
DELETE /employees/:id
```

### Description

Deletes an employee by ID.

---

# Error Handling

The backend includes centralized error handling.

## Handled Errors

* Validation Errors
* Cast Errors
* Duplicate Email Errors
* Invalid Routes
* Server Errors

# UI Pages

## Home Page

* Navigation buttons
* Context API Counter Demo
* Zustand Counter Demo

## Employee List Page

* Employee cards
* View button
* Edit button
* Delete button

## Create Employee Page

* Employee form
* Validation messages
* API error handling

## Edit Employee Page

* Edit existing employee details
* Form validation

---

# Learning Concepts Covered

This project demonstrates:

* MERN Stack Development
* REST API Development
* MongoDB Integration
* Express Middleware
* React Routing
* State Management
* CRUD Operations
* Form Validation
* API Integration
* Centralized Error Handling
* TailwindCSS Styling

---

# Future Improvements

Potential enhancements:

* Authentication & Authorization
* JWT Login System
* Search & Filter Employees
* Pagination
* Profile Image Upload
* Role-based Access
* Dark Mode
* Toast Notifications
* Protected Routes
* Deployment

---