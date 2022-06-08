import express from "express";
import { db } from "./db";
import { routes } from "./routes";

const app = express();
app.use(express.json());
const start = async () =>{
    await db.connect('mongodb://localhost:27017');
    await app.listen(8080);
    console.log('port 8080');
}

start();

routes.forEach(route=>{
    app[route.method](route.path, route.handler);
});

app.get('/hello', (req, res) => {
    res.status(200).json({name: 'CR7'})
});