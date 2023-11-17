const express = require('express')
const app = express()
const port = 4000
const cors = require('cors');

// Enable Cross-Origin Resource Sharing (CORS)
app.use(cors());
app.use(function(req, res, next) {
res.header("Access-Control-Allow-Origin", "*");
res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
res.header("Access-Control-Allow-Headers",
"Origin, X-Requested-With, Content-Type, Accept");
next();
});
// Middleware for parsing JSON and URL-encoded data
const bodyParser = require("body-parser");
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// getting-started.js
// Connecting to MongoDB using Mongoose
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  // Use the line below if your database requires authentication
  // await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');
  await mongoose.connect('mongodb+srv://admin:admin@cluster0.hcqirr6.mongodb.net/MYDB?retryWrites=true&w=majority');
  

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
// Define a schema for the "books" collection
const bookSchema = new mongoose.Schema({
  title: String,
  cover: String,
  author: String
});

// Create a model based on the schema
const bookModel = mongoose.model('joshs_books', bookSchema);

// Handle POST requests to create a new book
app.post('/api/book', (req,res)=>{
    console.log(req.body);
    bookModel.create({
      title:req.body.title,
      cover:req.body.cover,
      author:req.body.author
    })
    .then(()=>{res.send("Book Created")})
    .catch(()=>{res.send("Book NOT Created")})
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})
// Handle GET requests to retrieve all books
app.get('/api/books', async(req, res)=>{

  let books = await bookModel.find({});
  res.json(books);

})
// Handle GET requests to retrieve a specific book by ID
app.get('/api/book/:id', async(req,res)=> {
  console.log(req.params.id);

  let book = await bookModel.findById(req.params.id);
  res.send(book);
})


// Start the Express app and listen on the specified port
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})