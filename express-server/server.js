const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const uuidv4 = require('uuid');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`HTTP Server listening at http://localhost:${port} ...`);
})

app.get('/', (req, res) => {
    res.send('working...');
})


const products = [
    {
        "id": 1,
        "name": "Data Structures and Algorithms ",
        "description": "Book description",
        "isAvailable": true,
        "price": 500
      },
      {
        "id": 2,
        "name": "Premsons 608 Four Bearing Fidget Spinner",
        "description": "Perfect toy for fidgeters. Updated",
        "isAvailable": true,
        "price": 150
      },
      {
        "id": 3,
        "name": "Bahubali DVD",
        "description": "Raised in a remote tribal village, Shivudu grows up a carefree young man who relentlessly pursues his heart\"s desire.",
        "isAvailable": false,
        "price": 299
      }
]

app.get('/products', (req, res) => {
    res.status(200).send(products);    
})

app.get('/products/:productId', (req, res) => {
    return res.send(products[req.params.productId]);
  });

app.post('/products', (req, res) => {
    const id = uuidv4();
    const product = { 
      id, 
      name: req.body.name,
      description : req.body.description,
      price: req.body.price,
      isAvailable: req.body.isAvailable
    };
    products[id] = product;
    return res.state(200).send(product);
});

app.put('/products/:productId', (req, res) => {
    return res.send(
      `PUT HTTP method on user/${req.params.productId} resource`,
    );
});