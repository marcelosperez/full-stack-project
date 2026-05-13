import express from "express";
import axios from "axios";

const app = express();
const port = 3000;

// tells express to use EJS
app.set("view engine", "ejs");

// allows css files
app.use(express.static("public"));

// parse form data
app.use(express.urlencoded({ extended: true }));


// HOME PAGE - GET
app.get("/", (req, res) => {
  res.render("solution.ejs");
});

// HOME PAGE - POST
app.post("/", async (req, res) => {
  try {
    let url = "https://bored-api.appbrewery.com/random";
    const { type, participants } = req.body;

    if (type) url += `?type=${type}`;
    if (participants) {
      url += type ? `&participants=${participants}` : `?participants=${participants}`;
    }

    const response = await axios.get(url);
    res.render("solution.ejs", { data: response.data });
  } catch (error) {
    res.render("solution.ejs", { error: error.message });
  }
});


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});