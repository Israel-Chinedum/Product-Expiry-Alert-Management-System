import express from 'express';
import { getRequests } from './get_request_routes.js';

const app = express();
const port = process.env.PORT || 5100;


app.set('view engine', 'ejs');
app.set('views', 'Ejs_Files');
app.use(express.static('static'));


//GET REQUEST HANDLERS
getRequests(app);

app.listen(port, () => {
   console.log(`Now listening on port ${port}`); 
});