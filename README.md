# Apple clone by React JS

This project contains backend, Frontend and API (youtube API) that is built using React.js + vite and Node.js 
For the backend, I used Express for my server and MySql for my database. My API is serving the iphone page from the database.

For the frontend, I added some current apple youtube to the website by using a third party API from Google Cloud,
so anyone can have access to Apple's youTube channel straight from the website.

# Stack

- Node
- Express
- React + Vite
- MySql
- youtube API  from Google Cloud 
[Website](https://console.cloud.google.com/projectselector2/apis/dashboard?supportedpurview=project)

# Requirements
- Vscode
- Node
- Nodemon
# Setup

clone to computer using:

  https://github.com/mamokebe/Apple-react-functional-based.git

run npm install from inside the backend directory and  frontend directory.

- cd backend:  npm i
- cd ../frontend: npm i
  
Create a .env file in the backend and frontend directory and create server port number, api key and channel id.

- VITE_PORT = <your_server_port_number>
- VITE_APP_API_KEY=<your_youTube_api_key>
- VITE_APP_CHANNEL_ID=<your_channel_id>

To access in your components:

- const port = import.meta.env.VITE_PORT
- const apiKey = import.meta.env.VITE_API_KEY
- const channelId = import.meta.env.VITE_CHANNEL_ID
  
