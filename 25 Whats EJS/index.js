import express from "express";

const app = express();
const port = 3000;



app.get("/", (req, res) => {
    //0-6 0: Sunday, 1: Monday, 2: Tuesday, 3: Wednesday, 4: Thursday, 5: Friday, 6: Saturday
    const d = new Date("May 2, 2026 19:00:00");
    const day = d.getDay();
    let dayType;
    let advice;

    if (day === 0 || day === 6) {
        dayType = "a weekend day";
        advice = "it's time to relax and have fun";
    } else {
        dayType = "a weekday";
        advice = "it's time to work hard";
    }

  res.render("index.ejs", {
    dayType: dayType,
    advice: advice,
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}.`);
});