# MERN Blog API

This is a backend API for a simple blog application built using the MERN stack (MongoDB, Express.js, React, Node.js). The API supports user authentication and CRUD operations for blog posts.

## Features
- **User Authentication**: Register and log in users securely.
- **JWT-Based Authentication**: Secure endpoints with JSON Web Tokens.
- **Post Management**: Create, read, update, and delete blog posts.

## Tech Stack
- **Node.js**: Backend runtime environment.
- **Express.js**: Web framework for Node.js.
- **MongoDB**: Database to store users and posts.
- **Mongoose**: ODM for MongoDB.
- **JWT**: Authentication via tokens.
- **Bcrypt**: Password hashing.

---

## Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-repo-name/mern-blog-api.git
   cd mern-blog-api
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Setup Environment Variables**:
   Create a `.env` file in the root directory and add the following variables:
   ```env
   MONGO_URI=mongodb://localhost:27017/mern_blog
   JWT_SECRET=your_jwt_secret
   ```

4. **Start the Server**:
   ```bash
   npm start
   ```
   The API will be available at `http://localhost:5000`.

---

## API Endpoints

### User Authentication

#### Register User
**Endpoint**: `POST /api/register`

**Request Body**:
```json
{
  "username": "testuser",
  "password": "testpassword"
}
```

**Response**:
```json
{
  "_id": "64cf56781234abc567890123",
  "username": "testuser"
}
```

#### Login User
**Endpoint**: `POST /api/login`

**Request Body**:
```json
{
  "username": "testuser",
  "password": "testpassword"
}
```

**Response**:
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

### Post Management

#### Create Post
**Endpoint**: `POST /api/posts`

**Headers**:
```
Authorization: Bearer <your_jwt_token>
```

**Request Body**:
```json
{
  "title": "My First Blog Post",
  "content": "This is the content of my first blog post."
}
```

**Response**:
```json
{
  "_id": "64cfd9c1234abc5678901234",
  "title": "My First Blog Post",
  "content": "This is the content of my first blog post.",
  "author": "64cf56781234abc567890123",
  "timestamp": "2024-12-29T12:34:56.789Z"
}
```

#### Get All Posts
**Endpoint**: `GET /api/posts`

**Response**:
```json
[
  {
    "_id": "64cfd9c1234abc5678901234",
    "title": "My First Blog Post",
    "content": "This is the content of my first blog post.",
    "author": {
      "_id": "64cf56781234abc567890123",
      "username": "testuser"
    },
    "timestamp": "2024-12-29T12:34:56.789Z"
  }
]
```

#### Get Single Post
**Endpoint**: `GET /api/posts/:id`

**Response**:
```json
{
  "_id": "64cfd9c1234abc5678901234",
  "title": "My First Blog Post",
  "content": "This is the content of my first blog post.",
  "author": {
    "_id": "64cf56781234abc567890123",
    "username": "testuser"
  },
  "timestamp": "2024-12-29T12:34:56.789Z"
}
```

#### Update Post
**Endpoint**: `PUT /api/posts/:id`

**Headers**:
```
Authorization: Bearer <your_jwt_token>
```

**Request Body**:
```json
{
  "title": "Updated Blog Post",
  "content": "This is the updated content of my blog post."
}
```

**Response**:
```json
{
  "_id": "64cfd9c1234abc5678901234",
  "title": "Updated Blog Post",
  "content": "This is the updated content of my blog post.",
  "author": "64cf56781234abc567890123",
  "timestamp": "2024-12-29T12:34:56.789Z"
}
```

#### Delete Post
**Endpoint**: `DELETE /api/posts/:id`

**Headers**:
```
Authorization: Bearer <your_jwt_token>
```

**Response**:
```
Post deleted
```

---

## Testing
Use tools like **Postman** or **cURL** to test the API endpoints. Ensure the `Authorization` header is correctly passed for protected routes.

---

## Future Enhancements
- Add support for profile pictures.
- Implement pagination for the posts endpoint.
- Add comments feature for posts.
- Improve error handling and validation.



