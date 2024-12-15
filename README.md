# Apple clone by React.js

This project contains backend, Frontend and API (youtube API) that is built using React.js + vite and Node.js.

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

# Build Status

live: [Here](https://jolly-axolotl-3a8837.netlify.app/) on Netlify

# Requirements
- VScode
- Node
- dotenv
- Nodemon
# Setup

If you want clone to local computer use:

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

Note: don't forget to create your api key and youTube channel ID  of apple youtube from the [google cloud](https://console.cloud.google.com/projectselector2/apis/dashboard?supportedpurview=project).
  
  
