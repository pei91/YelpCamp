const express = require('express');
const app = express();
const request = require('request');
const fetch = require('node-fetch');
const bodyParser = require('body-parser');
// name and image array [name:" ", image:"https://ddd" ]

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");


app.get('/',(req,res)=>{
    res.render("landing");
});

app.get('/campgrounds', (req,res)=>{
    let campgrounds = [
        {name: "Salmon Creek", image:"https://www.photosforclass.com/download/px_1230302"},
        {name: "Granite Hill", image:"https://www.photosforclass.com/download/px_2398220"},
        {name: "Montain goat's rest", image:"https://www.photosforclass.com/download/px_712067"}
    ]
    res.render("campgrounds", {campgrounds: campgrounds});
});

app.post('/campgrounds', (req, res)=>{
    res.send("You hit the post route")
    // get data from form and add to campgrounds array
    // redirect back to campgrounds page

})

app.get("/campgrounds/new", (req, res)=>{
    res.render("new.ejs")
})

const port = process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log("The Yelp Server has started!");
})




fetch('https://www.google.com/')
.then((response)=>{
    if (!response.ok){
        throw new Error('Not ok');
    }
    // console.log(response);
})
.catch(error=>{
    console.error('ERRaaaaOR', error)
})
