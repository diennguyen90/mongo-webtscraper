const express = require('express')
const mongojs = require("mongojs");
const axios = require("axios");
const cheerio = require("cheerio");




const app = express()

const PORT = process.env.PORT || 8080

app.use(express.urlencoded({ extended: true }))
app.use(express.json())


const databaseUrl = "scraper";
const collections = ["scrapedData"];


const db = mongojs(databaseUrl, collections);
db.on("error", function(error) {
  console.log("Database Error:", error);
});

app.get("/all", function(req, res) {
    // Find all results from the scrapedData collection in the db
    db.scrapedData.find({}, function(error, found) {
      // Throw any errors to the console
      if (error) {
        console.log(error);
      }
      // If there are no errors, send the data to the browser as json
      else {
        res.json(found);
      }
    });
  });
  
app.get("/scrape", function(req, res) {
    // Make a request via axios for the news section of `ycombinator`
    axios.get('https://www.nytimes.com/section/world/asia')
    .then( ({data })=> {
        const $ = cheerio.load(data)
    })
    res.send("Scrape Complete");
});


app.listen(PORT, function () {
    console.log('App listening on PORT: ' + PORT)
  })
  