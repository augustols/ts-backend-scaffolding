import express from 'express';
import { ExampleRouter } from './routes/example.route';
import "reflect-metadata";
import { DBConfig } from './configs/db.config';

const app = express();
const port = 3000; // default port to listen

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

// define a route handler for the default home page
app.use('/example', ExampleRouter);

app.get('/', (req, res) => {
  res.send('Hello!');
});

// start the Express server after successful db connection
DBConfig.connect().then(() => app.listen(port, () => console.log(`server started at http://localhost:${port}`)))



