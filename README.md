# CRUD-App-Node.js

## How to run this?

1. Create a cluster at MongoDB Atlas. https://cloud.mongodb.com/
2. Create a user.
3. Create a database and a collection(collection name should be 'blogs').
4. Get that database's connection string.
5. Clone/download this repo on to your local computer.
6. Run **npm install** in the console to download all the dependencies.
7. In the root directory of the repo, create a file named **.env**
8. In that file, add this code

          MONGO_URI=connection_string
                    
    **Replace 'connection_string' with the connection string you got from MongoDB website.**
    
    **Add the newly created user's password and the database name in the string.**
   
9. Run **npm run dev** or **npm start** in the console to start the server. The server will run at PORT 3000 unless you change it.

You are all set...Add a new blog from the Create Blog page...View or delete blogs from the Home page.
