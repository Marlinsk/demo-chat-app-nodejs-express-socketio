# Demo chat app with Node.js Express and Socket.io
Project developed for technical evaluation.

## The objective of this project
This project, titled "demo-chat-app," is a real-time chat application designed to facilitate seamless communication and messaging between users. Leveraging the power of **Node.js, Express.js, and Socket.io,** this application offers a dynamic and interactive platform for users to exchange messages in real-time.

### Key Features:

**Real-Time Messaging:** The heart of this application is the real-time messaging feature, enabling users to send and receive messages instantly. With Socket.io, messages are delivered as soon as they are sent, creating a responsive and interactive chat environment.

**User Authentication:** While not explicitly mentioned in the package.json, user authentication and security are paramount in ensuring that messages are exchanged securely. Users can log in and identify themselves, adding a layer of privacy and accountability.

**Message Storage:** The application is backed by a MongoDB database (as indicated in the package.json) to store messages. This allows users to access past conversations and ensures that messages are not lost even if users are offline.

The "demo-chat-app" serves as a practical demonstration of real-time communication and showcases how modern technologies can be harnessed to create a responsive and engaging messaging platform. Whether for personal, business, or collaborative purposes, this chat application provides a versatile solution for real-time communication needs.

With a user-friendly interface and the ability to handle a range of users and messages, this project demonstrates the potential of Node.js, Express.js, and Socket.io for building dynamic and interactive chat applications. Users can enjoy the convenience of real-time messaging while keeping their conversations securely stored and easily accessible.

This chat application reflects the ongoing evolution of web technologies and their role in enhancing communication and connectivity among individuals and businesses alike.

## Technologies

- Node.js: A JavaScript runtime environment that allows server-side applications to be built using JavaScript.

- Express.js: A web application framework for Node.js that simplifies the development of web and mobile applications.

- Socket.io: A library for enabling real-time, bidirectional communication between clients and the server, commonly used for building interactive, real-time web applications.

- MongoDB: A NoSQL database used to store and manage data. In your project, it appears to be used for message storage.

- Mongoose: An Object Data Modeling (ODM) library for MongoDB and Node.js, which simplifies interactions with MongoDB databases.

## Tutorial
**Note:** To follow the step-by-step instructions for running the application on your machine, you need to have knowledge of terminal commands, Git and GitHub commands, and npm package manager commands, as well as navigating between folders using the terminal.

### Cloning and setting up the project
**1º step: clone the repository to your machine from GitHub.**
```bash
git clone https://github.com/Marlinsk/tmaior-test-marlon.git
```

**2º step: Navigate to the project folder.**
```bash
cd tmaior-test-marlon
```

**3º step: Create .env file before run npm install in the terminal**
```bash
DATABASE_URL='mongodb+srv://USERNAME:PASSWORD@HOST/DATABASE'
SERVER_URL='http://localhost:3000'
```
**Note:** In the env.example file, there is an example of a connection URL to MongoDB Atlas.

**4º step: Run the command in the terminal to install the project dependencies.**
```bash
npm install
```

**5º step: Run the command in the terminal to start the application, and feel free to test and play around.**
```bash
npm run start
```
Now, you just need to access it using a request tool or consume it; the application is running on **localhost:3000.**

## Creating a Docker image of the application
**Note**: You need to have Docker on your machine and have a basic understanding of terminal commands. Having all of that, let's get started.

**1º step: Inside the project folder, run the following command in the terminal to create the Docker image.**
```bash
docker build -t simple-chat-app:1.0.0 .
```

**2º step: Execute the following command in the terminal to have Docker run the 'simple-chat-app:1.0.0' image while mapping port 3000 from the host to port 3000 within the container.**
```bash
docker run -p 3000:3000 --name my-chat-app simple-chat-app:1.0.0
```
Now, you just need to access it using a request tool or consume it; the application is running on **localhost:3000.**

### Other docker commands
Command to list the docker images
```bash
docker images
```

Command to list the running containers
```bash
docker ps
```

To stop a specific container
```bash
docker stop 
```
**Note:** To stop all running containers, you can simply use **docker stop.**

To remove specific container
```bash
docker rm my-chat-app
```

To remove specific image
```bash
docker rmi simple-chat-app:1.0.0
```
