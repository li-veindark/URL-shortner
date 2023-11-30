# URL-Shortener

## Description
This is a Project made under ACM-Open-Projects window.
This Project is primarily a backend project made alive by a touch of very basic UX made with the help of Bootstrap.
The project is fully functional, equipped with Google authentication, a fully functional search bar ( User doesn't need to enter the full title, any substring present in the title would give the same result.
There is a homepage which is visible to any user who visits the site. They can always shorten up any url they want to. the newly shortened URL would be viviblle at the end of the current results table.
At the homepage, all the URLs created by any person (who has not logged in yet) would appear. 
Any user can only access their personal URLs once they are signed in. 
Logged in can only see their own privately made URLs and can always create new ones. These URls would not be visible to anyone else.
They can always search for thier URLs, Delete them if they wish to do so.

## Running the project

First clone this repository by typing this in command line : 
### https://github.com/li-veindark/URL-shortner.git

Next, install all dependencies using :
### npm i

Next, make a new dotenv file in the root directory and place relevant keys (Google auth credentials, Mongoose credentials) in it.

Finally, type : 
### npm start

## Working Of the project 

I have used Node.js as basic Server and Express.js as the framwork on Node to work Upon.
I have used Mongoose as my database Query handler and have used MongoDB Atlas as my Database.
I have Used EJS as my View Engine and have used Boostrap To Make a basic , clean UI/UX.
I have Used Passport.js for handling authentication.
The app saves The newly entered Link along with title in a model where it is preassigned a unique short code which essentially is the shortened URL.
If the link is previously shortened, it doesn't Create any new link. while the user is not signed in, the email field in the model remains empty.
Once the user tries to log in, the app fetches user's detalis from Google, checks if the user is already present or not if not, adds them to the database. After verifying/ adding, a session is created and a cookie containing the User's databse id is stored in the browser of the user.
The cookie's life is 1 day. after logging in, the user can always create, visit and Delete thier URLs. After logging out, Thier session is over.
At every point if the authenticated URL is entered in some new browser, it'll always ensure whether the user is signed in or not. if not it again prompts the user to log in via Google. Also, there is a counter attached to every shortened URL. User can see how many times the Shortened URl is pressed.


## Takeaways
Through this project, i learnt Google authentication, about sessions and cookies, Passport.js, and various queries in Databse handling.

## Resources and References  
Bootstrap Documentation : https://getbootstrap.com/docs/5.3/examples/

Google Authentication Using Passport : https://www.youtube.com/watch?v=sakQbeRjgwg&list=PL4cUxeGkcC9jdm7QX143aMLAqyM-jTZ2x&index=1

Creating a basic URL-Shortener : https://www.youtube.com/watch?v=SLpUKAGnm-g&t=1061s

Making a BLoggy Website : https://medium.com/@rajatdhoot/learn-build-a-mern-stack-application-in-100-hours-part-1-ee56e3f61979
