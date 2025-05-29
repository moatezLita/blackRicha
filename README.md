# Project Setup Guide

This guide will help you set up and run the React + Node.js application locally.

## Prerequisites

Make sure you have the following installed:
- Node.js (version 14 or higher)
- npm
- PostgreSQL database

## Setup Instructions

### 1. Database Setup

First, create a PostgreSQL database for the project:
1. Open your PostgreSQL client (pgAdmin, command line, etc.)
2. Create a new database (choose any name you prefer)
3. Note down your database connection details (host, username, password, database name)

### 2. Environment Configuration

Create a `.env` file in the **backend folder** with the following values:

```
SECRET_KEY=i9ZxB3jekK/6N9JE9JCPH3QaX/9TTEOSMFFFVZ3SPpM
DB_HOST=localhost
# PORT=3001
DB_PORT=5432
DB_USERNAME=your_postgres_username
DB_PASSWORD=your_postgres_password
DB_DATABASE=your_database_name
```

**Important:** Replace the following placeholders with your actual database credentials:
- `your_postgres_username` - Your PostgreSQL username
- `your_postgres_password` - Your PostgreSQL password  
- `your_database_name` - The name of the database you created in step 1

### 3. Install Dependencies

Install the required packages for both backend and frontend:

```bash
# Install backend dependencies
cd backend
npm install

# Install frontend dependencies (if needed)
cd ../frontend/blackricha-app  # or wherever your React app is located
npm install
```

### 4. Start the Backend Server

Navigate to the backend folder and start the development server:

```bash
cd backend
npm run dev
```

The backend server should start successfully. Look for confirmation messages in the terminal indicating:
- Database connection is successful
- Server is running (typically on port 3001 or another specified port)

**Make sure the backend is working properly before proceeding to the frontend!**

### 5. Start the Frontend (React App)

Once the backend is confirmed to be working, start the React application:

```bash
cd frontend  # or your React app directory
npm start
```

The React app will typically open automatically in your browser at `http://localhost:3000`.

## Troubleshooting

### Common Issues:

**Database Connection Error:**
- Verify your PostgreSQL service is running
- Double-check your database credentials in the `.env` file
- Ensure the database exists and is accessible

**Port Already in Use:**
- If you get a port conflict, you can uncomment and modify the `PORT=3001` line in your `.env` file to use a different port

**Backend Not Starting:**
- Make sure you're in the correct `backend` directory
- Verify all dependencies are installed (`npm install`)
- Check the console for specific error messages

### Testing the Setup

To verify everything is working:
1. Backend: Check that the server starts without errors and connects to the database
2. Frontend: Confirm the React app loads in your browser
3. Full Stack: Test any API calls between frontend and backend

## Project Structure

```
project/
├── backend/          # Node.js server
│   ├── .env         # Environment variables (create this)
│   └── package.json
└── frontend/blackricha-app        # React application
    └── package.json
```

If you encounter any issues, check the console output for error messages and ensure all steps above have been completed correctly.
