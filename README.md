# HoangDuong Alcohol E-commerce Platform

A modern e-commerce platform built with NestJS backend and React frontend for alcohol products.

## 🚀 Tech Stack

### Backend

- NestJS
- TypeORM
- MySQL
- JWT Authentication
- Express Session
- TypeScript

### Frontend

- React
- Ant Design
- SCSS
- Axios
- React Router DOM
- Vite

## 🛠️ Setup & Installation

### Backend Setup

1. Navigate to backend directory:
   bash
   cd backend

2. Install dependencies:
   bash
   npm install

3. Create a `.env` file with the following variables:
   env
   DB_HOST=localhost
   DB_PORT=3306
   DB_USERNAME=your_username
   DB_PASSWORD=your_password
   DB_NAME=your_database
   JWT_SECRET=your_jwt_secret
   PORT=3000

4. Start the development server:
   bash
   npm run start:dev

## 🌟 Features

- User Authentication (Login/Register)
- Product Management
- Shopping Cart
- Order Processing
- Guest Checkout
- Responsive Design
- Session Management
- Secure Password Handling

## 🔒 API Security

- JWT Authentication
- Session Management
- CORS Configuration
- Password Hashing with bcrypt
