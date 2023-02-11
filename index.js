import express from "express";
import cors from "cors";
import router from "./routes/routes.js";

const app = express();
const PORT = process.env.PORT; // || 1234;

app.use(express.json()); // parses incoming requests to JSON

app.use(
  express.urlencoded({
    // urlencoded allows proccesing fomrs data
    extended: true, // extended allows proccesing files too
  })
);

app.use(
  cors({
    origin: [
      "https://betoayza.github.io",
      "http://localhost:4173",
      "http://localhost:5173",
    ], // origin is only domain
  })
); // enable CORS

app.use(router); // enable routes

// app.use(morgan("dev")); // HTTP requests logs

app.listen(PORT, () => {
  console.log(PORT);
  console.log("Servidor corriendo en puerto 1234!");
});
