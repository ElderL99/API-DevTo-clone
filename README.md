# Dev.to Clone API 📝

This is a **Dev.to Clone CRUD** developed with **Node.js**, **Express**, and **MongoDB**, using **clean architecture**. It allows creating users, authentication, and managing posts with JWT authentication.

---

## Technologies Used

- Node.js
- Express.js
- MongoDB + Mongoose
- JWT for authentication
- bcryptjs for password encryption
- Helmet for HTTP security
- CORS
- dotenv for environment variables
- http-errors for error handling

---



### Clean Architecture

---

---

## Main Dependencies

```json
"dependencies": {
  "bcryptjs": "^3.0.2",
  "cors": "^2.8.5",
  "dotenv": "^17.2.2",
  "express": "^5.1.0",
  "helmet": "^8.1.0",
  "http-errors": "^2.0.0",
  "jsonwebtoken": "^9.0.2",
  "mongoose": "^8.18.1"
}

```

- POST /auth/login → User login, returns JWT

```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

- POST /user → Create a new user

```json
{
  "name": "User",
  "email": "adan@example.com",
  "password": "123456",
  "profilePic": "String"
}
```

### Post

- GET /post → List all posts

- POST /post → Create a post (requires JWT)

- GET /post/:id → Get a post by ID

- PATCH /post/:id → Update a post by ID (requires JWT)

- DELETE /post/:id → Delete a post by ID (requires JWT)

### Features

- Create users and authentication with JWT

- Full CRUD for posts

- Authentication via auth middleware

- Clean architecture for scalability

- Centralized error handling

## How to Use

1. Clone the repository:

```bash

git clone <tu-repo-url>

```

2. Install dependencies:

```bash

npm install

```

3. Create a .env file:

```makefile

DB_USER=
DB_PASSWORD=
DB_HOST=
DB_NAME=
JWT_SECRET=
PORT=

```

4. Run the server:

```bash

npm run dev

```

# Notes

- All endpoints that modify posts require JWT authentication.

- Clean architecture separates business logic (usecases) from infrastructure and routes.

- You can extend models and features according to your needs.

## ✨ Project ready to scale and add Dev.to-like features such as comments, likes, and tags

### REPOSITORIO EN RENDER

```c
https://api-devto-clone.onrender.com

```
