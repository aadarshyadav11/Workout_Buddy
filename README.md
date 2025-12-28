- M: MongoDB   (Database)
- E: Express.js  (Backend)
- R: React.js   (Frontend)
- N: Node.js  (Backend)

## Frontend (Browser / Client side)       Backend (Server)                 Database
           React App                      Node.js + Express.js             MongoDB


## Backend:
- npm init -y
- npm i nodemon / npm i nodemon --save-dev

- npm install express / npm i express
- npm install mongoose
- npm i dotenv
- npm install cors

# to run application
- npm run dev
- npm start
- nodemon server.js

## API Endpoints
GET    -  /api/workouts      --> get all the workout docs
POST   -  /api/workouts      --> create / register a new workout docs
GET    -  /api/workouts/:id  --> get a single workout docs
DELETE -  /api/workouts/:id  --> delete a single workout docs
PATCH  -  /api/workouts/:id  --> update a single workout

## Frontend
- Syntax :  npx create-react-app folder_name     (older version react setup)
- Ex : npx create-react-app frontend

- Syntax :  npm create vite@latest frontend -- --template react     (newer version react setup with vite tools)
- Ex : npm create vite@latest frontend -- --template react

- npm install   (to install dependencies)
- npm install react-router-dom   (to install router dependencies)
