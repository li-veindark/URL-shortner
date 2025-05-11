# 🔗 URL Shortener

### 📍 Description

This project was developed as part of the **ACM Open Projects** initiative. It is primarily a **backend-focused web application** brought to life with a touch of frontend UX using **Bootstrap**. The project is fully functional and includes:

* 🔐 **Google Authentication** via Passport.js
* 🔍 A **searchable URL list** (supports substring queries)
* 🏠 A public **homepage** where users can shorten URLs without logging in
* 👤 A **personal dashboard** for logged-in users to manage their URLs privately

Visitors can shorten links on the homepage, and the most recently shortened URL will appear at the bottom of the public URL table. However, only **authenticated users** can view, create, delete, and search their personal URLs.

---

### 🚀 Features

* Google OAuth 2.0 login via Passport.js
* Public and private (authenticated) URL shortening
* Smart search with substring matching
* Click counter for each shortened URL
* Session and cookie-based authentication
* MongoDB Atlas database integration
* Bootstrap-based responsive UI
* Prevention of duplicate short URLs

---

### 🛠️ Tech Stack

* **Backend:** Node.js, Express.js
* **Database:** MongoDB Atlas + Mongoose
* **Authentication:** Passport.js (Google OAuth)
* **View Engine:** EJS
* **Frontend:** HTML5, CSS3, Bootstrap 5

---

### 🧪 Running the Project Locally

1. **Clone the repository:**

   ```bash
   git clone https://github.com/li-veindark/URL-shortner.git
   cd URL-shortner
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Environment setup:**

   Create a `.env` file in the root directory and add the following variables:

   ```
   GOOGLE_CLIENT_ID=your_google_client_id
   GOOGLE_CLIENT_SECRET=your_google_client_secret
   MONGO_URI=your_mongodb_connection_string
   SESSION_SECRET=your_random_session_secret
   ```

4. **Start the server:**

   ```bash
   npm start
   ```

5. Visit `http://localhost:3000` in your browser.

---

### ⚙️ How It Works

* **Shortening a URL:** Users (logged in or not) can shorten any valid URL. A unique short code is generated unless it already exists in the database.
* **Authentication:** When a user logs in with Google, the app checks the database for their account, creates one if it doesn't exist, and stores their ID in a session cookie (valid for 24 hours).
* **Private Access:** Authenticated users can manage (create, search, delete) their own URLs. These are not visible to others.
* **Security:** All protected routes validate sessions. If a user accesses a private link in another browser, they’ll be prompted to log in again.
* **Click Tracking:** Each short URL has an associated counter that tracks how many times it’s been visited.

---

### 📚 Takeaways

Through this project, I gained hands-on experience with:

* Implementing **Google OAuth** with Passport.js
* Handling **cookies and sessions**
* Structuring an **Express app**
* Performing advanced **MongoDB queries**
* Creating a **secure, user-specific experience** in a web app

---

### 📖 References

* [Bootstrap Documentation](https://getbootstrap.com/docs/5.3/examples/)
* [Google Auth with Passport.js - YouTube](https://www.youtube.com/watch?v=sakQbeRjgwg&list=PL4cUxeGkcC9jdm7QX143aMLAqyM-jTZ2x&index=1)
* [Creating a Basic URL Shortener - YouTube](https://www.youtube.com/watch?v=SLpUKAGnm-g&t=1061s)
* [MERN Stack Blog Tutorial - Medium](https://medium.com/@rajatdhoot/learn-build-a-mern-stack-application-in-100-hours-part-1-ee56e3f61979)

