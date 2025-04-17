import express from "express";
import bodyParser from "body-parser";

const posts = [
  {
    username: "lucas",
    content: "Hit the gym hard today 💪 Feeling great and eating clean!",
    timestamp: "2h ago"
  },
  {
    username: "fitguy",
    content: "Avocado toast and green smoothies = perfect breakfast.",
    timestamp: "5h ago"
  }
];


const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));


app.get("/", (req, res) => {
  res.render("index.ejs");
});


app.get("/register", (req, res) => {
  res.render("register.ejs");
});




app.get("/login", (req, res) => {
  res.render("login.ejs");
});

app.post("/submit", (req, res) => {
  const { username, password } = req.body;
  if (username === "admin" && password === "123") {
    res.render("dashboard.ejs", { user: username, posts });
  } else {
    res.render("login.ejs");
  }
});

app.post("/post", (req, res) => {
  const { content } = req.body;

  if (content && content.trim() !== "") {
    posts.unshift({
      username: "lucas", // You can make this dynamic later
      content: content.trim(),
      timestamp: "Just now"
    });
  }

  // Re-render dashboard with new post
  res.render("dashboard.ejs", { user: "lucas", posts });
});
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
