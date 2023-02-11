import express from "express";
import axios from "axios";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Server is running in 1234 port!");
});

router.get(`/api/:song`, async (req, res) => {
  // receive query parameter
  const { song } = req.params;
  let data = [];

  console.log("Searching song: " + song);

  const url = `${process.env.API}/search/track?q=${song}`; // requests deezer api with query parameter
  const options = {
    headers: {},
    timeout: 3000,
  };
  await axios
    .get(url, options)
    .then((res) => {
      console.log(res.data);
      data = res.data;
    })
    .catch((error) => error);

  res.json(data);
});

export default router; // default allows export just 1 thing
