URL Shortening Project

This project aims to provide a simple and efficient solution for shortening long URLs. The URL shortening service allows users to create shortened links that redirect to the original long URLs.

Getting Started
To use this URL shortening service, follow the instructions below.

Prerequisites
Node.js (version 10 or higher)
MongoDB (version 4 or higher)
Installation
Clone the repository:
git clone https://github.com/li-veindark/URL-shortner.git

Navigate to the project directory:
cd URL-Shortner

Install the dependencies:
npm install
Set up the configuration file:

Change the .env file to your .env.
Update the necessary environment variables in the .env file, such as the MongoDB connection URI and the port number.
Start the application:


npm start
Server started on port 3000



Request body
{
  "url": "https://www.example.com/long-url"
}
Response:
{
  "shortUrl": "http://your-domain.com/abc123"
}
In the table, the data of actual URL, short URl and the tag you have given to it is added.


Web Interface
Access the web interface by navigating to http://localhost:3000/.

Enter a long URL in the input field and click the "Shrink" button to generate a shortened URL.

Copy the shortened URL and share it with others.
Delete icon is used to delete any data from the table.
To search any url, you can search using the tags in search input.

Contributing
Contributions are welcome! If you have any ideas, suggestions, or bug reports, please create a new issue or submit a pull request.





