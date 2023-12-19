# AUTH SYSTEM 

This is a MERN (MongoDB, Express.js, React.js, Node.js) application that consists of a client-side built with React.js and a server-side built with Node.js using Express.js. The application allows [brief description of the application's purpose or functionality].

## Prerequisites

Before running this application, ensure you have the following installed:

- Node.js
- MongoDB

## Getting Started

### Installing Dependencies

1. Clone this repository: `git clone https://github.com/TharushaDilmith/auth-system-mern.git`
2. Navigate to the project directory: `cd auth-system-mern` 

Install dependencies for both the server and client:

```bash
# Install dependencies for server and client
npm install && cd client && npm install && cd ..
```

### Configuring Environment Variables

Create a `.env` file in the `server` directory and include the following environment variables:

```plaintext
NODE_ENV=development
PORT=3000
MONGODB_URI=YOUR_MONGODB_URI_HERE
JWT_SECRET=YOUR_JWT_SECRET_HERE
```

Replace `YOUR_MONGODB_URI_HERE` with your MongoDB connection URI.
Replace `YOUR_JWT_SECRET_HERE` with your jwt secret.

## Running the Application

To start both the server and client concurrently, you can use `concurrently`:

```bash
npm run dev
```

This command is configured in the `package.json` file to run both the server and client at the same time using `concurrently`.

The server will run on `http://localhost:3000` and the client on `http://localhost:3001`.

## Folder Structure

```
auth-system-app/
│
├── client/             # Client-side code (React.js)
│   ├── public/
│   └── src/
│       ├── components/
│       ├── App.js
│       └── ...
│
├── server/             # Server-side code (Node.js, Express.js)
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── .env            # Environment variables
│   ├── server.js       # Entry point
│   └── ...
│
└── README.md           # You are here
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgements

[List any acknowledgements or resources you used or that inspired this project.]
