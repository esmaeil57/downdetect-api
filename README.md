🎓 Early Down Syndrome Prediction – Backend

This is the backend service for our Graduation Project: an AI-powered system for the **early prediction of Down Syndrome** from ultrasound images, along with support tools for parents and caregivers.

🧠 Features

- 🔬 **AI Model Integration** for early detection from medical images.
- 🎥 **Helpful Videos API**: Fetches and manages YouTube videos for treatment, therapy, and parent education.
- 👨‍👩‍👧 **Support System**: Resources for early childhood development, communication training, and therapist connections.
- 🛡️ **Admin Panel Support**: Secure video and content management.
- 📁 **RESTful API** design with structured validation.

 🧰 Tech Stack

- **Node.js** + **Express**
- **MongoDB** + **Mongoose**
- **Zod** – Schema validation
- **YouTube Data API** – Fetch relevant content
- **JWT** – Authentication (if enabled)

📂 Project Structure

/backend
├── controllers/
├── models/
├── routes/
├── services/
├── utils/
├── middlewares/
├── index.js


📦 Installation

1. Clone the repository:
    ```bash
    git clone [https://github.com/esmaeil57/downdetect-api.git]
    cd downdetect-api
    ```

2. Install dependencies:
    ```bash
    npm install \
  bcrypt@^5.1.1 \
  body-parser@^1.20.3 \
  cors@^2.8.5 \
  crypto@^1.0.1 \
  dotenv@^16.4.7 \
  express@^4.21.2 \
  jsonwebtoken@^9.0.2 \
  mongoose@^8.12.2 \
  morgan@^1.10.0 \
  react-router@^7.4.0 \
  zod@^3.24.2

    ```

3. Start the development server:
    ```bash
    node index.js
    ```

🚀 Usage

- Connect from  Postman to test endpoints.
- Admins can log in and manage video and thearapists content .
- Users can view resources, access videos .

🔒 Authentication

- Protected routes use JWT middleware (only accessible by admins).
- Public routes allow access to video  and resources.

📘 API Endpoints

| Method | Endpoint              | Description                       |
|--------|-----------------------|-----------------------------------|
| GET    | `/api/videos`         | List all helpful videos           |
| POST   | `/api/videos`         | Add a new video (admin only)      |
| PUT    | `/api/videos/:id`     | Update a video (admin only)       |
| DELETE | `/api/videos/:id`     | Delete a video (admin only)       |
| POST   | `/api/upload-image`   | Upload ultrasound for prediction  |
| POST   | `/api/auth/login`     | Admin login                       |

## 🧪 Testing

Use tools like **Postman** or **Insomnia** to test API routes.

 👥 Contributors
.....................
.....................

 📜 License

This project is for academic and research purposes only. Contact the author for more information.

---
