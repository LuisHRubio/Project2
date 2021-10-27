const express = require("express");
const mongoose = require("mongoose");
const Post = require("./models/post")
const postsRouter = require("./routes/posts")
const app = express("app");
const methodOverride = require("method-override")

mongoose.connect("mongodb://localhost/blog",    {
    useUnifiedTopology: true
});

app.use(express.static("public"));
app.use("/css",express.static(__dirname + "public/css"));
app.use("/imagenes",express.static(__dirname + "public/imagenes"));

app.set("view engine","ejs");
app.use(methodOverride("_method"));

app.use(express.urlencoded({extended:false}));



app.get("/",async (req,res)=>{
    const posts = await Post.find().sort({createdAt: 'desc'});

    res.render("posts/index",{posts:posts});

});

app.use("/posts",postsRouter);

app.listen(3000);